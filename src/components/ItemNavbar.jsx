export const ItemNavbar = ({ itemName = 'Enlace', link = '#' }) => (
  <li>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {itemName}
    </a>
  </li>
);

