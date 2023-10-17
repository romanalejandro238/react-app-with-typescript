import { useState } from "react"
import { Sub } from "../subs_interface.tsx"


interface FormState{
    inputValues: Sub

}

interface FormProps{
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}

const Form = ({onNewSub} : FormProps) =>{

    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick:'',
        subMonth: 0,
        avatar:'',
        description:''

    })

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onNewSub(subs =>([...subs, inputValues]))
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputValues({
            ...inputValues,[e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="Nick"></input>
                <input onChange={handleChange} value={inputValues.subMonth} type="number" name="subMonth" placeholder="SubMonth"></input>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="Avatar"></input>
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="Description"></textarea>
                <button>Save sub</button>
            </form>
        </div>
    )
}

export default Form