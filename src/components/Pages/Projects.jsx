export const Projects = () => {
    const projects = [
      {
        title: "Frontend de simulador de personalización de prendas",
        description: "Interfaz desarrollada con React para simular la personalización de camisas y buzos. Integra funcionalidades como selección de diseño, color, tipo de prenda y visualización previa.",
        tech: ["React", "JavaScript", "HTML", "CSS", "Vite"],
        github: "https://github.com/Mauriciom20/front_ws"
      },
      {
        title: "API REST para gestión de empleados",
        description: "Aplicación backend construida con Node.js, Express y MySQL que permite listar e insertar empleados en una base de datos. Implementa rutas REST básicas, ideal como base para sistemas administrativos o pruebas frontend.",
        tech: ["Node.js", "Express", "MySQL", "JavaScript"],
        github: "https://github.com/Mauriciom20/api-employees"
      }
    ];
  
    return (
      <section id="projects" className="projects-section">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tecnologías:</strong> {project.tech.join(", ")}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };