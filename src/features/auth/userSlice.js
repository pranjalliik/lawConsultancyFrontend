import { createSlice } from '@reduxjs/toolkit';

const initialState = {

     name : '',
    email : '',
    role : '',
    id : ''

}

const userSlice = createSlice({
name : 'user',
initialState,
reducers : {
    updateName(state,action){
        state.name = action.payload
    },
    updatemail(state,action){
        state.email = action.payload
    },
    updateRole(state,action){
        state.role = action.payload
    },
     updateId(state,action){
        state.id = action.payload
    }
}
})

export const {updateName,updatemail,updateRole,updateId} = userSlice.actions

export default userSlice.reducer;

