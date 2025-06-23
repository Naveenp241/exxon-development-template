// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** href for an anchor button */
  href?: string;
  /** define target for an anchor button */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** Button contents */
  label: string;
  /** Optional classname */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  type,
  backgroundColor,
  label,
  href,
  className,
  target = "_self",
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return href ? (
    <a href={href} className={['anchor-btn', 'relative', 'inline-flex items-center', `storybook-button--${size}`, className].join(' ')} role="button" target={target}>
      {label}
      {/* <FontAwesomeIcon icon={faArrowRight} className={['anchor-btn__arrow', 'text-xs', `storybook-button--${size}`].join(' ')} /> */}
      <i className={['anchor-btn__arrow', 'text-xs', `storybook-button--${size}`].join(' ')}></i>
    </a>
  ) : (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode, className].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
