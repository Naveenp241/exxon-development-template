import "./surfaced-item.css"; // Optional: Add styles here or use inline styles

interface SurfacedItemProps {
  surfacedItemType?: "card" | "credit-card";
  imageSrc?: string;
  title?: string;
  description?: string;
  linkLabel?: string;
  href?: string;
  descriptionNode?: React.ReactNode;
}

export const SurfacedItem = ({
  surfacedItemType = "card",
  imageSrc,
  title,
  description,
  href,
  linkLabel,
  descriptionNode,
}: SurfacedItemProps) => (
  <>
    {!descriptionNode ? (
      <div className={`surfaced-item-${surfacedItemType}`}>
        <img src={imageSrc} alt={title} className="surfaced-item-image" />
        <div className="surfaced-item-content">
          <h3 className="surfaced-item-title">{title}</h3>
          <p className="surfaced-item-description">{description}</p>
          {linkLabel ? (
            <div className="surfaced-item-links">
              <a href={href} className="surfaced-item-link">
                {linkLabel}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    ) : (
      <div className={`surfaced-item-${surfacedItemType}`}>
        <img src={imageSrc} alt={title} className="surfaced-item-image" />
        <div className="surfaced-item-content">
          <h3 className="surfaced-item-title">{title}</h3>
          <>{descriptionNode}</>
          {linkLabel ? (
            <div className="surfaced-item-links">
              <a href={href} className="surfaced-item-link">
                {linkLabel}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    )}
  </>
);
