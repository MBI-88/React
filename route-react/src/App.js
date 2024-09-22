//import logo from './logo.svg';
import './App.css';
//import style from './App.module.css'
//import { ReactComponent as Check } from './check.svg';
//import cs from 'classnames'
import React from 'react';
import axios from 'axios';
import { sortBy } from 'lodash';


// Fundamentals of React
/*
const title = 'React Spa'
const welcome = {
    'greeting': 'Hey',
    'title': 'React',
}

function getTitle(greeting) {
    return greeting
}
*/
/*function App() {
  //const title = "React"
  return (
    <div className="App">
        <h1>Hola mundo, {title}</h1>
        <h1>{welcome.greeting} {welcome.title}</h1>
        <h1>{getTitle('Hola React!')}</h1>
        <label htmlFor='search'>Search: </label>
        <input id='search' type='text'/>
    </div>
  );
}
*/

// List in React
/*
const initialStory = [{
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
}
]
*/

/*
function App(){
  return(
    <div className='App'>
      <h1>Hola React</h1>
      <hr/>
      <ul>
        {initialStory.map( function(item){return (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments} </span>
          <span>{item.points} </span>
          </li>);})}
      </ul>

    </div>
  )
}
*/

// Meeting more React's components
/*
function List() {
  return ( 
      < ul > 
      {initialStory.map(function(item) {
                return ( < li key = { item.objectID } >
                    <span ><a href = { item.url } className = 'App-link' > { item.title } < /a> </span >
                     <span > Author: { item.author } < /span> 
                     <span > Comments: { item.num_comments } < /span>
                      <span > Points: { item.points } < /span> </li > );
            })
        } < /ul>
  )
}
   
function Search() {
  return ( 
    <div >
    <label htmlFor = 'search' > Search: < /label>
     <input type = 'text' id = 'search' > < /input>
      </div >
    )
}

function App(){
  return (
    <div className='App'>
      <h1>Using more components of React</h1>
        <hr/>
          <Search />
          <List />
    </div>

  )
}
*/


// React Component Instantiation
/*
function App(){
  return (
    <div className='App'>
      <h1>Instantiation's components</h1>
      <hr />
      {// Object's instantiation 
      }
      <Search />
      <List />
    </div>
  )
}
*/

// React Component Definition Advanced (more consice)

/*
const List_arrow = () => 
  // if only once component is retorned, it can use that
 ( 
    <ul>
      {list.map( function(item){return (
      <li key={item.objectID}>
        <span>
          <a href={item.url} className='App-link'>{item.title}</a>
        </span>
        <span>Author: {item.author} </span>
        <span>Comments: {item.num_comments} </span>
        <span>Points: {item.points} </span>
        </li>);})}
    </ul>
  )


const Search_arrow = () => {
  return (
    <div >
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search'></input>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <h1>Definicion avanzada de componentes de React</h1>
      <hr />
      <Search_arrow />
      <List_arrow />
    </div>
  )
}
*/

// Handler functions in JSX
/*
const Search_arrow = () => {
  const handlerChange = event =>{
    console.log(event.target.value)
  }
  return (
    <div >
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search' onChange={handlerChange}></input>
    </div>
  )
}

const App = () => (
  <div className='App'>
    <h1>Usando handler events</h1>
    <hr />
    <Search_arrow />
  </div>
)
*/

// React Props

/*
const List_arrow = (props) => (
  
  //<ul>
    //{props.list.map((item) => (
      //<li key={item.objectID}>
        //<span>
          //<a href={item.url} className='App-link'>{item.title}</a>
        //</span>
        //<span>Author: {item.author} </span>
        //<span>Comments: {item.num_comments} </span>
        //<span>Points: {item.points} </span>
      //</li>
    //))}
  //</ul>
  

  // Variant using other component
  <ul>
    {props.list.map((item) => (
    <Item key={item.objectID} item={item} />
    ))}
  </ul>

)

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url} className='App-link'>{props.item.title}</a>
    </span>
    <span>Author: {props.item.author} </span>
    <span>Comments: {props.item.num_comments} </span>
    <span>Points: {props.item.points} </span>
  </li>
)


const App = () => {
  return (
    <div className='App'>
      <h1>Usando Props</h1>
      <hr />
      <List_arrow list={initialStory}/>
    </div>
  )
}
*/

// React State
/*
const Search_arrow = () => {
  const [searchTerm,setSearchTerm] = React.useState('');
  const handlerChange = (event) => {
    setSearchTerm(event.target.value)
    console.log(searchTerm)
  }
  return (
    <div >
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search' onChange={handlerChange}></input>
      <p>
        Your search: {searchTerm}
      </p>
    </div>
  )
}

const App = () => (
  <div className='App'>
    <h1>Usando State</h1>
    <Search_arrow />
  </div>
)
*/

// Callback Handlers in JSX
/*
const Search_ = (props) => {
  const [searchTerm,setSearchTerm] = React.useState('');
  const handlerChange = (event) => {
  setSearchTerm(event.target.value)
    props.onSearch(event)
  }
  return (
    <div >
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search' onChange={handlerChange}></input>
      <p>
        Your search: {searchTerm}
      </p>
    </div>

  )
}

const App = () => {
  const handlerSearch = (event) =>{
    console.log(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Uso de callback para la comunicacion de hijo a padre</h1>
      <hr />
      <Search_ onSearch={handlerSearch} />
    </div>
  )
}
*/

// Lifting State in React

/*
const List_L = (props) => {
  return (
  <ul>
    {props.list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url} className='App-link'>{item.title}</a>
        </span>
        <span>Author: {item.author} </span>
        <span>Comments: {item.num_comments} </span>
        <span>Points: {item.points} </span>
      </li>
    ))}
  </ul>
  )
}

const Search_L = (props) => (
  <div >
      <label htmlFor='search'>Search: </label>
      <input type='text' id='search' onChange={props.onSearch}></input>
  </div>
)

const App = () => {
  const [searchTerm,setSearchTerm] = React.useState('');
  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = initialStory.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className='App'>
      <h1>Usando Lifting state</h1>
      <hr />
      <Search_L onSearch={handlerSearch} />
      <hr />
      < List_L list={searchedStories}/>
    </div>
  )
}
*/

// React Controlled Components

