import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './app/store';

export interface AppState {
  ideas: [];
  fetching: boolean;
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
    }
  } 
});

export const { setIdeas, setStatus } = appSlice.actions;

export default appSlice.reducer