import { ESortOption, ISongFilters } from "../types/filterTypes";
import ISong from "../types/songTypes";

interface IUseFiltersArgs {
  filters: ISongFilters;
  songList: ISong[];
}

export default function filterSongList({ filters, songList }: IUseFiltersArgs) {
  const filteredList = songList.filter(
    (song) =>
      song.songName.toUpperCase().includes(filters.searchQuery.toUpperCase()) ||
      song.artistName.toUpperCase().includes(filters.searchQuery.toUpperCase())
  );

  return filteredList.sort((a, b) =>
    filters.sort === ESortOption.TrackNumberDes
      ? b.trackNumber - a.trackNumber
      : a.trackNumber - b.trackNumber
  );
}
