import { useState } from "react";

const useForm = (initialForm= {})=>{
    const [formState, setFormState] = useState(initialForm)
    const onInputChange = ({target})=>{
        const {name, value}=target

        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onResetForm = ({target})=>{
        setFormState(initialForm)
    }
    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

export {useForm}