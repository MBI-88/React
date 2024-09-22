import './App.css';
import React from 'react';
//import axios from 'axios'


// Components Using useState
/*
const Counter = ({handler}) => (
  <>
    <button type='button' onClick={()=> handler('add')}><h3>Add</h3></button>
    <button type='button' onClick={()=> handler('sub')}><h3>Sub</h3></button>
  </>
)

const App:React.FC = () => {
  const [state,setState] = React.useState<number>(0)
  const handleState = (item:string) => {
    switch (item){
      case 'add':
        setState(state + 1);
        break;
      case 'sub':
        setState(state - 1);
        break;
      default: throw new Error()
    }
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <Counter handler={handleState} />
      <label htmlFor='Counter'><h3>{state}</h3></label>
  
    </div>
  );
}
*/


// Class 
/*
import { Component } from 'react';
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type';

type AppS = {
  number: number
  title: string
  state: string
}
type Props ={}
type State = {app:App[]}

class App extends Component<Props,State>{
  constructor(props:Props){
    super(props)
    this.state = {
      app:[],
    }
  }

  componentDidMount(): void {
      axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then(
        (response:any) => {
          this.setState({app:response.data})
        }
      )
  }

  render(): React.ReactNode {
      const {app = []} = this.state
      return (
        <>
          <h1>ContentPI App</h1>
          {app.map((item:Props) => (
            <p key={item.title}>
              <strong>#{item.number}</strong>
              <a href={`https://github.com/ContentPI/ContentPI/issues/${item.number}`}>{item.title}</a>

              {item.state}
            </p>
          ))}
        
        </>
      )
  }
}
*/

// Funtions
/*

type Apps = {
  number: number,
  title:string,
  state:string,
}
type Props = {
  propX: string,
  propY: number,
  propZ: boolean,
}

const App: React.FC<Props> = () => {
  const [issues,setIssues] = React.useState<Apps[]>([])
  React.useEffect(() => {
    axios.get(
      'https://api.github.com/repos/ContentPI/ContentPI/issues'
    ).then(
      (response:any) => {
        setIssues(response.data)
      }
    )
  },[])
  
  return (
    <>
      <h1>Llevando a funciones</h1>
      {issues.map((issue:Apps) => (
        <p key={issue.title}>
          <strong>#{issue.number}</strong>
          <a href={`https://github.com/ContentPI/issues/${issue.number}`} target="_blank">{issue.title}</a>
          {issue.state}
        </p>
      ))}
    </>
  )
}
*/

// Understanding useCallback, useMemo, and memo

/*
The memo High Order Component (HOC) is similar to PureComponent of a React class
because it performs a shallow comparison of the props (meaning a superficial check), so if
we try to render a component with the same props all the time, the component will render
just once and will memorize. The only way to re-render the component is when a prop
changes its value.

I have a rule when it comes to establishing whether it is a good idea to use
memo, and this rule is straightforward: just don't use it. Normally, when
we have small components or basic logic, we don't need this unless you're
working with large data from some API or your component needs to
perform a lot of renders (normally huge lists), or when you notice that
your app is going slow. Only in that case would I recommend using
memo.

The useMemo Hook will memorize the result (value) of a function and will have some
dependencies to listen to. Let's see how we can implement it:

The useCallback Hook is the hero in this case and is very similar to useMemo in the
syntax, but the main difference is that instead of memorizing the result value of a function,
as useMemo does, it is memorizing the function definition instead:

Resumen
memo:
--Memorizes a component
--Re-memorizes when props change
--Avoids re-renders
useMemo:
--Memorizes a calculated value
--For computed properties
--For heavy processes
useCallback:
--Memorizes a function definition to avoid redefining it on each render.
--Use it whenever a function is passed as an effect argument.
--Use it whenever a function is passed by props to a memorized component.


import List,{Todo} from './List/List.tsx';

const initialTodo = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Go home' }
]


const App = () => {
  const [todolist, setTodolist] = React.useState(initialTodo)
  const [task, setTask] = React.useState('')
  const [term, setTerm] = React.useState('')

  const handleSearch = () => {
    setTerm(task)
  }
  const handleDelete = React.useCallback((taksId:number) => {
    const itemDeleted = todolist.filter(item => item.id !== taksId)
    setTodolist(itemDeleted)
  },[todolist])

  const filterTodo = React.useMemo(() => todolist.filter((todo:Todo) => {
    console.log('Filter...')
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }),[term,todolist])

  React.useEffect(() => {
    console.log('Render <App />')
  })
  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task
    }
    setTodolist([...todolist, newTodo])
    setTask('')
  }

  const printTodolist = React.useCallback(() => {
    console.log('Print todolist...',todolist)
  },[todolist])

  React.useEffect(() => {
    printTodolist()
  },[todolist,printTodolist])

  return (
    <div className='App'>
      <h1>Entendiendo useCallback, useMemo</h1>
      <hr />
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleCreate}> Create </button>
      <button onClick={handleSearch}> Search</button>
      <List todolist={todolist} handleDelete={handleDelete} />

    </div>
  )
}
*/

