const linkStyles = `
    mx-4
    cursor-pointer
`;

const Navbar = () => {
  return (
    <nav className="h-14 w-full sticky top-0 bg-paletteDarkGray flex items-center justify-center">
      <li className="flex items-center content-center font-bold">
        <a className={linkStyles} href="#home">Home</a>
        <a className={linkStyles} href="#about">About me</a>
        <a className={linkStyles} href="#projects">Project</a>
        <a className={linkStyles} href="#skills">Skills</a>
        {/* <a className={linkStyles}>Contact me</a> */}
      </li>
    </nav>
  );
};

export default Navbar;