/*
const Search_R = (props) => (
  <div>
    <label htmlFor='search'>Search:</label>
    <input id='search' type='text' value={props.search} onChange={props.onSearch} />
    <p>Searched: {props.search}</p>
  </div>
)

const App = () =>{
  const [searchTerm,setSearchTerm] = React.useState('React')
  const handlerSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className='App'>
      <h1>Usando Controlled Comments</h1>
      <hr />
      <Search_R search={searchTerm} onSearch={handlerSearch} />

    </div>
  )
}
*/

// Props Handling (Advanced)

// Object Destructuring
/*
const Search_O = ({search,onSearch}) => (
  <div>
    <label htmlFor='search'>Search</label>
    <input id='search' type='text' value={search} onChange={onSearch} />
    <p>Searched: {search}</p>
  </div>
)

const App = () => {
  const [searchTerm,setSearchTerm] = React.useState('React')
  const handlerSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className='App'>
      <h1>Uso de Object Destructuring</h1>
      <hr />
      <Search_O search={searchTerm} onSearch={handlerSearch} />
    </div>
  )
}
*/

// Spread and Rest Operators

/*
const List_S = ({id,title,url,author,comments,point}) => (
  <ul>
    <li key={id}>
      <hr />
      <span>Titulo: {title}</span>
      <hr />
      <span>Url: {url}</span>
      <hr />
      <span>Comments: {comments}</span>
      <hr />
      <span>Points: {point}</span>
      <hr />
      <span>Author: {author}</span>
    </li>
  </ul>
)

const App = () => {
  return (
    <div className='App'>
      <h1>Uso de Spread and Rest Operators</h1>
      <hr />
      {initialStory.map(item => (
        <List_S {...item} />
      ))}
    </div>
  )
}
*/

// React Side-Effects

/*
const Search_E = ({search,onSearch}) => (
  <div>
    <label htmlFor='search'>Search</label>
    <input id='search' type='text' value={search} onChange={onSearch} />
    <p>Searched: {search}</p>
  </div>

)

const App = () => {
  const [searchTerm,setSearchTerm] = React.useState(localStorage.getItem('search') || 'React')

  React.useEffect(() => {
    localStorage.setItem('search',searchTerm)
  },[searchTerm])

  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Usando Side-Effects</h1>
      <hr />
      <Search_E  search={searchTerm} onSearch={handlerSearch} />
    </div>
  )

}
*/

// React Custom Hooks (Advanced)

/*
const Search_H = ({search,onSearch}) => (
  <div>
    <label htmlFor='search'>Search</label>
    <input id='search' type='text' value={search} onChange={onSearch} />
    <p>Searched: {search}</p>
  </div>
)

const useSemiPersitentState = (key,initialstate) => {
  const [value,setValue] = React.useState(localStorage.getItem(key) || initialstate)

  React.useEffect(() => {
    localStorage.setItem(key,value)
  },[key,value])

  return [value,setValue]
}

const App = () => {
  const [searchTerm,setSearchTerm] = useSemiPersitentState('search','React')
  const handlerSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className='App'>
      <h1>Uso de Custom hooks</h1>
      <hr />
      <Search_H search={searchTerm} onSearch={handlerSearch} />
    </div>
  )
}
*/

// React Fragments

/*
// Variante a mano 

const Search_M = ({search,onSearch}) => [
  <label htmlFor='search'>Search: </label>,
  <input type='text' value={search} onChange={onSearch} />,
  <h4>Search: {search}</h4>
]

// Variante con fragments <> -> <React.Fragments> </React.Fragments>

const Search_F = ({search,onSearch}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' value={search} onChange={onSearch} />
    <h4>Search: {search} </h4>
  </>
)



const App = () => {
  const [searchTerm,setSearchTerm] = React.useState('React')
  const handlerSearch = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className='App'>
      <h1>Uso de Fragments</h1>
      <hr />
      <Search_F search={searchTerm} onSearch={handlerSearch} />
    </div>
  )

}
*/

// Reusable React Component

/*
const InputWithLabel = ({id,type,label,value,onInputChange}) => (
  <>
    <label htmlFor={id} > {label}</label>&nbsp;
    <input type={type} value={value} onChange={onInputChange} />
    <h4>Search: {value}</h4>

  </>
)

const App = () => {
  const [searchTerm,setSearchTerm] = React.useState('React')
  const handlerSearch = (e) => {setSearchTerm(e.target.value)}
  const attr = {'id':'search','type':'text','label':'Search','value':searchTerm,'onInputChange':handlerSearch}
  return (
    <div className='App'>
      <h1>Uso de Reusable comments</h1>
      <hr />
      <InputWithLabel {...attr} />
    </div>
  )
  
}
*/

// React Component Composition
/*
const InputChildern = ({id,type,children,value,onInputChange}) => (
  <React.Fragment>
    <label htmlFor={id} >{children}</label>&nbsp;
    <input type={type} value={value} onChange={onInputChange} />
    <h4>Search: {value}</h4>
  </React.Fragment>
)

const App = () => {
  const [searchTerm,setSearchTerm] = React.useState('React')
  const handlerSearch = e => {
    setSearchTerm(e.target.value)
  }
  const attr = {'id':'search','type':'text','children':'Search','value':searchTerm,'onInputChange':handlerSearch}
  return (
    <div className='App'>
      <h1>Uso de Comments compostion</h1>
      <hr />
      <InputChildern {...attr} >
        <strong>Search:</strong>
      </InputChildern>
    </div>

  )
}
*/

// Imperative React

/*
const InputChildern = ({id,type,children,value,onInputChange,isFocused}) => {
  const inputRef = React.useRef()
  React.useEffect(() => {
    if (isFocused && inputRef.current){inputRef.current.focus()}
  },[isFocused])

  return (
    <>
      <label htmlFor={id} >{children}</label>&nbsp;
      <input type={type} value={value} onChange={onInputChange} ref={inputRef}/>
      <h4>Search: {value}</h4>
    </>
  )
}

const App = () => {
  const [searchTerm,setSearchTerm] = React.useState('React')
  const handlerSearch = e => {
    setSearchTerm(e.target.value)
  }
  const attr = {'id':'search','type':'text','children':'Search','value':searchTerm,'onInputChange':handlerSearch,'isFocused':true}
  return (
    <div className='App'>
      <h1>Uso de imperative React</h1>
      <hr />
      <InputChildern {...attr} >
        <strong>Search:</strong>
      </InputChildern>
    </div>

  )
}
*/


// Inline Handler in JSX

