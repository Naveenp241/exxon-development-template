import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import './ShareInfo.css';

export interface SocialIconConfig {
  name: string;
  icon: string;
  label: string;
  link: string;
}

export interface ShareInfoProps {
  socialConfigs: SocialIconConfig[];
}

export const ShareInfo = ({ socialConfigs }: ShareInfoProps) => {
  const [active, setActive] = useState(false);
  const currentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currentRef.current && !currentRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);

  return (
    <section className="share-info relative" ref={currentRef}>
      <button className={`share-info__btn ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
        <FontAwesomeIcon icon={faShareNodes} />
      </button>

      {active && (
        <article className="share-info__container flex flex-col absolute">
          <div className="share-info__arrow"></div>

          <div className="flex items-center justify-between mb-5">
            <strong className="share-info__heading">SHARE</strong>
            <button
              className="share-info__close inline-flex ml-2 p-2"
              onClick={() => setActive(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <SocialMedia socialConfigs={socialConfigs} />
        </article>
      )}
    </section>
  );
};
