import './surfaced-item.css'; // Optional: Add styles here or use inline styles

interface SurfacedItemProps {
    surfacedItemType?: 'card' | 'credit-card';
    imageSrc?: string;
    title?: string;
    description?: string;
    linkLabel?: string; 
    href?: string;
}

   export const SurfacedItem = ({ surfacedItemType = "card", imageSrc, title, description, href, linkLabel }: SurfacedItemProps) => ( 
        <div className={`surfaced-item-${surfacedItemType}`}>
            <img src={imageSrc} alt={title} className="surfaced-item-image" />
            <div className="surfaced-item-content">
                <h3 className="surfaced-item-title">{title}</h3>
                <p className="surfaced-item-description">{description}</p>
                <div className="surfaced-item-links">
                    <a href={href} className="surfaced-item-link">
                        {linkLabel}
                    </a>
                </div>
            </div>
        </div>
    );

