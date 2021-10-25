import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';


// use Context in a function
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;