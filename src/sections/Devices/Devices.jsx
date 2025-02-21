import { Section } from '@/layouts'
import { DeviceCard, Grid } from "@/components";

export const Devices = () => {

	const deviceItems = [
		{
			title: 'Smartphones',
			description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
			imgSrc: '/images/devices/1.svg'
		},
		{
			title: 'Tablet',
			description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
			imgSrc: '/images/devices/2.svg'
		},
		{
			title: 'Smart TV',
			description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
			imgSrc: '/images/devices/3.svg'
		},
		{
			title: 'Laptops',
			description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
			imgSrc: '/images/devices/4.svg'
		},
		{
			title: 'Gaming Consoles',
			description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
			imgSrc: '/images/devices/5.svg'
		},
		{
			title: 'VR Headsets',
			description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
			imgSrc: '/images/devices/6.svg'
		}
	]

	return (
		<Section
			title='We Provide you streaming experience across various devices.'
			titleId='devices-title'
			description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
		>
			<Grid
				columns={3}
			>
				{deviceItems.map((item, idx) => (
					<DeviceCard {...item} key={idx}/>
				))}
			</Grid>
		</Section>
	);
};