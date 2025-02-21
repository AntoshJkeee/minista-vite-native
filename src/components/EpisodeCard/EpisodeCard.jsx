import './EpisodeCard.scss'
import { Icon } from '@/components'

export const EpisodeCard = (props) => {
  const {
    number,
    title,
    description,
    duration,
    video,
  } = props

  return (
    <div className="episode-card">
      <div className="episode-card__number">
        {number}
      </div>
      <div className="episode-card__player" data-js-video-player=''>
        <video
          data-js-video-player-video=''
          className="episode-card__video"
          src={video.src}
          poster={video.poster}
          width={172}
          height={118}
        />
        <button
          type="button"
          className="episode-card__play-button is-active"
          aria-label='Play video'
          title='Play video'
          data-js-video-player-play-button=''
        >
          <Icon
            className="episode-card__play-button-icon"
            name="play-circle"
          />
        </button>
      </div>
      <div className="episode-card__body">
        <div className="episode-card__info">
          <h4 className="episode-card__title h6">{title}</h4>
          <div className="episode-card__duration">
            <Icon name="clock_stroke" ariaLabel="Duration" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="episode-card__description hidden-mobile">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
