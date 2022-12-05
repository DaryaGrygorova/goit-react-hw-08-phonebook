import { useAppSelector } from "./hooksConfig";

const useAuth = () => { 
    const isLogIn = useAppSelector((state) => state.user.isLogIn);
    const profile = useAppSelector((state) => state.user.profile);
    const isError = useAppSelector((state) => state.user.error);
        
    return { isLogIn, profile, isError };
};
export default useAuth;