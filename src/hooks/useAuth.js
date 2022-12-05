import { useSelector } from 'react-redux';
const { userAuthSelector } = require("redux/user/userSelectors");

const useAuth = () => { 
    const isLogIn = useSelector(userAuthSelector.selectIsLogIn);
    const profile = useSelector(userAuthSelector.selectUserProfile);
    const isError = useSelector(userAuthSelector.selectUserError);
        
    return { isLogIn, profile, isError };
};
export default useAuth;