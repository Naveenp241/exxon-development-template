import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { type EmblaCarouselType, type EmblaOptionsType } from 'embla-carousel';
import './carousel.css'; // Make sure your CSS file exists
import { SurfacedItem } from '../SurfacedItem/SurfacedItem';

interface imageSrc {
  alternateText?: string,
  height?: number,
  url?: string,
  width?: number
}

type Slide = {
  surfacedItemType?: string;
  imageSrc?: imageSrc;
  title?: string;
  description?: string;
  label?: string; 
  href?: string;
};
interface EmblaCarouselProps {
  slides?: Slide[];
  options?: EmblaOptionsType;
  slidesToShow?: number;
  dotsVariant?: 'v1' | 'v2';
  floatContent?: boolean;
}

const Carousel: React.FC<EmblaCarouselProps> = ({ slides, options, slidesToShow, dotsVariant, floatContent = false }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    onInit(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
    emblaApi.on('resize', onSelect); // Recalculate on resize

    // Cleanup event listeners
    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
      emblaApi.off('resize', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="embla">
      {
        dotsVariant === 'v1'
        ? <div className={`embla__dots--${dotsVariant} px-4`}>

            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slides?.map((slide, index) => (
                  <div className={`embla__slide ${floatContent ? 'float-content' : ''}`} key={index} style={{ flex: `0 0 ${100 / (slidesToShow || 1)}%` }}>
                    <SurfacedItem
                      surfacedItemType="card"
                      imageSrc={slide?.imageSrc?.url} 
                      title={slide?.title}
                      description={slide?.description}
                      linkLabel={slide?.label}
                      href={slide?.href}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={`embla__controls ${floatContent ? 'float-content' : ''}`}>
              <button className="embla__button embla__button--prev" onClick={scrollPrev} disabled={prevBtnDisabled}>
                &#10094; {/* Left arrow */}
              </button>

              <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                  ></button>
                ))}
              </div>

              <button className="embla__button embla__button--next" onClick={scrollNext} disabled={nextBtnDisabled}>
                &#10095; {/* Right arrow */}
              </button>
            </div>
          </div>
        : <div className={`embla__dots--${dotsVariant}`}>
            <div className="embla__controls px-4">
              <button className="embla__button embla__button--prev" onClick={scrollPrev} disabled={prevBtnDisabled}>
                &#10094; {/* Left arrow */}
              </button>
              <button className="embla__button embla__button--next" onClick={scrollNext} disabled={nextBtnDisabled}>
                &#10095; {/* Right arrow */}
              </button>
            </div>

            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slides?.map((slide, index) => (
                  <div className={`embla__slide ${floatContent ? 'float-content' : ''}`} key={index} style={{ flex: `0 0 ${100 / (slidesToShow || 1)}%` }}>
                    <SurfacedItem
                      surfacedItemType="card"
                      imageSrc={slide?.imageSrc?.url} 
                      title={slide?.title}
                      description={slide?.description}
                      linkLabel={slide?.label}
                      href={slide?.href}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={`embla__dots ${floatContent ? 'float-content' : ''}`}>
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                ></button>
              ))}
            </div>
          </div>
      }

      
    </div>
  );
};

export default Carousel;