interface HeadingProps {
  title: string;
  className?: string;
  elementType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const HeadingElement = ({ title, className = "", elementType: Tag }: HeadingProps) => (
  <Tag className={className}>{title}</Tag>
);
