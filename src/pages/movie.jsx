import { MovieBanner, MovieDetails} from '@/sections'
import { MovieStore } from "@/store/movie.store";

export const metadata = {
  title: 'Movie - Kantara',
}

export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails {...MovieStore.MovieDetails}/>
    </>
  )
}
