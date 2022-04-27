# State and Events

What is a stateless component? 
- static 
- a component that doesnt use 'useState' hook 
- uses props only 
- Not interactive

Why it is important to understand state and events together?
- events will trigger some change in our components. State will determine when a component will re-render

Patterns: 

- attach an event listener to a piece of our DOM. This is going to be some JSX
- when the event is triggered, we're going to update some state that will cause the component to re-render


What is state?
- Current data
- Private data owned by a component 
- Is the component that defined the state, has full control over it
- How to initialize state: use the 'useState' hook 

// array destructuring 
const [variable, setVariable] = useState(initialState)\


what is the difference between props and state:

- props are immutable(means they can not be changed, they are read-only)
- state can be changed and updated BUT only in the component that owns it



Add toggle function to the Header button

- we created an onClick event
- defined a handleToggle event handler 
- we updated state to cause a re-render so that we can see new content on our web page 
- We did this by setting some state inside of the Header component 


Add clap functionality 

- when we click the clap button, we want to increment the number of claps by 1 