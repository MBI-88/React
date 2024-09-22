import React from "react";

// Component

interface Props {
    id:number,
    task:string,
    handleDelete:any
}

const Task: React.FC<Props> = ({id,task,handleDelete}) => {
    React.useEffect(() => {
        console.log('Render <Task />',task)
    })
    return (
        <li>{task} <button type="button" onClick={() => handleDelete(id)}> X </button>
        </li>
    )
}

export default React.memo(Task)