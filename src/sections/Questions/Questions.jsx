import './Questions.scss'
import { Section } from "@/layouts";
import { Button, AccordionGroup, Accordion } from "@/components";

export const Questions = () => {

	const questionItems = [
		'What is StreamVibe?',
		'How much does StreamVibe cost?',
		'What content is available on StreamVibe?',
		'How can I watch StreamVibe?',
		'How do I sign up for StreamVibe?',
		'What is the StreamVibe free trial?',
		'How do I contact StreamVibe customer support?',
		'What are the StreamVibe payment methods?'
	];

	return (
		<Section
			title='Frequently Asked Questions'
			titleId='questions-title'
			description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
			actions={(
				<Button
					href='/support'
					label='Ask a Question'
				/>
			)}
		>
			<AccordionGroup columns={2}>
				{questionItems.map((question, idx) => (
					<Accordion
						title={question}
						id={`question=${idx}`}
						name='questions'
						isOpen={idx === 0}
						key={idx}
					>
						<p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
					</Accordion>
				))}
			</AccordionGroup>
		</Section>
	);
};