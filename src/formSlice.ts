import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './app/store';

export interface FormState {
  title: string;
  description: string;
}

const initialState: FormState = {
  title: '',
  description: ''
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  // reducers are everything that touches state, the actions/reducers that modify it (state) 
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    }
  }
});

export const { setTitle, setDescription } = formSlice.actions;

export default formSlice.reducer