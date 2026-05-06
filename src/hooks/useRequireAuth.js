import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectInitialized, selectIsLoggedIn } from "../features/auth/authSlice";



export function useRequireAuth(redirectTo = "/login"){
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const initialized = useSelector(selectInitialized);
    const navigate = useNavigate();

    useEffect(()=>{
        if(initialized && !isLoggedIn)
            navigate(redirectTo,{replace : true});
    },[isLoggedIn, initialized, navigate, redirectTo]);

    return {isLoggedIn, initialized};
}