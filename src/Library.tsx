import React from "react";
import Card from "./Card";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setIdeas, setStatus } from './appSlice'

interface Idea {
    id: number;
    title: string;
    description: string;
  }


const Library = () => {

    const { ideas } = useAppSelector(state => state.app)
    const ourIdeas = ideas.map((idea: Idea): JSX.Element => {
        return (
            <Card id={idea.id} key={idea.id} title={idea.title} description={idea.description}/>
        )
    })

    return (
        <div>
            {ourIdeas}
        </div>
    )
}

export default Library