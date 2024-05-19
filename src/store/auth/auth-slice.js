import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'noteSlice',
  initialState: {
    auth:{
        user:null
    }
  },
  reducers: {
    setUser:(state, action)=>{
        state.auth.user = action.payload
    }
  }
});

export const authReducer = authSlice.reducer;
export const {setUser  } = authSlice.actions;
