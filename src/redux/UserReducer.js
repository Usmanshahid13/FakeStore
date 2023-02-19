import {createSlice} from "@reduxjs/toolkit";


export const UserReducer=createSlice({
    name:"user",
    initialState:{
      loading:false,
      userinfo:{},
      userToken:null,
      success:false,
    },
    reducers:{
        login:(state,action)=>{
            state.userToken=action.payload
        },
        logout:(state)=>{
            state.userToken=null
        }
    }

});
export const {login,logout}=UserReducer.actions;
export default UserReducer.reducer;