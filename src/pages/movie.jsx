import { MovieBanner, MovieDetails} from '@/sections'

export const metadata = {
  title: 'Movie - Kantara',
}

export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}
