import { useReducer } from "react"
import { Sub } from "../subs_interface.tsx"

const INITIAL_STATE = {
    nick:'',
    subMonth: 0,
    avatar:'',
    description:''
}

interface FormState{
    inputValues: Sub

}

type FormReducerAction = {
    type: "change_value"
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const formReducer = (state : FormState["inputValues"], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
            const{inputName, inputValue} = action.payload
            return {
                ...state, [inputName]:inputValue
            }
        case "clear":
            return INITIAL_STATE
    }
}

const useNewSubForm = () =>{
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm