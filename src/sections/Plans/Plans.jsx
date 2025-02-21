import { Section } from '@/layouts'
import { Grid, PlanCard, Tabs, TabsNavigation } from "@/components";
import planGroups from "@/sections/Plans/planGroups";

export const Plans = () => {

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
					items={planGroups}
				/>
			)}
		>
			<Tabs
				title={tabsTitle}
				navigationTargetElementId={tabsNavigationId}
				items={planGroups.map((planGroup) => ({
					title: planGroup.title,
					isActive: planGroup.isActive,
					children: (
						<Grid columns={3}>
							{planGroup.items.map((item, idx) => (
								<PlanCard {...item} key={idx} />
							))}
						</Grid>
					)
				}))}
			/>
		</Section>
	);
}