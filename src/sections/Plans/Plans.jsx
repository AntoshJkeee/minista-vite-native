import { Section } from '@/layouts'
import { Grid, PlanCard, Tabs, TabsNavigation } from "@/components";

export const Plans = (props) => {

	const { plansItems } = props;

	const tabsTitle = 'plans-tabs'
	const tabsNavigationId = 'plans-tabs-navigation'

	return (
		<Section
			title="Choose the plan that's right for you"
			id='plans-id'
			description='Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
			actions={(
				<TabsNavigation
					id={tabsNavigationId}
					title={tabsTitle}
					items={plansItems}
				/>
			)}
		>
			<Tabs
				title={tabsTitle}
				navigationTargetElementId={tabsNavigationId}
				items={plansItems.map((planItem) => ({
					title: planItem.title,
					isActive: planItem.isActive,
					children: (
						<Grid columns={3}>
							{planItem.items.map((item, idx) => (
								<PlanCard {...item} key={idx} />
							))}
						</Grid>
					)
				}))}
			/>
		</Section>
	);
}