/*
const Item_story = ({ item, onRemoveItem }) => {
  return (
    <li>
      <span >
        <a href = { item.url } > { item.title } </a>
        </span > 
        <span> { item.author } </span> 
        <span > { item.num_comments } </span> 
        <span > { item.points } </span> 
        <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  )

}

const List_story = ({ list, onRemoveItem }) => ( 
  <>
    <ul> 
      {list.map(item => ( 
        <Item_story key = { item.objectID } item = { item } onRemoveItem = { onRemoveItem }/>
        ))
      } 
    </ul>
  </>
)

const Search_jsx = ({handlerSearch}) => ( 
  <>
    <label htmlFor = 'search' > Search: </label> 
    <input type = 'text' onChange = { handlerSearch }/>
  </>

)

const App = () => {
 
  const [search, setSearchTerm] = React.useState('search', 'React')
  const handlerSearch = e => {
    setSearchTerm(e.target.value)
  }

  const [stories, setStories] = React.useState(initialStory)
  const handlerStory = ((item) => {
    const newStories = stories.filter((story) => item.objectID !== story.objectID)
    setStories(newStories)
  })

  const searchedStories = stories.filter(story => (
    story.title.toLowerCase().includes(search.toLowerCase())))

  return ( 
    <div className = 'App' >
      <h1> Uso de JSX in line </h1> 
      <Search_jsx handlerSearch = { handlerSearch }/>
      <hr />
      <List_story onRemoveItem = { handlerStory } list = { searchedStories }/> 
        
    </div>
  )
}
*/


// React Asynchronous Data

/*
const initialStory = [{
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

const List_async = ({ list, onRemoveItem }) => ( 
  <>
    <ul className='App-ul'> 
      {list.map(item => ( 
        <Item_async key = {item.objectID} item = {item} onRemoveItem = {onRemoveItem}/>
        ))
      } 
    </ul>
  </>
)
const Item_async = ({ item, onRemoveItem }) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>

)

const Search_async = ({handlerSearch}) => (
  <>
    <label htmlFor = 'search' > Search: </label> 
    <input type = 'text' onChange = {handlerSearch}/>
  </>
)

const App = () =>{
  const getAsycnData = () => new Promise((resolve) => setTimeout(() => resolve({data:{stories:initialStory}}),2000))
  const [search,setSearchTerm] = React.useState('search','React')
  const handlerSearch = (e) => (
    setSearchTerm(e.target.value)
  )
  const [stories,setStories] = React.useState([])

  React.useEffect(() => {getAsycnData().then(result => {setStories(result.data.stories)})},[])

  const handlerStories = (item) => {
    const newStories = stories.filter(story => (item.objectID !== story.objectID))
    setStories(newStories)
  }
  const searchedStories = stories.filter(story => (story.title.toLowerCase().includes(search.toLowerCase())))
  
  return (
    <div className='App' >
      <h1>Uso de Asynchronous Data</h1>
      <Search_async handlerSearch={handlerSearch}/>
      <hr />
      <List_async list={searchedStories} onRemoveItem={handlerStories}/>
    </div>
  )
}
*/

// React Conditional Rendering

/*
const Search_cond = ({handlerSearch}) => (
  <>
    <label htmlFor='search'>Search:</label>
    <input type='text' onChange={handlerSearch}></input>
  </>
)
const List_cond = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_cond key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)
const Item_cond = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>
)


const App = () => {
  const getAsycnData = () => new Promise((resolve) => setTimeout(() => resolve({data:{stories:initialStory}}),2000))
  const [search,setSearch] = React.useState('search','React')
  const handlerSearch = (event) => (setSearch(event.target.value))

  const [stories,setStories] = React.useState([])
  const [isLoading,setLoading] = React.useState(false)
  const [isError,setError] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    getAsycnData().then(resolve => {
      setStories(resolve.data.stories)
      setLoading(false)
    })
    .catch(() => setError(true))
  },[])

  const handlerStory = (item) => {
    const newStories = stories.filter(story => item.objectID !== story.objectID)
    setStories(newStories)
  }
  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='App'>
      <h1>Usando Conditional Rendering</h1>
      <Search_cond handlerSearch={handlerSearch} />
      <hr />
      {isError && <p>Error</p>}
      {isLoading ? (
        <p>Loading...</p>
      ):(
        <List_cond list={searchedStories} onRemoveItem={handlerStory} />
      )}
    </div>
  )
}
*/


// React Advanced State

/*
const Search_ad = ({handlerSearch}) => (
  <> 
   <label htmlFor='search'>Search:</label>
   <input type='text' onChange={handlerSearch} />
  </>
)
const List_ad = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_ad key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)
const Item_ad = ({item,onRemoveItem}) => (
  <>
   <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>
)
const storiesReducer = (state,action) => {
  switch (action.type){
    case 'SET_STORY':
      return action.payload
    case 'REMOVE_STORY':
      return state.filter(story => action.payload.objectID !== story.objectID)
    default: throw new Error()
  }

}
const App = () => {
  const getAsycnData = () => new Promise((resolve) => setTimeout(() => resolve({data:{stories:initialStory}}),2000))
  const [search,setSearch] = React.useState('search','React')
  const handlerSearch = (e) => setSearch(e.target.value)
  const [stories,setStories] = React.useReducer(
    storiesReducer,[]
  )
  const [isLoading,setLoading] = React.useState(false)
  const [isError,setError] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    getAsycnData().then((resolve) => {
      setStories({type:'SET_STORY',payload:resolve.data.stories})
      setLoading(false)}).catch(() => {setError(true)})
  },[])
  const handlerStories = item => setStories({type:'REMOVE_STORY',payload:item})

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='App'>
      <h1>Uso de Advanced State</h1>
      <Search_ad handlerSearch={handlerSearch} />
      <hr />
      {isError && <p>Error</p>}
      {isLoading ? (<p>Loading...</p>):(
        <List_ad list= {searchedStories} onRemoveItem={handlerStories} />
      )}
    </div>
  )
}
*/


// React Impossible States

