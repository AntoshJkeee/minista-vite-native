import './Icon.scss'
import cn from "classnames";
import { Icon as MinistaIcon} from 'minista';

const Icon = (props) => {

	const {
		className,
		name,
		hasFill = false,
	} = props

	const params = {
		fill: hasFill ? 'currentColor' : 'none',
		stroke: hasFill ? 'none' : 'currentColor',
	}

	return (
		<span className={cn(className, 'icon')}>
			<MinistaIcon iconId={name} {...params}/>
		</span>
	);
};

export default Icon;