const Card = ({
  children,
  color,
  flex,
}: {
  children: JSX.Element | string | undefined;
  color?: string;
  flex?: boolean;
}) => {
  return (
    <article className={`p-12 rounded-2xl ${color ?? "bg-paletteGray"} ${flex && "flex"}`}>
      {children}
    </article>
  );
};

export default Card;
