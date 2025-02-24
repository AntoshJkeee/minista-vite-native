import { MoviesBanner, Collections } from '@/sections'
import { MoviesStore } from "@/store/movies.store";

export const metadata = {
  title: 'Movies & Shows',
}

export default () => {
  return (
    <>
      <MoviesBanner />
      <Collections {...MoviesStore.Collections} />
    </>
  )
}
