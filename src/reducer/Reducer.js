import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

//Thunk function

export const fetchTodos = createAsyncThunk("todos/fetchToDos", async() => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response;
});

const todoSlice = createSlice({
  name: "TodoApp",
  initialState:{
    entities:[],
  },
  reducers: {

  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.entities.push(action.payload);
      });
  },
});

export const fetchToDos = todoSlice.actions;

export default todoSlice.reducer;