/*
const List_state = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_state key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)
const Item_state = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>
)
const Search_state = ({handlerSearch}) => (
  <>
    <label htmlFor='search'>Search:</label>
    <input type='text' onChange={handlerSearch}></input>
  </>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }

}

const App = () => {
  const getAsycnData = () => new Promise((resolve) => setTimeout(()=> resolve({data:{stories:initialStory}}),2000))
  const [search,setSearch] = React.useState('search','React')
  const handlerSearch = (e) => setSearch(e.target.value)
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})

  React.useEffect(() => {
    setStories({type:'STORIES_FETCH_INIT'})
    getAsycnData().then((result) => {
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.stories})
    }).catch(() => {setStories({type:'STORIES_FETCH_FAILURE'})})
  },[])

  const handlerStories = item => {setStories({type:'REMOVE_STORY',payload:item})}
  const searchedStories = stories.data.filter(story => story.title.toLowerCase().includes(search.toLowerCase()))

  console.log(searchedStories)
  return (
    <div className='App'>
      <h1>Uso de Iimpossible States</h1>
      <Search_state handlerSearch={handlerSearch} />
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):
      (
        <List_state list={searchedStories} onRemoveItem={handlerStories} />
      )}
    </div>

  )
}
*/

// Data Fetching with React

/*
const Search_fetching = ({handler}) => (
  <>
    <label htmlFor="search">Search:</label>
    <input type="text"  onChange={handler} />
  </>
)
const List_fetching = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item =>(
        <Item_fetching key={item.objectID}  item={item} onRemoveItem={onRemoveItem}/>
      ))}
    </ul>
  </>
)

const Item_fetching = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }

}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [search,setSearch] = React.useState('search','React')
  const handlerSearch = e => {
    setSearch(e.target.value)
  }
  const [stories,setStories] = React.useReducer(
    storiesReducer,{data:[],isLoading:false,isError:false}
  )
  React.useEffect(() => {
    setStories({type:'STORIES_FETCH_INIT'})
    fetch(`${API_ENDPOINT}react`)
    .then(response => response.json())
    .then(result => {
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.hits})
    }).catch(() => setStories({type:'STORIES_FETCH_FAILURE'}))
  },[])

  const handlerStories = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  const searchedStories = stories.data.filter(story => story.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='App'>
      <h1>Uso de Fetching</h1>
      <Search_fetching handler={handlerSearch} />
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):
      (<List_fetching list={searchedStories} onRemoveItem={handlerStories} />)}
    </div>
  )
}
*/

// Data Re-Fetching in React

/*
const Search_ref = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type="text" onChange={handler} />
  </>
)
const List_ref = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_ref key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)
const Item_ref = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>
)
const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = e => {setTerm(e.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})

  React.useEffect(()=>{
    if (!searchTerm)return
    setStories({type:'STORIES_FETCH_INIT'})
    fetch(`${API_ENDPOINT}react`)
    .then(response => response.json())
    .then(result => {setStories({type:'STORIES_FETCH_SUCCESS',payload:result.hits})})
    .catch(() => setStories({type:'STORIES_FETCH_FAILURE'}))
  },[searchTerm])

  const handlerStories = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  return (
    <div className='App'>
      <h1>Usando Re-Fetching</h1>
      <Search_ref handler={handlerSearch} />
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):
      (
        <List_ref list={stories.data} onRemoveItem={handlerStories} />
      )}

    </div>

  )
}
*/

// Memoized Handler in React (Advanced)

/*
const Search_mem = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)
const List_mem = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_mem key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)
const Item_mem = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li> 
  </>
)
const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}


const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = e => {setTerm(e.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})

  const handlerFertch = React.useCallback(() => {
    if (!searchTerm)return
    setStories({type:'STORIES_FETCH_INIT'})
    fetch(`${API_ENDPOINT}`)
    .then(response => response.json())
    .then(result => {setStories({type:'STORIES_FETCH_SUCCESS',payload:result.hits})})
    .catch(() => setStories({type:'STORIES_FETCH_FAILURE'}))
  },[searchTerm])

  React.useEffect(() => {
    handlerFertch()
  },[handlerFertch])

  const handlerStories = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  return (
    <div className='App'>
      <h1>Usando Memoized Handler</h1>
      <Search_mem handler={handlerSearch} />
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):
      (
        <List_mem list={stories.data} onRemoveItem={handlerStories} />
      )}
    </div>
  )
}
*/


// Explicit Data Fetching with React

/*
const Search_ex = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_ex = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_ex key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_ex = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li>
  </>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = e => {setTerm(e.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})

  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = () => {setUrl(`${API_ENDPOINT}${searchTerm}`)}

  const handlerFertchStories = React.useCallback(() => {
    setStories({type:'STORIES_FETCH_INIT'})
    fetch(url).then(response => response.json())
    .then(result => {setStories({type:'STORIES_FETCH_SUCCESS',payload:result.hits})})
    .catch(() => setStories({type:'STORIES_FETCH_FAILURE'}))
  },[url])

  React.useEffect(() => {
    handlerFertchStories()
  },[handlerFertchStories])

  const handlerStories = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  return (
    <div className='App'>
      <h1>Usando Explicit Data Fetching</h1>
      <Search_ex handler={handlerSearch} />
      <button type="button" disabled={!searchTerm} onClick={handlerSubmit}>Submit</button>
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):(
        <List_ex list={stories.data} onRemoveItem={handlerStories} /> 
      )}
    </div>
  )
}
*/


// Third-Party Libraries in React

/*
const Search_axios = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_axios = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_axios key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_axios = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li>
  </>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = event => {setTerm(event.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})
  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = () => {setUrl(`${API_ENDPOINT}${searchTerm}`)}

  const handlerAxiosStories =  React.useCallback(() => {
    setStories({type:'STORIES_FETCH_INIT'})
    axios.get(url).then(response => {
      setStories({type:'STORIES_FETCH_SUCCESS',payload:response.data.hits})
    }).catch(() => setStories({type:'STORIES_FETCH_FAILURE'}))
  },[url])

  React.useEffect(() =>{
    handlerAxiosStories()
  },[handlerAxiosStories])

  const removeStory = item => setStories({type:'REMOVE_STORIES',payload:item})

  return (
    <div className='App'>
      <h1>Usando Axios</h1>
      <Search_axios handler={handlerSearch} />
      <button type='button' onClick={handlerSubmit} >Submit</button>
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):(
        <List_axios list={stories.data} onRemoveItem={removeStory} />
      )}
    </div>
  )
}
*/

// Async/Await in React (Advanced)

