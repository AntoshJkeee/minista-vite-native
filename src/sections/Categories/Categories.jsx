import './Categories.scss'
import { Section } from '@/layouts'
import { CategoryCard, Slider, SliderNavigation } from "@/components";
import categoryItems from "./categoryItems";

export const Categories = () => {
	const sliderNavigationId = 'categories-slider-navigation'

	return (
		<Section
			title='Explore our wide variety of categories'
			titleId='categories-title'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
			isActionsHiddenOnMobile
			actions={(
			<SliderNavigation
				mode='tile'
				id={sliderNavigationId}
			/>
		)}>
			<Slider
				isBeyondTheViewportOnMobileS
				navigationTargetElementId={sliderNavigationId}
			>
				{
					categoryItems.map((item, idx) => (
						<CategoryCard {...item} key={idx}/>
					))
				}
			</Slider>
		</Section>
	);
};