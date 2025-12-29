import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'




export default configureStore({
  // step 6 that is adding reducers back to store 
  reducer: todoReducer// todoReduceris an object already 
});