/*
const Search_async = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_async = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_async key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_async = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li>
  </>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = event => {setTerm(event.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})
  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = () => {setUrl(`${API_ENDPOINT}${searchTerm}`)}

  const handlerAxiosStories = React.useCallback( async () => {
    setStories({type:'STORIES_FETCH_INIT'})
    try {
      const result = await axios.get(url)
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.hits})
    }catch{
      setStories({type:'STORIES_FETCH_FAILURE'})
    }
  },[url])
  React.useEffect(() => {
    handlerAxiosStories()
  },[handlerAxiosStories])

  const removeStory = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  return (
    <div className='App'>
      <h1>Usando Async/Await</h1>
      <Search_async handler={handlerSearch} />
      <button type='button' onClick={handlerSubmit} >Submit</button>
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loading...</p>):(
        <List_async list={stories.data} onRemoveItem={removeStory} />
      )}
    </div>
  )
}
*/


// Forms in React

/*
const Search_forms = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_forms = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_forms key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_forms = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span >Comments: { item.num_comments } </span> 
      <span >Points: { item.points } </span> 
      <span ><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li>
  </>
)

const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit}) => (
   <form onSubmit={onSearchSubmit}>
    <Search_forms handler={onSearchInput} > <strong>Search: </strong> </Search_forms>
    <button type='submit' disabled={!searchTerm}>Submit </button>
  </form>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = event => {setTerm(event.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})
  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }

  const handlerAxiosStories = React.useCallback(async () => {
    setStories({type:'STORIES_FETCH_INIT'})
    try{
      const result = await axios.get(url)
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.hits})
    }catch{setStories({type:'STORIES_FETCH_FAILURE'})}
  },[url])
  React.useEffect( () => {
    handlerAxiosStories()
  },[handlerAxiosStories])
  
  const removeStory = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  return (
    <div className='App'>
      <h1>Usando Forms</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handlerSearch} onSearchSubmit={handlerSubmit} />
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loding...</p>):(
        <List_forms list={stories.data} onRemoveItem={removeStory} />
      )}
    </div>
  )
}
*/

// React's legacy
// React Class Components

/*
class InputWithLabel extends React.Component {
  constructor(props){
    super(props)
    this.props = props
  }
  render() {
    return ( 
      <>
        <label htmlFor={this.props[0]}>Search</label> &nbsp;
        <input id={this.props[0]} type='text' onChange={this.props[3]}/>
      </>
    );
  } 
}

const App = () => {
  const handlerInput = event => alert('Hola react')
  const data = ['inputClass','search','text',handlerInput,'Label']
  return (
    <div className='App'>
      <h1>Usando React's legacy</h1>
      <hr />
      <InputWithLabel {...data}/>
    </div>
  )
}
*/


// React Class Components: State

/*
class Search_class extends React.Component {
  constructor(props){
    super(props)
    this.searchTerm = props[0]
    this.onSearchTerm = props[1]
  }
  render(){
    return (
      <>
        <label htmlFor={this.searchTerm}>Search: </label>
        <input type="text" onChange={this.onSearchTerm} />
      </>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'searchTerm':'React'
    }
  }
  render(){
    const {searchTerm} = this.state
    const handler = e => {this.setState({searchTerm:e.target.value})}
    const value = ['search',handler]
    return (
      <div className="App">
        <h1>Uso de Class components: State</h1>
        <Search_class {...value}/>
        <hr />
        <p>{searchTerm}</p>
      </div>
    )
  }
}
*/

// Imperative React

/*
class InputWithLabel extends React.Component {
  constructor(props){
    super(props)
    this.inputRef = React.createRef()
    this.type = props[0]
    this.handler = props[1]
  }
  componentDidMount(){
    if (this.props.isFocused) this.inputRef.current.isFocused()
  }
  render(){
    return (
      <>
        <label htmlFor='search'>Search:  </label>
        <input type={this.type} ref={this.inputRef} onChange={this.handler} />
      </>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      'search':''
    }

  }
  handlerChange = e => {
    this.setState({
      'search':e.target.value
    })
  }
  render(){
    const value = ['text',this.handlerChange]
    const {search} = this.state
    return (
      <div className='App'>
        <h1>Usando Imperative React</h1>
        <InputWithLabel {...value} />
        <hr />
        <h4>{search}</h4>
      </div>
    )
  }

}
*/

// Styling in React
// CSS in React

/*
const Search_style = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_style = ({list,onRemoveItem}) => (
  <>
    <ul className='App-ul'>
      {list.map(item => (
        <Item_style key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_style = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span>Comments: { item.num_comments } </span> 
      <span>Points: { item.points } </span> 
      <span><button type = "button" onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li>
  </>
)

const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit}) => (
   <form onSubmit={onSearchSubmit} className="search-form">
    <Search_style handler={onSearchInput} > <strong>Search: </strong> </Search_style>
    <button type='submit' disabled={!searchTerm} className="button button-large">Submit </button>
  </form>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = event => {setTerm(event.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})
  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }

  const handlerAxiosStories = React.useCallback(async () => {
    setStories({type:'STORIES_FETCH_INIT'})
    try{
      const result = await axios.get(url)
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.hits})
    }catch{setStories({type:'STORIES_FETCH_FAILURE'})}
  },[url])
  React.useEffect( () => {
    handlerAxiosStories()
  },[handlerAxiosStories])
  
  const removeStory = item => {setStories({type:'REMOVE_STORIES',payload:item})}

  return (
    <div className='container'>
      <h1 className='headline-primary'>Usando Styling React</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handlerSearch} onSearchSubmit={handlerSubmit} />
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loding...</p>):(
        <List_style list={stories.data} onRemoveItem={removeStory} />
      )}
    </div>
  )
}
*/

// CSS Modules in React

/*
const Search_style = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_style = ({list,onRemoveItem}) => (
  <>
    <ul className={style.Appul}>
      {list.map(item => (
        <Item_style key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_style = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span>Comments: { item.num_comments } </span> 
      <span>Points: { item.points } </span> 
      <span><button type = "button"  onClick = { () => onRemoveItem(item)} > Dismiss </button></span > 
    </li>
  </>
)

const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit,classState}) => (
   <form onSubmit={onSearchSubmit} className="searchForm">
    <Search_style handler={onSearchInput} > <strong>Search: </strong> </Search_style>
    <button type='submit' disabled={!searchTerm} className={cs(style.buttonSmall,{[style.buttonLarge]:classState.isShort})}>
      Submit </button>
  </form>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = event => {setTerm(event.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})
  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }

  const handlerAxiosStories = React.useCallback(async () => {
    setStories({type:'STORIES_FETCH_INIT'})
    try{
      const result = await axios.get(url)
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.hits})
    }catch{setStories({type:'STORIES_FETCH_FAILURE'})}
  },[url])
  React.useEffect( () => {
    handlerAxiosStories()
  },[handlerAxiosStories])
  
  const removeStory = item => {setStories({type:'REMOVE_STORIES',payload:item})}
  const classnmae = {'isLarge':true,'isShort':false}
  return (
    <div className={style.container}>
      <h1 className={style.headlinePrimary}>Usando Styling React</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handlerSearch} onSearchSubmit={handlerSubmit} classState={classnmae}/>
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loding...</p>):(
        <List_style list={stories.data} onRemoveItem={removeStory} />
      )}
    </div>
  )
}
*/

