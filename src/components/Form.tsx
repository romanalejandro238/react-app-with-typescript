import { Sub } from "../subs_interface.tsx"
import useNewSubForm from "../hooks/useNewSubForm.tsx"




interface FormProps{
    onNewSub: (newSub: Sub) => void
}





const Form = ({onNewSub} : FormProps) =>{

    //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (e : React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onNewSub(inputValues)
        clearForms()
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target
        if(e.target.name === "subMonth"){
            if(parseInt(e.target.value) < 0){
                return
            }
        }
        dispatch({
            type:"change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })

        
    }

    const clearForms = () =>{
        dispatch({type:"clear"})
     }
 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="Nick"></input>
                <input onChange={handleChange} value={inputValues.subMonth} type="number" name="subMonth" placeholder="SubMonth"></input>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="Avatar"></input>
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="Description"></textarea>
                <button type="submit">Save sub</button>
                <button onClick={clearForms} type="button">Clear the form</button>
            </form>
        </div>
    )
}

export default Form