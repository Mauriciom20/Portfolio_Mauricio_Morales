import { ItemNavbar } from "./ItemNavbar";
import { Navbar } from "./Navbar";

export const Footer = () => {
  return (
    <footer>
      <Navbar className="footer-navbar">
        <ItemNavbar itemName="Facebook" link="https://www.facebook.com/mauricio.moralesvidal.5" />
        <ItemNavbar itemName="Instagram" link="https://instagram.com/mauriciomv2001" />
        <ItemNavbar itemName="WhatsApp" link="https://wa.me/573044807029" />
      </Navbar>
    </footer>
  );
};
