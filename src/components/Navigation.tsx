import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="w-full h-16 fixed top-0 left-0 flex items-center px-4 bg-slate-50 bg-opacity-50">
      <ol className="flex flex-row h-full">
        <NavItem name="Home" link="/"></NavItem>
        <NavItem name="Convert" link="/test/1"></NavItem>
        <NavItem name="Crypto" link="/crypto"></NavItem>
      </ol>
    </nav>
  );
};

export default Navigation;
