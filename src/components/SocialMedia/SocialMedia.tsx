import { Icon } from '../Icon/Icon';
import './socialMedia.css';

export interface ShareInfoProps {
  socialConfigs: SocialIconConfig[];
}

interface SocialIconConfig {
  name: string;
  icon: string;
  label: string;
  link: string;
}

export const SocialMedia = ({ socialConfigs }: ShareInfoProps) => {
  return (
    <div className="social-media flex">
      {socialConfigs.map(config => (
        <a href={config.link} className="social-media__icon-wrapper relative flex items-center justify-center"
          key={config.name}
        >
          <Icon icon={config.icon} />
          <span className="invisible absolute">{config.label}</span>
        </a>
      ))}
    </div>
  );
};

