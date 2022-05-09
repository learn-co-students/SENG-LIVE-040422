# useRef, custom hooks and context


### useRef

- react hook that is used for several but mainly we're going to use it access DOM nodes 
- we can reference our DOM nodes so that we can do something with them 
- use useRef to persist mutable data across renders 
    - like a counter, timer 


- DOM Node selections:
    - manage focus, text seleection or media playback 
    - Triggering some imperative animations 
    - integrating with third party DOM libraries: jQuery or Backbone 


how to use this hook?
    - import { useRef } from 'react' 
    - useRef() => a reference object 
    - const elementRef = useRef()
    - Then pass a `ref` prop to the JSX part of our app that we want to attach this reference to, the value is going to be the `ref={elementRef}
    - After we attach the reference to the part of our JSX, then the reference returned by useRef() is going to return that node
    - return as a reference object {current: the node that the reference was attached to}



### Creating custom hooks


why? 
    - to avoid repetition of logic 
    - goal is to isolate resubale logic then create the custom hook that can be called in places that is going to share that logic 

custom hook standards:
    - the hook has to be a function 
    - the hook must start with 'use' 
        i.e: useForm
    - Probably going to use some internal hooks in this function like: useState and useEffect 


### Context 
    - State management, Redux, any type of global data/state
    - The problem we are looking at is sharing global data across the application, which means either we are prop drilling or that we have two components that are unrelated that need the data 


What does context solve for us? 
    - it isolates the data from any components into its own container and then allows all components to access that data without the increased bloat to other components or prop drilling 

When should context be used: things are necssary deep in the react tree

i.e. a username 