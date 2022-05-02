// Change the load projects button from being clicked to load projects and instead will load projects on component render

import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []); 

  // useEffect(() => {
  //   setCount(count + 1)

  //   return () => {
  //     console.log("clean up phase");
  //   };
  // }, [count]);

  console.log("component did render");

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
