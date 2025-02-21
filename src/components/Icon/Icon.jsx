import './Icon.scss'
import cn from "classnames";
import { Icon as MinistaIcon} from 'minista';

export const Icon = (props) => {

	const {
		className,
		name,
		hasFill = false,
		ariaLabel
	} = props

	const params = {
		fill: hasFill ? 'currentColor' : 'none',
		stroke: hasFill ? 'none' : 'currentColor',
	}

	return (
		<span
			className={cn(className, 'icon')}
			aria-label={ariaLabel}
		>
			<MinistaIcon iconId={name} {...params}/>
		</span>
	);
}