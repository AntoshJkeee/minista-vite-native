import { Plans, PlansComparison } from '@/sections'

export const metadata = {
  title: 'Subscriptions',
}

export default () => {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}
