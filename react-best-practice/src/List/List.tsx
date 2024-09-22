import React from "react";
import Task from "../Task/Task.tsx";


// Component

export type Todo = {
    id: number,
    task: string
}
interface Props {
    todolist: Todo[],
    handleDelete:any
}

const List:React.FC<Props> = ({todolist,handleDelete}) => {

    React.useEffect(() =>{
        console.log('Rendering <List />')
    })
    return (
        <ul>
            {todolist.map((item:Todo) => (
                <Task key={item.id} id={item.id} task={item.task} handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default React.memo(List)