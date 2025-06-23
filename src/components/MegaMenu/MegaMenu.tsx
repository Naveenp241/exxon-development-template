import { useState } from 'react';
import './megaMenu.css';

export interface MenuProps {
  title: string;
  path: string;
  items?: MenuProps[];
}

export interface MegaMenuProps {
  menuData: MenuProps[];
}

export const MegaMenu = ({ menuData }: MegaMenuProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav>
      <ul className='cmp-nav flex relative'>
        {menuData?.map((menuItem, index) => (
          <li
            key={menuItem.title}
            className={`cmp-nav__wrapper px-4 py-9 ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            role="menuitem"
            aria-expanded={activeIndex === index}
          >
            <a 
              href={menuItem.path} 
              className='cmp-nav__title inline text-sm leading-5'
              onKeyUp={(e) => {
                if (['Enter', ' '].includes(e.key)) {
                  setActiveIndex(index);
                }
                if (e.key === 'Escape') {
                  setActiveIndex(null);
                }
              }}
              target='_blank' rel="noreferrer"
            >
              {menuItem.title}
            </a>
            {menuItem.items && (
              <ul className='cmp-nav__list absolute'>
                {menuItem.items?.map((subItem) => (
                  <li key={subItem.title} className='mb-4'>
                    <a className='cmp-nav__sublist-title' href={subItem.path} target='_blank' rel="noreferrer">{subItem.title}</a>
                    {subItem.items && (
                      <ul className='flex flex-col'>
                        {subItem.items?.map((deepItem) => (
                          <li key={deepItem.title} className='cmp-nav__sublist-item inline-block ml-6 mb-1'>
                            <a href={deepItem.path} className='text-sm leading-5' target='_blank' rel="noreferrer">{deepItem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
