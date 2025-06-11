import { ItemNavbar } from "./ItemNavbar";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header>
      <h1>My React App</h1>
      <Navbar>
        <ItemNavbar itemName='Home' />
        <ItemNavbar itemName="AboutMe" />
        <ItemNavbar itemName="Profile" />
        <ItemNavbar itemName="Experience" />
      </Navbar>
    </header>
  );
};
