import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonItems from '@/components/Seasons/seasonItems'
import Accordion from '@/components/Accordion'
import EpisodeCard from "@/components/EpisodeCard";

const Seasons = () => {
  return (
    <AccordionGroup
      className="seasons"
      mode="dark"
      isOrderedList={false}
    >
      {seasonItems.map(({ title, subtitle, episodes }, idx) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${idx}`}
          name="seasons"
          isOpen={idx === 0}
          key={idx}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, idx) => (
              <li className='seasons__item' key={idx}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons
