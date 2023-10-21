import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/auth/userSlice'
import chatSlice from "./features/videoCall/chatSlice";

const store = configureStore({
    reducer:{
        user : userReducer,
       chat : chatSlice
    },
 })

 export default store;

