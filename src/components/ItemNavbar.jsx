export const ItemNavbar = ({ itemName = 'Inicio', link = '#home' }) => (
  <li><a href={link}>{itemName}</a></li>
);
