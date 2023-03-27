import React from "react";

interface cardProps {
    id: number,
    key: number,
    title: string,
    description: string,
    deleteIdea: Function
}

const Card = (props: cardProps) => {

    const {id, title, description, deleteIdea} = props

    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button onClick={() => deleteIdea(id)}>🗑️</button>
        </div>
    )
}

export default Card