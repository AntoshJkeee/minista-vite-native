import './PersonCard.scss'
import {Image} from "minista";

const PersonCard = (props) => {

	const {
		imgSrc,
		imgAlt,
		name,
		subtitle,
	} = props

	const hasBody = Boolean(name || subtitle);

	return (
		<div
			className='person-card'
		>
			<Image className='person-card__image' src={imgSrc} alt={imgAlt} title={imgAlt}/>
			{hasBody && (
				<div className='person-card__body'>
					{name && <h4 className='person-card__name'>{name}</h4>}
					{subtitle && <h4 className='person-card__name'>{subtitle}</h4>}
				</div>
			)}
		</div>
	);
};

export default PersonCard;