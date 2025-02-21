import './Logo.scss';
import cn from 'classnames';

export const Logo = (props) => {
	const {className, loading = 'lazy'} = props

	return (
		<a className='logo' href='/' title='Home' aria-label='Home'>
			<img
				src="/images/logo.svg"
				alt=""
				className={cn(className, 'logo')}
				width={199}
				height={60}
				loading={loading}/>
		</a>
	);
}