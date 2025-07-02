import { Hero } from "../Hero/Hero";
import "./SingleFeature.css";

export type FeatureTheme = "light" | "dark";

export interface SingleFeatureProps {
  featureBgImage: string;
  featureContent: string;
  featureButtonText: string;
  featureButtonLink: string;
  featureTheme: FeatureTheme;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({
  featureBgImage,
  featureContent,
  featureButtonText,
  featureButtonLink,
  featureTheme = "dark",
}) => {
  const hasBackgroundImage = !!featureBgImage;
  const wrapperClassName = `SingleFeatureInfo__wrapper ${featureTheme}-theme ${hasBackgroundImage ? "has-bg" : "no-bg"}`;

  const wrapperStyle = hasBackgroundImage
    ? { backgroundImage: `url(${featureBgImage})` }
    : {};

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <Hero
        heroType="corporate-main"
        backgroundImage={featureBgImage}
        content={featureContent}
        buttonName={featureButtonText}
        buttonLink={featureButtonLink}
        buttonIconType="arrow"
      />
    </div>
  );
};

export default SingleFeature;


