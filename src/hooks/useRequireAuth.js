import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



export function useRequireAuth(redirectTo = "/login"){
    const isLoggedIn = useSelector();
    const initialized = useSelector();
    const navigate = useNavigate();

    useEffect(()=>{
        if(initialized && !isLoggedIn)
            navigate(redirectTo,{replace : true});
    },[isLoggedIn, initialized, navigate, redirectTo]);

    return {isLoggedIn, initialized};
}