import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, selectAuthError, selectAuthStatus, selectInitialized, selectIsLoggedIn, selectUser } from "../features/auth/authSlice";


export function useAuth(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);
    const initialized = useSelector(selectInitialized);


    const login = (email, password) =>dispatch(loginUser(email, password));

    const register = (formData) => dispatch();

    const signOut = () => {
        dispatch();
        navigate("/");
    }

    const updateProfile= (updates) => dispatch();

    const changePassword = (password)=>dispatch();

    const clearError = () => dispatch();

    return {user, isLoggedIn, status, error, initialized, login, register, signOut, updateProfile, changePassword, clearError};
}