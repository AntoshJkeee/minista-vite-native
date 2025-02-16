import './Categories.scss'
import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";

const Categories = () => {

	const categoryItems = [
		{
			id: 0,
			title: 'Action',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/2.jpg',
				'/src/assets/images/categories/action/3.jpg',
				'/src/assets/images/categories/action/4.jpg',
			]
		},
		{
			id: 1,
			title: 'Adventure',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/2.jpg',
				'/src/assets/images/categories/action/3.jpg',
				'/src/assets/images/categories/action/4.jpg',
			]
		},
		{
			id: 2,
			title: 'Comedy',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/2.jpg',
				'/src/assets/images/categories/action/3.jpg',
				'/src/assets/images/categories/action/4.jpg',
			]
		},
		{
			id: 3,
			title: 'Drama',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/2.jpg',
				'/src/assets/images/categories/action/3.jpg',
				'/src/assets/images/categories/action/4.jpg',
			]
		},
		{
			id: 4,
			title: 'Horror',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/2.jpg',
				'/src/assets/images/categories/action/3.jpg',
				'/src/assets/images/categories/action/4.jpg',
			]
		}
	]

	return (
		<Section
			title='Explore our wide variety of categories'
			titleId='categories-title'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
			isActionsHiddenOnMobile
			actions={(
			<div>
				<button>назад</button>
				<button>вперед</button>
			</div>
		)}>
			{
				categoryItems.map(({title, images, id}) => (
					<CategoryCard title={title} images={images} key={id}/>
				))
			}
		</Section>
	);
};

export default Categories;