import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56 h-10 bg-orange-600 absolute top-[42vh] left-[42vw]"></progress>
    }

    if(user?.email){
        return children
    }

    return <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;