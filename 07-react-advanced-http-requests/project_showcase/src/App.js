import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };


  // this defines editing has completed, and projectId no longer is needed
  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onUpdateProjects = (updatedProject) => {
    // the goal here is to update projects to include the newly updated project from the edit behavior
    // How do I know what the new updated project looks like?
    

    // Now that I have the updated Project, how do I update the projects array to include this newly updated project BUT exclude the old version of this project


    // we want to return a new Array, with all the same projects and the old version replaced by the new updated project

    const updatedProjects = projects.map((originalProject) => {
      if (updatedProject.id === originalProject.id){
        return updatedProject
      } else {
        return originalProject
      }
    })

    // need to set the state with the new collect of projects(updatedProjects)

    setProjects(updatedProjects)
  }


  const onDeleteProject = (projectId) => {
    // Now that we're here, how do we remove the deleted project from projects?
    // is there anything else I need to provide onDeleteProject to do so: we need the id 


    // now that we have the id, whats next 
    // use the filter method and return everything that does not equal that id 
    // update teh state

   const updatedProjects = projects.filter((project) => project.id !== projectId)
  
   setProjects(updatedProjects)
  }


  // conditionally rendering the type of form
  // we are checking hte value of projectId
  // if projectId exists: return the projectEditForm
  // if there is no projectId, then we are going to render the projectform component
  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          onUpdateProjects={onUpdateProjects}
          completeEditing={completeEditing}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
      />
    </div>
  );
};

export default App;
