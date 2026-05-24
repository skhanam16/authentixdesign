import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getUserFromLocalStorage = () =>{
    // id user does not exit then simple return null
    return JSON.parse(localStorage.getItem('user')) || null;
}

const initialState ={
    user: getUserFromLocalStorage(),
    // theme: 'halloween',
}



const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginUser: (state, action) =>{
            // console.log(action.payload);
            // const {user, jwt} = action.payload;
            const user = {...action.payload.user, token:action.payload.jwt};
            //set our state
            state.user = user;
            // stringify user object
            localStorage.setItem('user', JSON.stringify(user));
            // console.log(jwt);
            
        },
        logoutUser: (state) => {
           state.user = null;
           localStorage.removeItem('user');
        toast.success('Logged out successfully');

        },
        toggleTheme: (state) => {
 console.log('toggletheme');
        }

    }
});

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions;
export default userSlice.reducer;