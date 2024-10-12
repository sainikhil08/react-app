import { create } from "zustand";

export interface GameQuery {
    genreId: number | null;
    platformId: number | null;
    sortOrder: string | null;
    searchQuery: string | null;
  }

interface GameQueryStore{
  gameQuery: GameQuery
  setGenreId: (genreId: number)=> void;
  setPlatformId:(platformId: number)=> void;
  setSortOrder: (sortOrder: string)=>void;
  setSearchQuery: (searchQuery: string)=>void;
}

const useGameQueryStore=create<GameQueryStore>(set=>({
    gameQuery: {} as GameQuery,
    setGenreId: (genreId: number)=>set((store)=>({gameQuery: {...store.gameQuery, genreId: genreId}})),
    setPlatformId: platformId=> set((store)=> ({gameQuery: {...store.gameQuery, platformId: platformId}})),
    setSortOrder: sortOrder=> set((store)=>({gameQuery: {...store.gameQuery, sortOrder: sortOrder}})),
    setSearchQuery: searchQuery=> set((store)=>({gameQuery:{...store.gameQuery, searchQuery: searchQuery}}))

}))

export default useGameQueryStore;