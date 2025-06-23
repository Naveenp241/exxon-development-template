import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as BrandsIcons from "@fortawesome/free-brands-svg-icons";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";

export interface IconProps {
  icon: string;
}

const getIcon = (iconName: string) => {
  return (
    (BrandsIcons as Record<string, any>)[iconName] ||
    (RegularIcons as Record<string, any>)[iconName] ||
    (SolidIcons as Record<string, any>)[iconName]
  );
};

export const Icon = ({ icon }: IconProps) => {
  return <FontAwesomeIcon icon={getIcon(icon)} />;
};
