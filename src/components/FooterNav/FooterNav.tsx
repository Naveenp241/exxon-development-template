import React from "react";
import "./FooterNav.css";

export interface FooterNavItem {
  imageUrl: string;
  title: string;
  links: { text: string; url: string }[];
}

export interface FooterNavProps {
  items: FooterNavItem[];
}

const FooterNav: React.FC<FooterNavProps> = ({ items }) => {
  return (
    <ul className="footer-nav__wrapper">
      {items.map((item, index) => (
        <li key={index} className="footer-nav__column px-[22px]">
          <div className="footer-nav__header">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="footer-nav__image mb-5"
            />
            <h3 className="footer-nav__title mb-5">{item.title}</h3>
          </div>
          <nav className="footer-nav__nav">
            <ul className="footer-nav__links">
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex} className="footer-nav__item pb-4 last:pb-0">
                  <a href={link.url} className="footer-nav__link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
