import { Hero, Categories, Devices, Questions, Plans } from "@/sections";
import { IndexStore } from "@/store/index.store";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true
}

export default () => {
  return (
    <>
      <Hero />
      <Categories {...IndexStore.Categories} />
      <Devices {...IndexStore.Devices} />
      <Questions {...IndexStore.Questions} />
      <Plans {...IndexStore.Plans} />
    </>
  )
}
