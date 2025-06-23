import './surfaced-item.css'; // Optional: Add styles here or use inline styles

interface SurfacedItemProps {
    surfacedItemType: 'card' | 'credit-card';
    imageSrc: string;
    title: string;
    description: string;
    links: [{ label: string; href: string }];
}

   export const SurfacedItem = ({ surfacedItemType, imageSrc, title, description, links }: SurfacedItemProps) => ( 
        <div className={`surfaced-item-${surfacedItemType}`}>
            <img src={imageSrc} alt={title} className="surfaced-item-image" />
            <div className="surfaced-item-content">
                <h3 className="surfaced-item-title">{title}</h3>
                <p className="surfaced-item-description">{description}</p>
                <div className="surfaced-item-links">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="surfaced-item-link">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );

