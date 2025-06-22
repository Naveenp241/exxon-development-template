// import React from "react";
import "./NearByStation.css";
interface NearByStationProps {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  heroButtonText: string;
  heroButtonLink: string;
  accountTitle: string;
  accountDescription: string;
  accountButtonText: string;
  accountButtonLink: string;
  faqTitle: string;
  faqDescription: string;
  faqButtonText: string;
  faqButtonLink: string;
  faqDisclaimer: string;
}
const NearByStation: React.FC<NearByStationProps> = ({
  heroImage,
  heroTitle,
  heroDescription,
  heroButtonText,
  heroButtonLink,
  accountTitle,
  accountDescription,
  accountButtonText,
  accountButtonLink,
  faqTitle,
  faqDescription,
  faqButtonText,
  faqButtonLink,
  faqDisclaimer,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="near-by-station-section near-by-station-section_hero">
        <img src={heroImage} alt="Exxon Mobil Station" />
        <div className="near-by-station-section-container">
            <div className="near-by-station-section-info">
                <h2 dangerouslySetInnerHTML={{ __html: heroTitle }} />
                <p>{heroDescription}</p>
            </div>
            <a href={heroButtonLink} className="btn">
            {heroButtonText}
            </a>
        </div>
      </section>
      {/* Account Management */}
      <section className="near-by-station-section near-by-station-section_accounts">
        <h2>{accountTitle}</h2>
        <p>{accountDescription}</p>
        <a href={accountButtonLink} className="btn">
          {accountButtonText}
        </a>
      </section>
      {/* FAQ Section */}
      <section className="near-by-station-section near-by-station-section_faq">
        <div className="near-by-station-section-container">
            <div className="near-by-station-section-info">
                <h2>{faqTitle}</h2>
                <p>{faqDescription}</p>
            </div>
            <a href={faqButtonLink} className="btn">
                {faqButtonText}
            </a>
        </div>
        <div className="disclaimer">
          <p>{faqDisclaimer}</p>
        </div>
      </section>
    </div>
  );
};
export default NearByStation;
