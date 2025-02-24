import { Plans, PlansComparison } from '@/sections'
import { IndexStore } from "@/store/index.store";

export const metadata = {
  title: 'Subscriptions',
}

export default () => {
  return (
    <>
      <Plans {...IndexStore.Plans} />
      <PlansComparison />
    </>
  )
}
