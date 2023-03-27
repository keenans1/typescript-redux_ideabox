import React from "react";
import Card from "./Card";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setIdeas, setStatus } from './appSlice'

// interface libraryProps {
//   deleteIdea: Function
// }0

const Library = () => {

    const { ideas } = useAppSelector(state => state.app)

    const dispatch = useAppDispatch()

    const deleteIdea = (id: number): void => {
        const updatedIdeas: Object[] = ideas.filter((idea: { id: number, title: string, description: string }) => idea.id !== id)
    
        dispatch(setIdeas(updatedIdeas))
      }

    const ourIdeas = ideas.map((idea: {id: number, title: string, description: string}) => {
        return (
            <Card id={idea.id} key={idea.id} title={idea.title} description={idea.description} deleteIdea={deleteIdea}/>
        )
    })

    return (
        <div>
            {ourIdeas}
        </div>
    )
}

export default Library