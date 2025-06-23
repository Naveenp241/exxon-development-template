import { useEffect, useState } from 'react';
import { ShareInfo } from '../ShareInfo/ShareInfo';
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import './TopicContainer.css';

export interface TopicContainerProps {
  columnType: 'column-1' | 'column-2';
  media: 'image' | 'text';
  mediaOrder?: 'media' | 'content';
  imageSrc?: string;
  alt?: string;
  mediabackgroundColor?: string;
  contentbackgroundColor?: string;
  mediaContentSubtext?: string;
  mediaContentHeading?: string;
  mediaContent?: string;
  enableLatestNews?: boolean;
  latestNewsContent?: latestNewsConfig[];
  contentHeading?: string;
  content?: string;
  linkLabel?: string;
  linkHref?: string;
  enableShare?: boolean;
}

interface latestNewsConfig {
  heading?: string,
  linkTo?: string,
  newsType?: string,
  duration?: string,
  date?: string
}

const socialIconInfo = [{
  icon: 'faFacebookF',
  label: 'Facebook link opens in a new window',
  link: 'https://www.facebook.com/',
  name: 'facebook'
},
{
  icon: 'faXTwitter',
  label: 'Twitter link opens in a new window',
  link: 'https://x.com/',
  name: 'twitter'
},
{
  icon: 'faLinkedinIn',
  label: 'LinkedIn link opens in a new window',
  link: 'https://www.linkedin.com/',
  name: 'linkedin'
},
{
  icon: 'faEnvelope',
  label: 'Email link opens in a new window',
  link: 'https://mail.google.com/',
  name: 'email'
},
{
  icon: 'faLink',
  label: 'Copy link to clipboard',
  link: '/',
  name: 'clipboard'
}];

export const TopicContainer = (
  { 
    columnType,
    media, 
    mediaOrder, 
    imageSrc, 
    alt, 
    linkLabel = 'link',
    linkHref = '#',
    enableShare = true,
    enableLatestNews = false,
    latestNewsContent,
    ...props }: TopicContainerProps) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={`topic-container topic-container--${columnType} flex flex-col lg:flex-row overflow-hidden`}>
      {
        columnType === 'column-2' ? <>
          <div 
            className={[`${mediaOrder === 'media' ? 'order-1' : 'order-2'}`, 'topic-container__wrapper', 'topic-container--media', 'flex justify-center items-start lg:items-center', 'relative', 'overflow-hidden'].join(' ')} 
            style={{backgroundColor: props.mediabackgroundColor}}
          >
            {
              media === 'image' ?
                <Image 
                  src={imageSrc}
                  className='relative w-full h-full object-cover topic-img' 
                  alt={alt} 
                />
              : <div className={`topic-container__media-content py-20 animated-content ${show ? 'slide-in' : ''}`}>
                <h2 className='topic-container__heading'> {props.mediaContentHeading} </h2>
                <div className="topic-container__media-rich-text">
                  {props.mediaContent}
                </div>
              </div>
            }

            {
              enableShare && imageSrc &&
                <ShareInfo socialConfigs={socialIconInfo} />
            }
          </div>
          <div 
            className={[`${mediaOrder === 'media' ? 'order-2' : 'order-1'}`, 'topic-container__wrapper', 'topic-container--content', 'flex justify-center items-start lg:items-center', 'relative', `animated-content ${show ? 'slide-in' : ''}`].join(' ')} 
            style={{backgroundColor: props.contentbackgroundColor}}
          >
            {
              !enableLatestNews ?
                <div className='topic-container__media-content py-20'>
                  <h2 className='topic-container__heading'> {props.contentHeading} </h2>
                  <div className="topic-container__media-rich-text mb-5">
                    {props.content}
                  </div>
                  <div>
                    <Button
                      href={linkHref}
                      label={linkLabel}
                      size="large"
                    />
                  </div>
                </div>
              : <div className='topic-container__media-content topic-container__media-content--content py-20'>
                  <h2 className='topic-container__heading'> {props.contentHeading} </h2>
                  <a href={linkHref} className='topic-container__news-link inline-block'> {linkLabel} </a>
                  <article className='topic-container__latest-news'>
                    {
                      latestNewsContent && latestNewsContent.map((ele, index) => (
                        <div className="topic-container__news-wrapper mb-5" key={index}>
                          <a href={ele.linkTo} className='topic-container__news-heading'> {ele.heading} </a>
                          <div className="topic-container__content-wrapper mt-2">
                            { ele.newsType && <strong className='topic-container__news-text'> {ele.newsType} </strong> }
                            { ele.duration && <span className='topic-container__news-text'> {ele.duration} </span> }
                            { ele.date && <span className='topic-container__news-text'> {ele.date} </span> }
                          </div>
                        </div>
                      ))
                    }
                  </article>
                </div>
            }
          </div>
        </> 
        : <div className={`topic-container--column-1-wrapper flex animated-content ${show ? 'slide-in' : ''}`} style={{backgroundColor: props.contentbackgroundColor}}>
          <div className='topic-container__content'>
            <h2 className='topic-container__heading flex flex-col'> 
              <small className='topic-container__subheading mb-2.5'> {props.mediaContentSubtext} </small>
              <strong>{props.mediaContentHeading}</strong>
            </h2>
            <div className="topic-container__media-rich-text">
              {props.mediaContent}
            </div>
          </div>
        </div>
      }
    </section>
  );
};
