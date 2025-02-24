import '@/styles';
import { Head } from "minista"
import { Header, Content, Footer } from "@/layouts"
import { Banner } from "@/sections";

export default (props) => {
	const {children, title, url, isHeaderFixed, isNeedToRender, withCss} = props

	return (
		<>
			<Head htmlAttributes={{
				lang: 'en'
			}}>
				<title>Stream Vibe | {title}</title>
				<script src="/src/main.js" type='module'/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				{withCss && <link rel="stylesheet" href="/src/assets/css/entry.scss" />}
			</Head>
			<Header url={url} isFixed={isHeaderFixed}/>
			<Content isResetPaddingTop={isHeaderFixed}>
				{children}
				<Banner />
				{isNeedToRender ? <div>Render</div> : <div>No Render</div>}
				<div className="entry">Entry css</div>
			</Content>
			<Footer/>
		</>
	)
}
