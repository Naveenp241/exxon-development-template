// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './hero.css';

export interface HeroProps {
  heroType: 'corporate-hero' | 'corporate-main' | 'fuels-hero',
  enableSubtitle?: boolean;
  enableContent?: boolean;
  enableClick?: boolean;
  backgroundImage?: string;
  subtitle?: string;
  title?: string;
  content?: string;
  fontColor?: 'light' | 'dark';
  href?: string;
  buttonLink?: string;
  buttonName?: string;
  backgroundGradient?: string;
}

const HeroCard = ({
  heroType = 'corporate-hero',
  enableSubtitle,
  enableContent,
  title,
  subtitle,
  content,
  backgroundImage,
  fontColor = 'dark',
  buttonLink = '#',
  buttonName = 'Learn more',
  backgroundGradient
}: Omit<HeroProps, 'enableClick'>) => {
  const textColor = fontColor === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <section
      className={`cmp-hero bg-gray-100 bg-no-repeat overflow-hidden bg-cover flex items-end relative cmp-hero--${heroType}`}
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
      }}
        aria-label={title || 'Hero section'}
      >
      {
        backgroundGradient && 
        <div 
          className="cmp-hero__overlay absolute w-full h-full z-1" 
          style={{background: backgroundGradient ? backgroundGradient : undefined}}
          aria-hidden="true"
          role="presentation"
        ></div>
      }
      
      <article className="max-w-4xl cmp-hero__content p-4 z-2">
        {
          heroType === 'corporate-hero' ? 
          <header>
            <h1 className={`${textColor}`}>
              {enableSubtitle && (
                <small className="cmp-hero__subtitle text-sm font-bold leading-normal uppercase mb-1">
                  {subtitle}
                </small>
              )}
              <strong className="cmp-hero__title leading-normal block">{title}</strong>
            </h1>

            {enableContent && (
              <p className={`cmp-hero__subtext text-base leading-normal mt-4 ${textColor}`}>{content}</p>
            )}
          </header> : heroType === 'corporate-main' 
          ? <div>
              <h1 className={`${textColor}`}>
                <small className={`cmp-hero__subtitle text-sm font-bold leading-normal uppercase mb-4`}>
                  {subtitle}
                </small>
                <strong className={`cmp-hero__title leading-normal block`}> {title} </strong>
              </h1>

              <p className={`cmp-hero__subtext text-base leading-normal mt-4 ${textColor}`}>{content}</p>
              <div className="cmp-hero__cta">
                <a className='inline-block text-sm font-bold px-4 py-2' href={buttonLink} aria-label={buttonName}>
                  {buttonName}
                  {/* <FontAwesomeIcon icon={faArrowRight} className='text-xs pl-4' /> */}
                </a>
              </div>
          </div> 
          : <div>
              <p className={`cmp-hero__subtext text-sm leading-normal mt-4 ${textColor}`}>{content}</p>
              <div className="cmp-hero__cta">
                <a className='inline-block text-sm px-6 py-2' href={buttonLink} aria-label={buttonName}>{buttonName}</a>
              </div>
          </div>
        }
      </article>
    </section>
  );
};

export const Hero = ({
  enableClick = false,
  href = '#',
  ...props
}: HeroProps) => (
  enableClick ? (
    <a href={href} className="cmp-hero__anchor block">
      <HeroCard {...props} />
    </a>
  ) : (
    <HeroCard {...props} />
  )
);
