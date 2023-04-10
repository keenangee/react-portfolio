import NavComponent from "./nav-component";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavComponent menu={"Projects"} />
      <NavComponent menu={"Games"} />
      <NavComponent menu={"Contact"} />
    </div>
  );
};

export default NavBar;
