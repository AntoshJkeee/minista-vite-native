import './Button.scss'
import cn from "classnames";
import Icon from "@/components/Icon";

const Button = (props) => {
	const {
		className,
		href,
		type = 'button',
		target,
		mode = '',
		label,
		isLabelHidden = false,
		iconName,
		iconPosition = 'before',
	} = props

	const isLink = href !== undefined
	const Component = isLink ? 'a' : 'button'
	const linkProps = { href, target }
	const buttonProps = { type }
	const specificProps = isLink ? linkProps : buttonProps
	const title = isLabelHidden ? label : undefined
	const iconComponent = iconName && <Icon className='button__icon' name={iconName}/>

	return (
		<Component
			className={cn(className, 'button', {
				[`button__${mode}`] : mode
			})}
			{...specificProps}
			title={title}
			aria-label={title}
		>
			{iconPosition === 'before' && iconComponent}
			{!isLabelHidden && (
				<span className="button__label">{label}</span>
			)}
			{iconPosition === 'after' && iconComponent}
		</Component>
	)
}

export default Button