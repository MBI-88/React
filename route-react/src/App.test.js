import { render,screen,fireEvent,act } from '@testing-library/react';
import * as React from 'react'
import axios  from 'axios';
import App,{storiesReducer,InputWithLabel,Item,List,SearchForm}  from './App';


/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

// Test case

/*
describe('Describe some test',() => {
  test('true to be true',() => {
    expect(true).toBeTruthy()
  })
  test('false to be false', () => {
    expect(false).toBeFalsy()
  })
})
*/ 

// Unit Testing: Functions

/*
const storyOne = {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
}
const storyTwo = {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
};

const stories = [storyOne,storyTwo]

describe('storieReducer', () => {
  test('remove one history from all history',() => {
    const action = { type:'REMOVE_STORY', payload: storyOne }
    const state = {data:stories,isLoading:false,isError:false}
    
    const newState = storiesReducer(state,action)
    const expectState = {
      data: [storyTwo],
      isLoading:false,
      isError:false
    }
    //expect(newState).toBe(expectState) fail because probe (===) reference
    expect(newState).toStrictEqual(expectState)

  })
})
*/

// Unit Testing: Components

/*
describe('Item',() => {
  test('renders all properties', () => {
    render(<Item item={storyOne} />)
    expect(screen.getByText('Jordan Walke')).toBeInTheDocument()
    expect(screen.getByText('React')).toHaveAttribute('href','https://reactjs.org/')
  })
  test('render a clickable dismiss button', () => {
    render(<Item  item={storyOne} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  test('clicking the dismiss button calls the callback', () => {
    const handlerRemoveItem = jest.fn()
    render(<Item item={storyOne} onRemoveItem={handlerRemoveItem} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handlerRemoveItem).toHaveBeenCalledTimes(1)
  })
})

describe('SearchForm', () => {
  const searchFormProps = {
    searchTerm: 'React',
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn(),
    classState: 'isShort'
  }
  test('renders the input field with its value',() => {
    render(<SearchForm {...searchFormProps}/>)
    expect(screen.getByDisplayValue('React')).toBeInTheDocument()
  })
  test('renders the correct label', () => {
    render(<SearchForm {...searchFormProps} />)
    expect(screen.getByLabelText(/Search/)).toBeInTheDocument()
  })
  test('calls onSearchInput on input field change', () => {
    render(<SearchForm {...searchFormProps} />);
    fireEvent.change(screen.getByDisplayValue('React'), {
      target: { value: 'Redux' },
    })
    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
  })
  test('calls onSearchSubmit on button submit click', () => {
    render(<SearchForm {...searchFormProps} />)
    fireEvent.submit(screen.getByRole('button'))
    expect(searchFormProps.onSearchSubmit).toBeCalledTimes(1)
  })
})
*/

// Integration Testing: Component

/*
const storyOne = {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
}
const storyTwo = {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
};

const stories = [storyOne,storyTwo]

jest.mock('axios')

describe('App', () => {
  test('succeeds fetching data', async () => {
    const promise = Promise.resolve({
      data: {
        hits: stories,
      },
    });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    expect(screen.queryByText(/Loading/)).toBeInTheDocument();

    await act(() => promise);

    expect(screen.queryByText(/Loading/)).toBeNull();

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getAllByText('Dismiss').length).toBe(2);
  });
  
  test('fails fetching data', async () => {
    const promise = Promise.reject();

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    try {
      await act(() => promise);
    } catch (error) {
      //expect(screen.queryByText(/Loading/)).toBeCalled();
     // expect(screen.queryByText(/went wrong/)).toBeInTheDocument();
    }
  });

  test('removes a story', async () => {
    const promise = Promise.resolve({
      data: {
        hits: stories,
      },
    });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    await act(() => promise);

    expect(screen.getAllByText('Dismiss').length).toBe(2);
    expect(screen.getByText('Jordan Walke')).toBeInTheDocument();

    fireEvent.click(screen.getAllByText('Dismiss')[0]);

    expect(screen.getAllByText('Dismiss').length).toBe(1);
    expect(screen.queryByText('Jordan Walke')).toBeNull();
  });

  test('searches for specific stories', async () => {
    const reactPromise = Promise.resolve({
      data: {
        hits: stories,
      },
    });

    const anotherStory = {
      title: 'JavaScript',
      url: 'https://en.wikipedia.org/wiki/JavaScript',
      author: 'Brendan Eich',
      num_comments: 15,
      points: 10,
      objectID: 3,
    };

    const javascriptPromise = Promise.resolve({
      data: {
        hits: [anotherStory],
      },
    });

    axios.get.mockImplementation((url) => {
      if (url.includes('React')) {
        return reactPromise;
      }
      if (url.includes('JavaScript')) {
        return javascriptPromise;
      }

      throw Error();
    });

    render(<App />);

    await act(() => reactPromise);

    expect(screen.queryByDisplayValue('React')).toBeInTheDocument();
    expect(screen.queryByDisplayValue('JavaScript')).toBeNull();

    expect(screen.queryByText('Jordan Walke')).toBeInTheDocument();
    expect(
      screen.queryByText('Dan Abramov, Andrew Clark')
    ).toBeInTheDocument();
    expect(screen.queryByText('Brendan Eich')).toBeNull();

    fireEvent.change(screen.queryByDisplayValue('React'), {
      target: {
        value: 'JavaScript',
      },
    });

    expect(screen.queryByDisplayValue('React')).toBeNull();
    expect(
      screen.queryByDisplayValue('JavaScript')
    ).toBeInTheDocument();

    fireEvent.submit(screen.queryByText('Submit'));

    await act(() => javascriptPromise);

    expect(screen.queryByText('Jordan Walke')).toBeNull();
    expect(
      screen.queryByText('Dan Abramov, Andrew Clark')
    ).toBeNull();
    expect(screen.queryByText('Brendan Eich')).toBeInTheDocument();
  });
  
});
*/

// Snapshot Testing

describe('SearchForm', () => {
  const searchFormProps = {
    searchTerm: 'React',
    onSearchInput: jest.fn(),
    onSearchSubmit: jest.fn(),
    classState: 'isShort'
  }
  test('renders the input field with its value',() => {
    render(<SearchForm {...searchFormProps}/>)
    expect(screen.getByDisplayValue('React')).toBeInTheDocument()
  })
  test('renders the correct label', () => {
    render(<SearchForm {...searchFormProps} />)
    expect(screen.getByLabelText(/Search/)).toBeInTheDocument()
  })
  test('calls onSearchInput on input field change', () => {
    render(<SearchForm {...searchFormProps} />);
    fireEvent.change(screen.getByDisplayValue('React'), {
      target: { value: 'Redux' },
    })
    expect(searchFormProps.onSearchInput).toHaveBeenCalledTimes(1);
  })
  test('calls onSearchSubmit on button submit click', () => {
    render(<SearchForm {...searchFormProps} />)
    fireEvent.submit(screen.getByRole('button'))
    expect(searchFormProps.onSearchSubmit).toBeCalledTimes(1)
  })
  test('render snapshot', () => {
    const {container} = render(<SearchForm {...searchFormProps}/>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
