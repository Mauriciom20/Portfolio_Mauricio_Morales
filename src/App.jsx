import { Container } from "./components/Container.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Pages/Home.jsx";
import { AboutMe } from "./components/Pages/AboutMe.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
};
