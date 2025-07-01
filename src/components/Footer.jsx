import { ItemNavbar } from "./ItemNavbar";
import { Navbar } from "./Navbar";

export const Footer = () => {
  return (
    <footer>
      <Navbar className="footer-navbar">
        <ItemNavbar itemName="Facebook" />
        <ItemNavbar itemName="Instagram" />
        <ItemNavbar itemName="WhatsApp" />
      </Navbar>
    </footer>
  );
};
