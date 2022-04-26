function Header(props) {

  // {title: "Project Showcase"}


  // anything that is JS inside of JSX needs to be wrapped inside of {}
  return (
    <div>{props.title}</div>
  )
}

export default Header