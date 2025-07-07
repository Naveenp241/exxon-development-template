import { Button } from '../Button/Button';
import ExxonMobile from '../../assets/images/exxon-mobil.svg';
import { MegaMenu, type MenuProps } from '../MegaMenu/MegaMenu';
import { Icon } from '../Icon/Icon';
import './header.css';
import { useState } from 'react';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  enableMegaMenu?: boolean;
  navLinks?: MenuProps[];
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  variant?: 'default' | 'hero'
}

const fallbackNavLinks: MenuProps[] = [
  {
    title: 'Fuels',
    path: '/fuels-exxon',
    items: [
      {
        title: 'Exxon',
        path: '/exxon-home',
        items: [
          { title: 'Rewards & Credit Cards', path: '#' },
          { title: 'Our Fuel', path: '#' },
          { title: 'Commercial', path: '#' }
        ]
      },
      {
        title: 'Mobil',
        path: '/home-mobil',
        items: [
          { title: 'Rewards & Credit Cards', path: '#' },
          { title: 'Our Fuel', path: '#' }
        ]
      },
      { title: 'Gas Near You', path: '/mobil-search' },
      { title: 'Get Help', path: '#' },
      { title: 'Wholesale Fuels', path: '#' }
    ]
  },
  {
    title: 'Lubricants',
    path: '/lubricants',
    items: [
      {
        title: 'Mobil Oil',
        path: '#',
        items: [
          { title: 'Personal Vehicle', path: '#' },
          { title: 'Commercial', path: '#' },
          { title: 'Motor Oil & Filter Finder', path: '#' }
        ]
      },
      {
        title: 'Industrial Lubricants',
        path: '#',
        items: [
          { title: 'Lubricants by Type', path: '#' },
          { title: 'Lubricants by Application', path: '#' },
          { title: 'Find Lubricants by Equipment Builder', path: '#' }
        ]
      },
      { title: 'Where to Buy', path: '#' }
    ]
  },
  {
    title: 'Chemicals',
    path: '#',
    items: [{ title: 'Type to enter text', path: '#' }]
  },
  {
    title: 'Sustainability',
    path: '#'
  },
  {
    title: 'About Us',
    path: '#'
  }
];

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  enableMegaMenu,
  navLinks = [],
  variant
}: HeaderProps) => {

  const menuToRender: MenuProps[] = navLinks?.length ? navLinks : fallbackNavLinks;
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const isHero = variant  === 'hero';

  return (
    <header className={`cmp-header relative md:px-11 px-4 py-4 ${enableMegaMenu && 'cmp-mega-nav'} ${toggleHamburger ? 'hamburger-active' : ''} ${isHero ? 'cmp-header--hero' : ''}`}>
      
      <section className='flex md:w-fit w-full'>
        <a href='/exxon-corporate' className='md:mr-6 banner-img'>
          <img src={ExxonMobile} alt="Exxon Mobile" className='mt-1' />
        </a>

        <Button onClick={() => setToggleHamburger(!toggleHamburger)} type="button" className='cmp-header__hamburger'>
          { 
            toggleHamburger ?
              <Icon icon="faXmark" />
            : <Icon icon="faBars" />
          }
        </Button>
      </section>

      <div className={`cmp-header__wrapper flex ${toggleHamburger ? 'cmp-header__wrapper--mobile' : ''}`}>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            {!enableMegaMenu ? (
              <>
                <Button size="small" onClick={onLogin} label="Log in" />
                <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
              </>
            ) : (
              <MegaMenu menuData={menuToRender} />
            )}
          </>
        )}
      </div>
    </header>
  );
};