import { clear } from "console";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setTitle, setDescription } from './formSlice';

interface formProps {
    addIdea: Function,
    name: string
}

const Form = (props: formProps) => {

    // const {title, setTitle} = useState('')

    const { title, description } = useAppSelector(state => state.form)

    const dispatch = useAppDispatch()

    const handleClick = (e: any): void => {
        e.preventDefault()
        const newIdea = {
            id: Date.now(),
            title,
            description
        }
        props.addIdea(newIdea)
        clearInputs()
    }

    const clearInputs = (): void => {
        dispatch(setTitle(''))
        dispatch(setDescription(''))
    }

    return (
        <form>
            <input
                placeholder="title"
                type='text'
                // name='title'
                value={title}
                onChange={e => dispatch(setTitle(e.target.value))}
            />
            <input
                placeholder="description"
                type='text'
                // name='description'
                value={description}
                onChange={e => dispatch(setDescription(e.target.value))}
            />
            <button onClick={e => handleClick(e)}>Submit</button>
        </form>
    )
}

export default Form