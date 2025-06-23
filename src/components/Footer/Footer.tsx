import ExxonMobil from '../../assets/images/exxon-mobil.svg';
import Exxon from '../../assets/images/exxon.svg';
import Mobil from '../../assets/images/mobil.svg';
import Esso from '../../assets/images/esso.svg';
import Xto from '../../assets/images/xto-energy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export interface FooterProps {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <footer className="footer w-full flex flex-col" role="contentinfo" {...props}>
      <section className="footer__top" aria-labelledby="footer-navigation">
        <article className="footer__content px-6 grid">
          <div className="footer__links" id="footer-navigation">
            <ul className="footer__list flex" aria-label="Footer navigation">
              <li className="footer__list-item text-sm leading-relaxed mr-4">
                <a href="#" className="hover:underline focus:outline focus:ring" aria-label="Sitemap">Sitemap</a>
              </li>
              <li className="footer__list-item text-sm leading-relaxed mr-4">
                <a href="#" className="hover:underline focus:outline focus:ring" aria-label="Contact us">Contact us</a>
              </li>
            </ul>
            <div className="footer__location text-sm leading-relaxed mt-1">
              <a href="#" className="hover:underline focus:outline focus:ring" aria-label="Select Location">
                <FontAwesomeIcon icon={faGlobe} className='mr-2'/>
                Select Location
              </a>
            </div>
          </div>

          <div className="footer__search flex items-center mt-4 md:mt-0 relative w-full">
            <label htmlFor="footer-search" className="sr-only">Search</label>
            <input
              id="footer-search"
              className="footer__search-input sm:w-100 p-3 md:pl-4 focus:outline w-full"
              type="text"
              placeholder="Search"
              aria-label="Search footer"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-4'/>
          </div>
        </article>
      </section>

      <section className="footer__bottom grid" aria-labelledby="footer-branding">
        <ul className="footer__brands flex items-center pl-6" id="footer-branding" aria-label="Footer brand logos">
          <li className="footer__brand-links">
            <a href="/" aria-label="ExxonMobil Home">
              <img src={ExxonMobil} alt="ExxonMobil logo" />
            </a>
          </li>
          <li className="footer__brand-links">
            <a href="#" aria-label="Exxon">
              <img src={Exxon} alt="Exxon logo" />
            </a>
          </li>
          <li className="footer__brand-links">
            <a href="#" aria-label="Mobil">
              <img src={Mobil} alt="Mobil logo" />
            </a>
          </li>
          <li className="footer__brand-links">
            <a href="#" aria-label="Esso">
              <img src={Esso} alt="Esso logo" />
            </a>
          </li>
          <li className="footer__brand-links">
            <a href="#" aria-label="XTO Energy">
              <img src={Xto} alt="XTO Energy logo" />
            </a>
          </li>
        </ul>

        <ul className="footer__privacy flex flex-col lg:flex-row items-start lg:items-center justify-start xl:justify-end flex-wrap xl:flex-nowrap pr-6 pl-6 xl:pl-0 mt-4 xl:mt-0"
          aria-label="Footer legal links">
          <li className="footer__privacy-link text-sm leading-relaxed mr-4">
            <a href="#" className="hover:underline focus:outline focus:ring" aria-label="Resources">Resources</a>
          </li>
          <li className="footer__privacy-link text-sm leading-relaxed mr-4">
            <a href="#" className="hover:underline focus:outline focus:ring">
              Privacy center (Do not sell or share my personal information)
            </a>
          </li>
          <li className="footer__privacy-link text-sm leading-relaxed mr-4">
            <a href="#" className="hover:underline focus:outline focus:ring">Privacy policy</a>
          </li>
          <li className="footer__privacy-link text-sm leading-relaxed mr-4">
            <a href="#" className="hover:underline focus:outline focus:ring">Terms & conditions</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
