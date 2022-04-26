import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  // props.project = array of objects
  // I need to pass projects down into ProjectListItem
  // Render ProjectListItem for each of the projects inside of the props.project

  return (
    <div>
      {props.projects.map((project) => (
        <ProjectListItem project={project} />
      ))}
    </div>
  );
}

export default ProjectList;

