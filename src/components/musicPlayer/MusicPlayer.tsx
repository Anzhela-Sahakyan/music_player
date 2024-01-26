import Header from "../header/Header";
import SongList from "../songList/SongList";
import { useEffect, useMemo, useRef, useState } from "react";
import { ESortOption } from "../../types/filterTypes";
import filterSongList from "../../utils/sortUtils";
import AddSongBtn from "../musicUpload/addSongBtn/AddSongBtn";
import ISong from "../../types/songTypes";
import { useSongList } from "../hooks/useSongList";
import { Loader } from "../loader/Loader";

enum SortMode {
  ManualDragSort,
  AutoSort,
}

export default function MusicPlayer() {
  // State for searching, it is initialized as an empty string.
  const [searchQuery, setSearchQuery] = useState("");

  // State for sorting, it is initialized with ascending order.
  const [sort, setSort] = useState(ESortOption.TrackNumberAsc);

  // State for displaying and updating the list of songs. It will be set with the value of fetchedSongList in useEffect below.
  const [songList, setSongList] = useState<ISong[]>([]);

  // State for tracking the current sorting mode. It is initialized as AutoSort, meaning being sorted with the button and not drag-and-drop.
  const [sortMode, setSortMode] = useState(SortMode.AutoSort);

  // Songs are fetched here
  const { songList: fetchedSongList, isLoading } = useSongList();

  const containerRef = useRef<HTMLDivElement>(null);

  // useMemo hook is used to optimize the performance and avoid unnecessary re-renderings.
  // Inside useMemo an imported filterSongList function is called which is used to filter the song list based on
  // the search query and sort the list based on the selected sort option. The default sorting is in ascending order.
  // Filtering with searchQuery is done by song name or artist name.
  // A dependencies array is provided at the end of useMemo  hook, so that it re-renders the component when any item in
  // the dependencies array is changed.
  const filteredSongList = useMemo(
    () =>
      filterSongList({
        filters: { searchQuery, sort },
        songList,
      }),
    [searchQuery, sort, songList]
  );

  const handleSort = (sort: ESortOption) => {
    setSortMode(SortMode.AutoSort);
    setSort(sort);
  };

  const handleSearchQueryChange = (searchQuery: string) => {
    setSortMode(SortMode.AutoSort);
    setSearchQuery(searchQuery);
  };

  const handleSongListManualChange = (songList: ISong[]) => {
    setSortMode(SortMode.ManualDragSort);
    setSongList(songList);
  };

  useEffect(() => {
    setSongList(fetchedSongList);
  }, [ fetchedSongList ]);

  return (
    <div ref={containerRef}>
      {isLoading && <Loader parent={containerRef} />}
      {/* <Loader parent={containerRef}/> */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={handleSearchQueryChange}
        setSort={handleSort}
        sort={sort}
      />
      <SongList
        setSongList={handleSongListManualChange}
        songList={
          sortMode === SortMode.ManualDragSort ? songList : filteredSongList
        }
      />
      <AddSongBtn />
    </div>
  );
}
