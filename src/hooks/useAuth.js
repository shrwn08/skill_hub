import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export function useAuth(){
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const login = (email, password) =>dispatch();

    const register = (formData) => dispatch();

    const signOut = () => {
        dispatch();
        navigate("/");
    }

    const updateProfile= (updates) => dispatch=();

    const changePassword = (password)=>dispatch();

    const clearError = () => dispatch();

    return {login, register, signOut, updateProfile, changePassword, clearError};
}