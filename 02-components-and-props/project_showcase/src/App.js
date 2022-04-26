import Header from "./components/Header";
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'

import projects from './projects'

function App() {
  console.log(projects)
  return (
    <div className="App">
      <Header title="Project Showcase"/>
      <ProjectForm projects={projects}/> 
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;


// how do i pass projects to projectform and projectlist