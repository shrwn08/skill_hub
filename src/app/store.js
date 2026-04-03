import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import mentorsReducer   from "../features/mentors/mentorSlice";
import ideasReducer from "../features/ideas/ideasSlice"
import progressReducer from "../features/progress/progressSlice"
import bookmarksReducer from "../features/bookmarks/bookmarksSlice"
import sessionsReducer from "../features/sessions/sessionsSlice"

export const store = configureStore({
    reducer : {
        auth : authReducer,
        mentors : mentorsReducer,
        ideas   :  ideasReducer,
        progress:  progressReducer,
         bookmarks: bookmarksReducer,
         sessions:  sessionsReducer,
    }
});