// SVGs in React

/*
const Search_svg = ({handler}) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input type='text' onChange={handler} />
  </>
)

const List_svg = ({list,onRemoveItem}) => (
  <>
    <ul className={style.Appul}>
      {list.map(item => (
        <Item_svg key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  </>
)

const Item_svg = ({item,onRemoveItem}) => (
  <>
    <li>
      <span >Url: <a href = { item.url } className='App-link' > { item.title } </a></span > 
      <span>Author: { item.author } </span> 
      <span>Comments: { item.num_comments } </span> 
      <span>Points: { item.points } </span> 
      <span><button type = "button"  onClick = { () => onRemoveItem(item)} > <Check height="18px" width="18px"/></button></span > 
    </li>
  </>
)

const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit,classState}) => (
   <form onSubmit={onSearchSubmit} className="searchForm">
    <Search_svg handler={onSearchInput} > <strong>Search: </strong> </Search_svg>
    <button type='submit' disabled={!searchTerm} className={cs(style.buttonSmall,{[style.buttonLarge]:classState.isShort})}>
      Submit </button>
  </form>
)

const storiesReducer = (state,action) => {
  switch (action.type){
    case 'STORIES_FETCH_INIT':
      return {
        ...state,isLoading:true,isError:false
      }
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,isLoading:false,isError:false,data:action.payload
      }
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,isLoading:false,isError:true
      }
    case 'REMOVE_STORIES':
      return {
        ...state,data:state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    default: throw new Error()
  }
}

const App = () => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='
  const [searchTerm,setTerm] = React.useState('search','React')
  const handlerSearch = event => {setTerm(event.target.value)}
  const [stories,setStories] = React.useReducer(storiesReducer,{data:[],isLoading:false,isError:false})
  const [url,setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`)
  const handlerSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`)
    event.preventDefault()
  }

  const handlerAxiosStories = React.useCallback(async () => {
    setStories({type:'STORIES_FETCH_INIT'})
    try{
      const result = await axios.get(url)
      setStories({type:'STORIES_FETCH_SUCCESS',payload:result.data.hits})
    }catch{setStories({type:'STORIES_FETCH_FAILURE'})}
  },[url])
  React.useEffect( () => {
    handlerAxiosStories()
  },[handlerAxiosStories])
  
  const removeStory = item => {setStories({type:'REMOVE_STORIES',payload:item})}
  const classnmae = {'isLarge':true,'isShort':false}
  return (
    <div className={style.container}>
      <h1 className={style.headlinePrimary}>Usando Styling React</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handlerSearch} onSearchSubmit={handlerSubmit} classState={classnmae}/>
      <hr />
      {stories.isError && <p>Error</p>}
      {stories.isLoading ? (<p>Loding...</p>):(
        <List_svg list={stories.data} onRemoveItem={removeStory} />
      )}
    </div>
  )
}
*/

// React Maintenance (useEffect run only update)

/*
const useStateCustum = (callback,depedencies) => {
  const isMount = React.useRef(false)

  React.useEffect(() => {
    if (isMount.current) {callback(depedencies)}
    else{
      isMount.current = true
    }
  },[callback,depedencies])
}
 
const App = () => {
  const [toggle,setToggle] = React.useState(true)
  const handlerToggle = e => {
    setToggle(!toggle)
  }
  useStateCustum((dependencies) => {
    console.log('I run only if toggle changes.')
  },[toggle])
  
  return (
    <div className={style.container}>
      <h1 className={style.headlinePrimary}>Uso de Maintenance</h1>
      <hr />
      <button type="button" onClick={handlerToggle} >Toggle</button>
      {toggle && <h4>Hello React</h4>}

    </div>
  )
}
*/ 

// Unit Testing: Functions

/*
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );

  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${searchTerm}`
  );

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);

    event.preventDefault();
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

const SearchForm = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>

    <button type="submit" disabled={!searchTerm}>
      Submit
    </button>
  </form>
);

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        ref={inputRef}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

export default App;
export { storiesReducer, SearchForm, InputWithLabel, List, Item };
*/


// React Project Structure

/*
import {List} from './List/List.js'
import {SearchForm} from './SearchForm/SearchForm.js'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );

  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${searchTerm}`
  );

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);

    event.preventDefault();
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};
*/

// Real World React (Advanced)

// Sorting

/*
const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list,'title'),
  AUTHOR: (list) => sortBy(list,'author'),
  COMMENTS: (list) => sortBy(list,'num_comments').reverse(),
  POINTS: (list) => sortBy(list,'points').reverse(),
}

const List = ({list,onRemoveItem}) => {
  const [sort,setSort] = React.useState('NONE')
  const handlerSort = (sortKey) => {setSort(sortKey)}
  const sortFunction = SORTS[sort]
  const sortedList  = sortFunction(list)
  return (
    <ul>
      <li style={{display:'flex'}}>
        <span style={{width:'40%'}}>
          <button type='button' onClick={() => handlerSort('TITLE')}>Title</button>
        </span>
        <span style={{width:'30%'}}>
          <button type='button' onClick={() => handlerSort('AUTHOR')}>Author</button>
        </span>
        <span style={{width:'10%'}}>
          <button type='button' onClick={() => handlerSort('COMMENTS')}>Comments</button>
          </span>
        <span style={{width:'10%'}}>
          <button type='button' onClick={() => handlerSort('POINTS')}>Points</button>
          </span>
        <span style={{width:'10%'}}>Actions</span>
      </li>
      {sortedList.map(item => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  )
}
const Item = ({item,onRemoveItem}) => (
  <li style={{display:'flex'}}>
    <span style={{width:'40%'}}><a href={item.url}>{item.title}</a></span>
    <span style={{width:'30%'}}>{item.author}</span>
    <span style={{width:'10%'}}>{item.num_comments}</span>
    <span style={{width:'10%'}}>{item.points}</span>
    <span style={{width:'10%'}}>
      <button type='button' onClick={() => onRemoveItem(item)}>Dismiss</button>
    </span>
  </li>
)
const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel id="search" value={searchTerm} isFocused onInputChange={onSearchInput}>
      <strong>Search:</strong>
    </InputWithLabel>
    <button type="submit" disabled={!searchTerm}>Submit</button>
  </form>
)

const InputWithLabel = ({id,value,type='text',onInputChange,isFocused,children}) => {
  const inputRef = React.useRef()
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  },[isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} ref={inputRef} type={type} value={value} onChange={onInputChange}/>
    </>
  )
}

const useSemiPersistentState = (key,initalState ) => {
  const [value,setValue] = React.useState(localStorage.getItem(key) ||
  initalState)

  React.useEffect(() => {
    localStorage.setItem(key,value)
  },[value,key])
  return [value,setValue]
}

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);

    event.preventDefault();
  };

  return (
    <div>
      <h1>Usando Sort</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearchInput} onSearchSubmit={handleSearchSubmit} />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};
*/

