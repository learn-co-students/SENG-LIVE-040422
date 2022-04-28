import { useState } from 'react'

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleClick() {
    fetch('http://localhost:4000/projects')
    .then(resp => resp.json())
    .then(projects => {
      setProjects(projects)
    })
  }

  function onToggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
