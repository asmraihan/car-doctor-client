import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext)

    const location = useLocation()

    if(loading){
        return <progress className="progress w-56 h-10 bg-orange-600 absolute top-[42vh] left-[42vw]"></progress>
    }

    if(user?.email){
        return children
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;