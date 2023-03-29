import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './app/store';

export interface AppState {
  ideas: Array<Idea>;
  fetching: boolean;
}

interface Idea {
  id: number;
  title: string;
  description: string;
}

const initialState: AppState = {
  ideas: [],
  fetching: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState, 
  reducers: {
    setIdeas: (state, action: PayloadAction<any>): void => {
        state.ideas = action.payload
    },
    setStatus: (state, action: PayloadAction<boolean>): void => {
        state.fetching = action.payload
    },
    addIdea: (state, action: PayloadAction<Idea>): void => {
      state.ideas = [...state.ideas, action.payload]
   },
    deleteIdea: (state, action: PayloadAction<number>): void => {
      state.ideas = state.ideas.filter((idea: Idea): boolean => idea.id !== action.payload)
  }
}
});

export const { setIdeas, setStatus, addIdea, deleteIdea } = appSlice.actions;

export default appSlice.reducer