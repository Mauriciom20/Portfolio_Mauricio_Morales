import { ItemNavbar } from "./ItemNavbar";
import { Navbar } from "./Navbar";

export const Footer = () => {
  return (
      <Navbar>
        <ItemNavbar itemName='Facebook' />
        <ItemNavbar itemName="Instagram" />
        <ItemNavbar itemName="WhatsApp" />
      </Navbar>
  );
};