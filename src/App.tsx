import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Library from './Library';
import getIdeas from './apiCall';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setIdeas, setStatus } from './appSlice'

const App = () => {
  // const [fetching, setFetch] = useState<Boolean>(false)
  // const [ideas, setIdeas] = useState<any>([])

  const { ideas, fetching } = useAppSelector(state => state.app)

  const dispatch = useAppDispatch()

  const getAllIdeas = (): void => {
    getIdeas()
      .then(data => dispatch(setIdeas(data)))
  }

  useEffect(() => {
    if (!fetching) {
      getAllIdeas()
      dispatch(setStatus(true))
    }
  }, [fetching])

  const addIdea = (newIdea: any): void => {
    dispatch(setIdeas([...ideas, newIdea]))
  }

  // const deleteIdea = (id: number): void => {
  //   const updatedIdeas: Object[] = ideas.filter((idea: { id: number, title: string, description: string }) => idea.id !== id)

  //   dispatch(setIdeas(updatedIdeas))
  // }

  return (
    <div className="App">
      <h1>Idea Box</h1>
      <Form addIdea={addIdea} name='adam'/>
      <Library />
    </div>
  )
}

export default App