import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import mentorsReducer   from "../features/mentors/mentorSlice";

export const store = configureStore({
    reducer : {
        auth : authReducer,
        mentors : mentorsReducer,
    }
});