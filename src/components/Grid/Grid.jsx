import './Grid.scss'
import cn from "classnames";

const Grid = (props) => {

	const {
		columns = 1,
		children
	} = props

	return (
		<ul className={cn('grid', {
			[`grid__${columns}`]: columns > 1
		})}>
			{children.map((child, idx) => (
				<li
					className='grid__item'
					key={idx}
				>
					{child}
				</li>
			))}
		</ul>
	);
};

export default Grid;