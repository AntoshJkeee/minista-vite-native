import { MoviesBanner, Collections } from '@/sections'

export const metadata = {
  title: 'Movies & Shows',
}

export default () => {
  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}
