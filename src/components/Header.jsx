import { ItemNavbar } from "./ItemNavbar";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header>
      <h1>My React App</h1>
      <Navbar>
        <ItemNavbar itemName="Inicio" link="#home" />
        <ItemNavbar itemName="Sobre mí" link="#about" />
        <ItemNavbar itemName="Habilidades" link="#skills" />
        <ItemNavbar itemName="Proyectos" link="#projects" />
        <ItemNavbar itemName="Contacto" link="#contact" />
      </Navbar>
    </header>
  );
};
