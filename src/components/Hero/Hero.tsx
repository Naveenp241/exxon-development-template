import { Button } from '../Button/Button';
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
  buttonIconType?: "no-icon" | "arrow" | "angle";
  buttonLink?: string;
  buttonName?: string;
  backgroundGradient?: string;
  alt?: string;
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
  buttonIconType = 'arrow',
  buttonLink = '#',
  buttonName = 'Learn more',
  backgroundGradient,
  alt,
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
      <div className='cmp-hero--mobile-img md:hidden block'>
        <img src={backgroundImage} alt={alt} />
      </div>

      {
        backgroundGradient && 
          <div 
            className="cmp-hero__overlay absolute w-full h-full z-1" 
            style={{background: backgroundGradient ? backgroundGradient : undefined}}
            aria-hidden="true"
            role="presentation"
          ></div>
      }
      
      <article className="cmp-hero__content p-4 z-2">
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
                <Button
                  href={buttonLink}
                  label={buttonName}
                  onClick={() => {}}
                  size="large"
                  type="button"
                  iconType={buttonIconType}
                  className='inline-block text-sm font-bold'
                  aria-label={buttonName}
                  backgroundColor='#fff'
                />
              </div>
          </div> 
          : <div>
              <p className={`cmp-hero__subtext leading-normal mt-4 ${textColor}`}>{content}</p>
              <div className="cmp-hero__cta">
                <Button
                  href={buttonLink}
                  label={buttonName}
                  onClick={() => {}}
                  size="large"
                  type="button"
                  iconType={buttonIconType}
                  aria-label={buttonName}
                  backgroundColor='#fff'
                />
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
    <div className="cmp-hero-wrapper">
      <HeroCard {...props} />
    </div>
  )
);
