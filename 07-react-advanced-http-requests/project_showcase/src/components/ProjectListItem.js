import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ProjectListItem = ({ project, enterProjectEditModeFor, onDeleteProject }) => {
  const { id, image, about, name, link, phase } = project;

  const [clapCount, setClapCount] = useState(0);

  const handleClap = (clapCount) => setClapCount(clapCount + 1);

  const handleEditClick = () => {
    enterProjectEditModeFor(id);
  };

  const handleDeleteClick = () => {
    // what needs to happen after a delete button is clicked

    // we have 2 parts: backend + frontend 

    // backend: 

    fetch(`http://localhost:4000/projects/${id}`, {
      method: 'DELETE',
    })

    // frontend: we need to update the collection of projects held in App component but we shouldnt do that here
    onDeleteProject(id)
  };


  // We need to update a projects clap count number on backend and frontend
  // A few problems that you might notice: our server data doesnt have a field for the clap number, also needs to be updated on create a new project submission

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectListItem;
