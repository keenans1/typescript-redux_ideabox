import React from "react";
import { useAppDispatch, useAppSelector } from './app/hooks';
import { deleteIdea } from './appSlice'

interface cardProps {
    id: number,
    key: number,
    title: string,
    description: string
}

const Card = (props: cardProps) => {
    const {id, title, description } = props
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button onClick={() => dispatch(deleteIdea(id))}>🗑️</button>
        </div>
    )
}

export default Card