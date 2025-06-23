export interface DividerProps {
  className?: string;
  color?: string;
  width?: number;
}

const Divider = ({
  className,
  ...props
}: DividerProps) => {
  return (
    <hr className={`cmp-divider block w-full ${className}`} style={{borderTopColor: props.color ?? '#000', borderTopWidth: props.width ? props.width+"px" : '1px'}} />
  )
};

export default Divider;
