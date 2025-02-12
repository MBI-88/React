import React from "react";

// Component

type Note = {
    id: number,
    note: string,
}
type Action = {
    type: string,
    payload?: any,
}
type ActionType = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

const actionType: ActionType = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

const initialNotes: Note[] = [
    { id: 1, note: 'Note 1' }, { id: 2, note: 'Note 2' }
]

const reducer = (state: Note[], action: Action) => {
    switch (action.type) {
        case actionType.ADD:
            return [...state, action.payload]
        case actionType.DELETE:
            return state.filter(note => note.id !== action.payload)
        case actionType.UPDATE:
            const updatedNote = action.payload
            return state.map((n: Note) => n.id === updatedNote.id ?
                updatedNote : n)
        default:
            return state
    }
}

const Note = () => {
    const [notes, dispatch] = React.useReducer(reducer, initialNotes)
    const [note, setNote] = React.useState('')

    const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newNote = {
            id: Date.now(),
            note

        }
        dispatch({ type: actionType.ADD, payload: newNote })
    }

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map((n: Note) => (
                    <li key={n.id}>
                        {n.note} {'     '}
                        <button onClick={() => dispatch({type: actionType.DELETE,payload: n.id})}> X </button>
                        <button onClick={() => dispatch({type: actionType.UPDATE,payload: {...n,note}})}> Update
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder="New note" value={note} onChange={e => setNote(e.target.value)}/>
            </form>
        </div>
    )
}

export default Note