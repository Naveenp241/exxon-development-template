import { Button } from "../Button/Button";
import "./paragraph.css";

export interface ParagraphProps {
  paragraph: string;
  inlineTextLink?: string;
  inlineTextLinkURL?: string;
  listItems?: string[];
  ctaText?: string;
  ctaTextURL?: string;
  showArrow?: boolean;
  classname?: string;
  ariaHidden?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({
  paragraph,
  inlineTextLink,
  inlineTextLinkURL,
  listItems,
  ctaText,
  ctaTextURL,
  showArrow = true,
  classname = "",
  ariaHidden = true
}) => {
  const renderParagraph = () => {
    if (inlineTextLink && inlineTextLinkURL && paragraph.includes(inlineTextLink)) {
      const parts = paragraph.split(inlineTextLink);
      return (
        <p className={`paragraph-block__text ${classname}`}>
          {parts[0]}
          <a href={inlineTextLinkURL} className="paragraph-block__inline-link" target="_blank" aria-hidden = {ariaHidden} tabIndex={ariaHidden ? -1: 0}>
            {inlineTextLink}
          </a>
          {parts[1]}
        </p>
      );
    }
    return <p className={`paragraph-block__text ${classname}`}>{paragraph}</p>;
  };

  return (
    <div className="paragraph-block">
      {renderParagraph()}
      {listItems && listItems.length > 0 && (
        <ul className="paragraph-block__list">
          {listItems.map((item, index) => (
            <li key={index} className="paragraph-block__list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
      {ctaText && ctaTextURL && (
        <>
          {
            showArrow ? 
              <Button
                href={ctaTextURL}
                iconType="angle"
                label={ctaText}
                onClick={() => {}}
                size="large"
                type="button"
                target="_blank"
                className="paragraph-block__link"
                backgroundColor="#0C479D"
              />
            : <a href={ctaTextURL} target="_blank" className="paragraph-block__link"> {ctaText} </a>
          }
        </>
      )}
    </div>
  );
};
export default Paragraph;
