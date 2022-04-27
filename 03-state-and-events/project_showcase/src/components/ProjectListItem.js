import { useState } from 'react'

function ProjectListItem(props) {
  debugger
  const [clapCount, setClapCount] = useState(0)

  // object destructuring 
  // const { project } = props

const {name, image, about, phase, link} = props.project

function handleClapCount() {
  // how do I update the clapCount
// previousState = 0 
// currentState = 1
  setClapCount((previousState) => previousState + 1) // 1
}

   return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClapCount}>👏{clapCount}</button>
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
      </footer>
    </li>
  );
}

export default ProjectListItem;
