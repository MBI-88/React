import React, { ChangeEvent, MouseEvent } from "react";

// Component


const FormUncontrol = () => {
    const [values, setValues] = React.useState({ firstName: '', lastName: '' })
    const handleChange = ({ target: { name, value } }) => {
        setValues(
            { ...values, [name]: value }
        )
    }
    const handleSubmit = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" onChange={handleChange} />
            <input type="text" name='lastName' onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

const FormControl = () => {
    const [values,setValues] = React.useState({firstName:'nombre',lastName:'apellido'})
    const handleChange = ({target:{name,value}}) => {
        setValues({
           ...values,[name]:value
        })
    }
    const handleSubmit = (e:MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(`${values.firstName}--${values.lastName}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
            <input type="text" name='lastName' value={values.lastName} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}

// Handling Events

export  { FormControl, FormUncontrol }