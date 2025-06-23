import { Button } from '../Button/Button';
import ExxonMobile from '../../assets/images/exxon-mobil.svg';
import { MegaMenu, type MenuProps } from '../MegaMenu/MegaMenu';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  enableMegaMenu?: boolean;
  navLinks?: { name: string; slug: string }[]; // Passed from page template
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const fallbackNavLinks: MenuProps[] = [
  {
    title: 'Fuels',
    path: '#',
    items: [
      {
        title: 'Exxon',
        path: '#',
        items: [
          { title: 'Rewards & Credit Cards', path: '#' },
          { title: 'Our Fuel', path: '#' },
          { title: 'Commercial', path: '#' }
        ]
      },
      {
        title: 'Mobil',
        path: '#',
        items: [
          { title: 'Rewards & Credit Cards', path: '#' },
          { title: 'Our Fuel', path: '#' }
        ]
      },
      { title: 'Gas Near You', path: '#' },
      { title: 'Get Help', path: '#' },
      { title: 'Wholesale Fuels', path: '#' }
    ]
  },
  {
    title: 'Lubricants',
    path: '#',
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
  navLinks = []
}: HeaderProps) => {
  const menuToRender: MenuProps[] = navLinks.length
    ? navLinks.map(link => ({
        title: link.name,
        path: link.slug,
      }))
    : fallbackNavLinks;
  
  console.log("Dynamic nav items => ", navLinks.map(link => ({
        title: link.name,
        path: link.slug,
      })));

  return (
    <header>
      <div className={`storybook-header px-11 ${!enableMegaMenu ? 'py-4' : 'cmp-mega-nav'}`}>
        <a href='/' className='mr-6'>
          <img src={ExxonMobile} alt="Exxon Mobile" className='mt-1' />
        </a>
        <div>
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
      </div>
    </header>
  );
};