// Understanding the useReducer Hook
/*
import Note from './Note/Note.tsx';


const App = () => {

  return (
    <div className='App'>
      <h1>Entendiendo useReducer</h1>
      <hr />
      <Note />
    </div>
  )
}
*/



// Exploring the container and presentational patterns

// Separing UI of logic (Pattern of dising)

/*
import GeoCont from './GeoCont/GeoCont.tsx';

const App = () => {

  return (
    <main className='App'>
      <h1>Exploring the container and presentational patterns</h1>
      <hr />
      <GeoCont />
    </main>
  )
}
*/

// Writing code for the Browser

// Uncontrolled Components / Controlled component

/*
import {FormUncontrol,FormControl} from './Form/Form.tsx';

const App = () => {

  return (
    <main className='App'>
      <h1>Uncontrolled Components</h1>
      <FormUncontrol />
      <hr />
      <h1>Controlled Components</h1>
      <FormControl />
    </main>
  )

}
*/

// Handling events

/*
import { Button } from './Button/Button.tsx';

const App = () => {
  const handleClick = (event) => {
    switch (event.type) {
      case 'click':
        console.log('Clicked!')
        console.log(event instanceof MouseEvent)
        console.log(event.nativeEvent instanceof MouseEvent)
        break;
      case 'dblclick':
        console.log('Doble click')
        break;
      default:
        console.log('Unwanted')
    }
    
  }

  return (
    <main className='App'>
      <h1>Handling events</h1>
      <hr />
      <Button handler={handleClick}/>
    </main>
  )
}
*/


// Exploring refs

// As we mentioned previously, in general, we should try to avoid using refs
//because they force the code to be more imperative, and they become
//harder to read and maintain.

/*
const App = () => {
  const buttonRef = React.useRef<any>(null)
  const handleClick = () => {
    buttonRef.current.focus()
  }
  return (
    <main className='App'>
      <h1>Exploring refs</h1>
      <input ref={buttonRef} type='text' />
      <button type='button' onClick={handleClick}>Focus</button>
    </main>
  )
}
*/


// Exploring SVG


/*
const Circle = ({x,y,radius,fill}:{x:number,y:number,radius:number,fill:string}) => (
  <svg>
    <circle cx={x} cy={y} r={radius} fill={fill} />
  </svg>
)

const App = () => {

  return (
    <main className='App'>
      <h1>Exploring SVG</h1>
      <Circle x={50} y={50} radius={50} fill={'blue'} />
      <Circle x={75} y={50} radius={50} fill={'red'} />
    </main>

  )
}
*/

// React Router 

import {Link} from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const App:React.FC<Props> = ({children}) => {

  return (
    <main className='App'>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
      {children}
    </main>
  )
}


export default App
