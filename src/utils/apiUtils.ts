import { songs } from "../data";
import ISong from "../types/songTypes";

interface IMock<T> {
  error?: string;
  delay?: number;
  data?: T
}

export async function fetchData<T>({url, init, mock} : { url: string, init?: RequestInit, mock: IMock<T> }): Promise<T | undefined> {
  if(mock) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        mock.error ? reject(mock.error) : resolve(mock.data);
      }, mock.delay ?? 1000);
    });
  }
  return (await fetch(url, init)).json();
}


export async function fetchSongList(): Promise<ISong[]> {
  return await fetchData<ISong[]>({url: '/api/song-list', mock: {
    data: songs,
  }}) as ISong[];
}