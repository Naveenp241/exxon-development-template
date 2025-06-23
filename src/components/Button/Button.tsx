import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
  label?: string;
  /** Optional classname */
  className?: string;
  /** Switch icons for anchor */
  iconType?: 'arrow' | 'angle' | 'no-icon';
  /** Add children */
  children?: React.ReactNode;
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
  iconType = 'arrow',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  // #d5000a
  return href ? (
    <a href={href} className={['anchor-btn', 'relative', 'inline-flex items-center', `storybook-button--${size}`, className, `btn__${iconType}`].join(' ')} role="button" target={target} style={{ color: backgroundColor ?? '#d5000a' }}>
      {label}
      {
        iconType === 'arrow' ? 
          <FontAwesomeIcon icon={faArrowRight} className={['anchor-btn__arrow', 'text-xs', `storybook-button--${size}`].join(' ')} />
        : iconType === 'angle' ?  
          <FontAwesomeIcon icon={faChevronRight} className={['anchor-btn__angle', 'text-xs'].join(' ')} />
          : <></>
      }
    </a>
  ) : (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode, className].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {props.children}
    </button>
  );
};
