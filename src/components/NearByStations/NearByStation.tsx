import { Hero } from "../Hero/Hero";
import "./NearByStation.css";

interface NearByStationProps {
  variant?: "findAStation" | "nearByStationInfo" | "mobilVariant";
  imageLink: string;
  accountBgImage: string;
  accountTitle: string;
  accountDescription: string;
  accountButtonText: string;
  accountButtonLink: string;
}
const NearByStation: React.FC<NearByStationProps> = ({
  variant,
  imageLink,
  accountBgImage,
  accountTitle,
  accountDescription,
  accountButtonText,
  accountButtonLink,
}) => {
  return (
    <div>
      {variant === "findAStation" ? 
        <div className={`cmp-${variant}`}>
          <Hero
            heroType="corporate-hero"
            backgroundImage={accountBgImage}
            enableClick={true}
            href={imageLink}
          />
        </div>
      :
        <div className={`nearByStationInfo__wrapper ${variant}`}>
          <Hero
            heroType="corporate-main"
            backgroundImage={accountBgImage}
            title={accountTitle}
            content={accountDescription}
            buttonName={accountButtonText}
            buttonLink={accountButtonLink}
            fontColor="light"
            buttonIconType="no-icon"
          />
        </div>
      }
    </div>
  );
};
export default NearByStation;
