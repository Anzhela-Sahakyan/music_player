export enum ESortOption {
  TrackNumberAsc,
  TrackNumberDes,
}

export interface ISongFilters {
  searchQuery: string;
  sort: ESortOption;
}
