import { useSelector } from 'react-redux';
const { userAuthSelector } = require("redux/user/userSelectors");

const useAuth = () => { 
    const isLogIn = useSelector(userAuthSelector.selectIsLogIn);
        
    const profile = useSelector(userAuthSelector.selectUserProfile);
    return { isLogIn, profile };
};
export default useAuth;