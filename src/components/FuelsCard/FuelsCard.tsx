import "./FuelsCard.css";

export interface FuelsCardProps {
  imageUrl: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}
const FuelsCard: React.FC<FuelsCardProps> = ({
  imageUrl,
  title,
  description,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="fuels-card">
      <img src={imageUrl} alt="Race Card" className="fuels-card__image" />
      <div className="fuels-card__content">
        <h3 className="fuels-card__title">{title}</h3>
        <p className="fuels-card__description">{description}</p>
        <a href={linkUrl} className="fuels-card__link">
          {linkText} &rsaquo;
        </a>
      </div>
    </div>
  );
};

export default FuelsCard;
