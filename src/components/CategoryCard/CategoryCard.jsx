import './CategoryCard.scss'
import {Image} from "minista";
import Icon from "@/components/Icon";

const CategoryCard = (props) => {
	const {
		title,
		images = [],
	} = props

	return (
		<a className='category-card' href='/'>
			<div className='category-card__images'>
				{images.map((imgSrc, idx) => (
					<Image
						className='category-card__image'
						src={imgSrc}
						key={idx}
					/>
				))}
			</div>
			<div className="category-card__body">
				<h3 className="category-card__title">
					{title}
				</h3>
				<Icon
					className='category__icon'
					name='arrow-right'
				/>
			</div>
		</a>
	);
};

export default CategoryCard;