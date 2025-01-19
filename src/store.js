import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducer/Reducer';

const store = configureStore({
  reducer:{
    todo:todoReducer
  },
  //using thunk so here we use middeleware
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
      serializableCheck:false
    })
})

export default store;
