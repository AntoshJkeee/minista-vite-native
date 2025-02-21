import { ShowBanner, MovieDetails } from '@/sections'
import { Seasons } from '@/components'

export const metadata = {
  title: 'Show - Stranger Things',
}

export default () => {
  return (
    <>
      <ShowBanner />
      <MovieDetails
        seasons={<Seasons />}
      />
    </>
  )
}
