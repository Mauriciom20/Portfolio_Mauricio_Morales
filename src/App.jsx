import { Container } from "./components/Container.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Pages/Home.jsx";
import { AboutMe } from "./components/Pages/AboutMe.jsx";
import { Skills } from "./components/Pages/Skills.jsx";
import { Projects } from "./components/Pages/Projects.jsx";
import { Contact } from "./components/Pages/Contact.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};