// Reverse Sort

/*
const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list,'title'),
  AUTHOR: (list) => sortBy(list,'author'),
  COMMENTS: (list) => sortBy(list,'num_comments').reverse(),
  POINTS: (list) => sortBy(list,'points').reverse(),
}

const List = ({list,onRemoveItem}) => {
  const [sort,setSort] = React.useState({
    sortKey: 'NONE',isReverse:false
  })
  const handlerSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse
    setSort({sortKey,isReverse})
  }
  const sortFunction = SORTS[sort.sortKey]
  const sortedList  = sort.isReverse ? sortFunction(list).reverse(): sortFunction(list)
  return (
    <ul>
      <li style={{display:'flex'}}>
        <span style={{width:'40%'}}>
          <button type='button' onClick={() => handlerSort('TITLE')}>Title</button>
        </span>
        <span style={{width:'30%'}}>
          <button type='button' onClick={() => handlerSort('AUTHOR')}>Author</button>
        </span>
        <span style={{width:'10%'}}>
          <button type='button' onClick={() => handlerSort('COMMENTS')}>Comments</button>
          </span>
        <span style={{width:'10%'}}>
          <button type='button' onClick={() => handlerSort('POINTS')}>Points</button>
          </span>
        <span style={{width:'10%'}}>Actions</span>
      </li>
      {sortedList.map(item => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  )
}
const Item = ({item,onRemoveItem}) => (
  <li style={{display:'flex'}}>
    <span style={{width:'40%'}}><a href={item.url}>{item.title}</a></span>
    <span style={{width:'30%'}}>{item.author}</span>
    <span style={{width:'10%'}}>{item.num_comments}</span>
    <span style={{width:'10%'}}>{item.points}</span>
    <span style={{width:'10%'}}>
      <button type='button' onClick={() => onRemoveItem(item)}>Dismiss</button>
    </span>
  </li>
)
const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel id="search" value={searchTerm} isFocused onInputChange={onSearchInput}>
      <strong>Search:</strong>
    </InputWithLabel>
    <button type="submit" disabled={!searchTerm}>Submit</button>
  </form>
)

const InputWithLabel = ({id,value,type='text',onInputChange,isFocused,children}) => {
  const inputRef = React.useRef()
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  },[isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} ref={inputRef} type={type} value={value} onChange={onInputChange}/>
    </>
  )
}

const useSemiPersistentState = (key,initalState ) => {
  const [value,setValue] = React.useState(localStorage.getItem(key) ||
  initalState)

  React.useEffect(() => {
    localStorage.setItem(key,value)
  },[value,key])
  return [value,setValue]
}

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);

    event.preventDefault();
  };

  return (
    <div>
      <h1>Usando Sort</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearchInput} onSearchSubmit={handleSearchSubmit} />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
}
*/

// Remember Last Searches

/*
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const getUrl = (searchTerm) => `${API_ENDPOINT}${searchTerm}`;

const extractSearchTerm = (url) => url.replace(API_ENDPOINT, '');

const getLastSearches = (urls) =>
  urls
    .reduce((result, url, index) => {
      const searchTerm = extractSearchTerm(url);

      if (index === 0) {
        return result.concat(searchTerm);
      }

      const previousSearchTerm = result[result.length - 1];

      if (searchTerm === previousSearchTerm) {
        return result;
      } else {
        return result.concat(searchTerm);
      }
    }, [])
    .slice(-6)
    .slice(0, -1);

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );
  const [urls, setUrls] = React.useState([getUrl(searchTerm)]);
  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const lastUrl = urls[urls.length - 1];
      const result = await axios.get(lastUrl);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [urls]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    handleSearch(searchTerm);

    event.preventDefault();
  };

  const handleLastSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    handleSearch(searchTerm);
  };

  const handleSearch = (searchTerm) => {
    const url = getUrl(searchTerm);
    setUrls(urls.concat(url));
  };

  const lastSearches = getLastSearches(urls);

  return (
    <div>
      <h1>Usando Last search</h1>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />
      <LastSearches
        lastSearches={lastSearches}
        onLastSearch={handleLastSearch}
      />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

const LastSearches = ({ lastSearches, onLastSearch }) => (
  <>
    {lastSearches.map((searchTerm, index) => (
      <button
        key={searchTerm + index}
        type="button"
        onClick={() => onLastSearch(searchTerm)}
      >
        {searchTerm}
      </button>
    ))}
  </>
);

const SearchForm = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>
    <button type="submit" disabled={!searchTerm}>
      Submit
    </button>
  </form>
);

const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        ref={inputRef}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENT: (list) => sortBy(list, 'num_comments').reverse(),
  POINT: (list) => sortBy(list, 'points').reverse(),
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState({
    sortKey: 'NONE',
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;

    setSort({ sortKey, isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <ul>
      <li style={{ display: 'flex' }}>
        <span style={{ width: '40%' }}>
          <button type="button" onClick={() => handleSort('TITLE')}>
            Title
          </button>
        </span>
        <span style={{ width: '30%' }}>
          <button type="button" onClick={() => handleSort('AUTHOR')}>
            Author
          </button>
        </span>
        <span style={{ width: '10%' }}>
          <button type="button" onClick={() => handleSort('COMMENT')}>
            Comments
          </button>
        </span>
        <span style={{ width: '10%' }}>
          <button type="button" onClick={() => handleSort('POINT')}>
            Points
          </button>
        </span>
        <span style={{ width: '10%' }}>Actions</span>
      </li>

      {sortedList.map((item) => (
        <Item
          key={item.objectID}
          item={item}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
};

const Item = ({ item, onRemoveItem }) => (
  <li style={{ display: 'flex' }}>
    <span style={{ width: '40%' }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{item.author}</span>
    <span style={{ width: '10%' }}>{item.num_comments}</span>
    <span style={{ width: '10%' }}>{item.points}</span>
    <span style={{ width: '10%' }}>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);
*/

