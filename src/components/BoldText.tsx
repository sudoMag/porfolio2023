const BoldText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return <span className={`font-bold ${className}`}>{children}</span>;
};

export default BoldText;
