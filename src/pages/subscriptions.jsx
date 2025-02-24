import { Plans, PlansComparison } from '@/sections'
import { IndexStore } from "@/store/index.store";
import { SubscriptionsStore } from "@/store/subscriptions.store";

export const metadata = {
  title: 'Subscriptions',
}

export default () => {
  return (
    <>
      <Plans {...IndexStore.Plans} />
      <PlansComparison {...SubscriptionsStore.PlansComparison} />
    </>
  )
}