// Paginated Fetch


const API_BASE = 'https://hn.algolia.com/api/v1';
const API_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';

const getUrl = (searchTerm,page) => `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`
const extractSearchTerm = (url) => url.substring(url.lastIndexOf('?') + 1,url.lastIndexOf('&')).replace(PARAM_SEARCH,'')

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.page === 0 ? action.payload.list : state.data.concat(action.payload.list),
        page: action.payload.page,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const getLastSearches = (urls) => urls.reduce((result, url, index) => {
  const searchTerm = extractSearchTerm(url);

  if (index === 0) {
    return result.concat(searchTerm);
  }

  const previousSearchTerm = result[result.length - 1];

  if (searchTerm === previousSearchTerm) {
    return result;
  } else {
    return result.concat(searchTerm);
  }
}, [])
.slice(-6)
.slice(0, -1);

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENT: (list) => sortBy(list, 'num_comments').reverse(),
  POINT: (list) => sortBy(list, 'points').reverse(),
};

const LastSearches = ({ lastSearches, onLastSearch }) => (
  <>
    {lastSearches.map((searchTerm, index) => (
      <button key={searchTerm + index} type="button" onClick={() => onLastSearch(searchTerm)}>
        {searchTerm}
      </button>
    ))}
  </>
);

const SearchForm = ({searchTerm,onSearchInput,onSearchSubmit}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel id="search" value={searchTerm} isFocused onInputChange={onSearchInput}>
      <strong>Search:</strong>
    </InputWithLabel>
    <button type="submit" disabled={!searchTerm}>
      Submit
    </button>
  </form>
);

const InputWithLabel = ({id,value,type = 'text',onInputChange,isFocused,children}) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} ref={inputRef} type={type} value={value} onChange={onInputChange} />
    </>
  );
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState({
    sortKey: 'NONE',
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;

    setSort({ sortKey, isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <ul>
      <li style={{ display: 'flex' }}>
        <span style={{ width: '40%' }}>
          <button type="button" onClick={() => handleSort('TITLE')}>
            Title
          </button>
        </span>
        <span style={{ width: '30%' }}>
          <button type="button" onClick={() => handleSort('AUTHOR')}>
            Author
          </button>
        </span>
        <span style={{ width: '10%' }}>
          <button type="button" onClick={() => handleSort('COMMENT')}>
            Comments
          </button>
        </span>
        <span style={{ width: '10%' }}>
          <button type="button" onClick={() => handleSort('POINT')}>
            Points
          </button>
        </span>
        <span style={{ width: '10%' }}>Actions</span>
      </li>

      {sortedList.map((item) => (
        <Item  item={item} onRemoveItem={onRemoveItem}/>
      ))}
    </ul>
  );
};

const Item = ({ item, onRemoveItem }) => (
  <li style={{ display: 'flex' }}>
    <span style={{ width: '40%' }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{item.author}</span>
    <span style={{ width: '10%' }}>{item.num_comments}</span>
    <span style={{ width: '10%' }}>{item.points}</span>
    <span style={{ width: '10%' }}>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

const useSemiPersistentState = (key,initstate) => {
  const [value,setValue] = React.useState(
    localStorage.getItem(key) || initstate 
   )

   React.useEffect(() => {
    localStorage.setItem(key,value)
   },[value,key])
   return [value,setValue]
}

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState(
    'search',
    'React'
  );
  const [urls, setUrls] = React.useState([getUrl(searchTerm,0)]);
  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [],page:0, isLoading: false, isError: false }
  );

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const lastUrl = urls[urls.length - 1];
      const result = await axios.get(lastUrl);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload:{
          list:result.data.hits,
          page:result.data.page,
        },
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [urls]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    handleSearch(searchTerm,0);

    event.preventDefault();
  };

  const handleLastSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    handleSearch(searchTerm,0);
  };

  const handleSearch = (searchTerm,page) => {
    const url = getUrl(searchTerm,page);
    setUrls(urls.concat(url));
  };

  const handleMore = () => {
    const lastUrl = urls[urls.length - 1];
    const searchTerm = extractSearchTerm(lastUrl);
    handleSearch(searchTerm, stories.page + 1);
  }
  const lastSearches = getLastSearches(urls);

  return (
    <div>
      <h1>Usando Paginated</h1>
      <SearchForm searchTerm={searchTerm} onSearchInput={handleSearchInput} onSearchSubmit={handleSearchSubmit}/>
      <LastSearches lastSearches={lastSearches} onLastSearch={handleLastSearch} />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      <List list={stories.data} onRemoveItem={handleRemoveStory} />
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <button type='button' onClick={handleMore}>More</button>
      )}
    </div>
  );
};
// Build Process
/*
-> npm run build {
  This creates a new build/ folder in your project with the bundled application. You could take this
  folder and deploy it on a hosting provider now, but we’ll use a local server to mimic this process
  before engaging in the real thing.
}
-> npm install -g http-server { install an HTTP server on your machine}
-> http-server build/ { Next, serve your application with this local HTTP server}

Other
-> npx http-server build/ {The process can also be done on demand with a single command}

Deploy to Firebase

-> npm install -g firebase-tools {Using a global installation of the Firebase CLI lets us deploy 
  applications without concern over project dependency. 
  For any globally-installed node package, remember to update it to a newer
  version with the same command as often as you can
}
-> firebase login {If you don’t have a Firebase project yet, sign up for a Firebase account²⁶⁰ 
  and create a new project there.
  Then you can associate the Firebase CLI with the Firebase account (Google account)
}
-> firebase init { Next, move to the project’s folder and execute the following command,
  which initializes a Firebase project for the Firebase hosting features:
}
-> firebase deploy { Finally, deploy your React application with Firebase in
the command line
}
*/
export default App;



