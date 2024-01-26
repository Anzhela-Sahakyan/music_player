import { useEffect, useState } from "react"
import ISong from "../../types/songTypes";
import { useLoader } from "./useLoader";
import { fetchSongList } from "../../utils/apiUtils";

export const useSongList = () => {
  const [songList, setSongList] = useState<ISong[]>([]);
  const {enableLoader, disableLoader, isLoading} = useLoader();

  const fetchSongs = async () => {
    enableLoader();
    try {
      const fetchedSongList = await fetchSongList();
      setSongList(fetchedSongList);
    } finally {
      disableLoader();
    }
  }

  // React expects us to put all variables created inside component but outside of the effect itself to be in dependency array.
  // I used // eslint-disable-next-line react-hooks/exhaustive-deps to suprres the warning since i need the effect to run only once.
  // I could of course include dependencies as well, but in that case i would also have to use useCallback for the functions and then worry about useCallback dependency array 
  useEffect(() => {
    fetchSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {songList, isLoading, refetchSongs: fetchSongs}
}
