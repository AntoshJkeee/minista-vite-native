import { Hero, Categories, Devices, Questions, Plans } from "@/sections";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Plans />
    </>
  )
}
