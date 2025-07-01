import { Footer } from "../Footer";
import { Header } from "../Header";
import perfilImg from "../../assets/Mauricio_Morales_Profile_Photo.jpg";

export const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <h1>Mauricio Morales</h1>
          <h2>Full Stack Software Developer</h2>
          <p>
            Soy un desarrollador en formación, especializado en JavaScript, Node.js y MySQL. Me enfoco en construir soluciones web eficientes y limpias.
          </p>
        <div className="home-buttons">
            <a href="#projects" className="btn">Ver proyectos</a>
            <a href="#contact" className="btn secondary">Contáctame</a>
        </div>
        </div>

        <div className="home-image">
          <img src={perfilImg} alt="Mauricio Morales" />
        </div>
      </div>
    </section>
  );
};