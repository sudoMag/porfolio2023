import Image from "next/image";

const ButtonLink = ({
  children,
  bgColor,
  icon,
  to
}: {
  children: JSX.Element | string | undefined;
  bgColor?: string;
  icon?: string;
  to?: string;
}) => {
  return (
    <div
      className={`my-2 rounded-2xl items-center flex ${
        bgColor ?? "bg-paletteDarkGray"
      }`}
    >
      {icon && (
        <Image src={icon} width={30} height={30} alt="icon" className="absolute mx-4" />
      )}
      <a href={to} className="p-4 flex justify-center w-full" target="_blank">
        {children}
      </a>
    </div>
  );
};

export default ButtonLink;
