
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";


const initialState = {
    status: "",
    error: "",
    messages: [],
    notifications: [],
    
  };



  export const sendMessage = createAsyncThunk(
    "message/send",
    async (msg) => {
      
      try {
      let data =  await  axios.post('http://localhost:80/chat/652bb01df5b74b6f83bf0b97',
        msg, {
         headers: {
           'Content-Type': 'application/json',
         },
    })
      
        return data;
      } catch (error) {
        console.log(error);
        return;
      }
    }
  );


  export const getConversationMessages = createAsyncThunk(
    "message/get",
    async () => {
        try {
      const response = await axios.get('http://localhost:80/chat/652bb01df5b74b6f83bf0b97')

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('cannot send msg');
    }
      
    }
  );



  export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {

      updateMessagesAndConversations: (state, action) => {
        //update messages
        let convo = state.activeConversation;
        if (convo._id === action.payload.conversation._id) {
          state.messages = [...state.messages, action.payload];
        }
    }
    },
    extraReducers(builder) {
      builder
        .addCase(sendMessage.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.messages = [...state.messages, action.payload.data.data];
        })
        .addCase(sendMessage.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(sendMessage.rejected, (state, action) => {
          state.status = "failed";
        state.error = action.payload;
        })
        .addCase(getConversationMessages.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(getConversationMessages.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.messages = action.payload.data;
        })
        .addCase(getConversationMessages.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload
        })
    }
  })

  export const {updateMessagesAndConversations} = chatSlice.actions

export default chatSlice.reducer;
