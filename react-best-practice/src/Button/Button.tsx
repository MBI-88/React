import React from 'react' 

// Component

type Data = {
    handler: any
}

const Button:React.FC<Data> = ({handler}) => {

    return (
        <button type='button' onClick={handler} onDoubleClick={handler} >Click me!</button>
    )
}

export {Button}