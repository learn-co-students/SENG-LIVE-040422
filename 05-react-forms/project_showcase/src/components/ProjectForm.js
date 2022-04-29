// Making this a controlled form

// first step: initialize form state
// second step: Add event listener, onChange to each form field and define the event handler
// third step: Add a value attribute to each form field: value={state}
// fourth step:

// Now that we have gathered users inputs in state, lets submit the form:

// first step: attach an onSubmit event to the form and the event handler
// second: prevent the default
// third: send the data to the server, how: fetch POST

import React, { useState } from "react";

const ProjectForm = ({ onAddProject }) => {
  const initialState = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  }
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    // update the state as the user is interacting with the form

    const { name, value } = event.target;

    // const name = event.target.name
    // const value = event.target.value

    setFormState((previousFormState) => ({
      ...previousFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // persist this data to the server
    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((resp) => resp.json())
      .then((project) => {
        onAddProject(project)
        setFormState(initialState)
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleChange}
          value={formState.about}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          onChange={handleChange}
          value={formState.phase}
        >
          <option>Select a phase</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formState.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formState.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
