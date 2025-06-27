import React from "react";
import "./CardBlock.css";
export interface CardBlockProps {
  imageUrl: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}
const CardBlock: React.FC<CardBlockProps> = ({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="card-block">
      <img src={imageUrl} alt={title} className="card-block__image" />
      <h3 className="card-block__title">{title}</h3>
      <div className="card-block__content">
        {description && <p className="card-block__description">{description}</p>}
        {buttonText && buttonLink && (
            <a href={buttonLink} className="card-block__button">
            {buttonText}
            </a>
        )}
      </div>
    </div>
  );
};
export default CardBlock;


