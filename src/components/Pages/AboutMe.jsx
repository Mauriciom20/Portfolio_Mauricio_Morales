import { Header } from "../Header";
import { Footer } from "../Footer";

export const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <p><strong>Nombre:</strong> Mauricio Morales</p>
        <p><strong>Edad:</strong> 24 años (Vine a este mundo un 20 de junio de 2001)</p>
        <p><strong>Ubicación:</strong> Armenia, Quindío – Colombia</p>
        <p><strong>Formación:</strong> Aprendiz de Análisis y Desarrollo de Software en el SENA (Centro de Comercio y Turismo)</p>
        <p>
          <strong>Descripción:</strong> Soy un desarrollador en formación, ultimamente apasionado por el desarrollo de frontend.
          Me esfuerzo por aprender cada día e intento aplicar buenas prácticas.
        </p>
      </div>
    </section>
  );
};