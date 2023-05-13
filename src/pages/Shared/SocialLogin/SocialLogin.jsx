
import { useContext } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=> console.log(error))
    }
    return (
        <div>
        <p className='text-center my-4'>Or Sign in with</p>
        <div className='flex justify-center items-center gap-5'>
            <Link className='bg-zinc-200 p-2 rounded-full'><FaFacebook className='text-blue-700 w-6 h-6'></FaFacebook></Link>
            <Link className='bg-zinc-200 p-2 rounded-full'><FaLinkedin className='text-blue-500 w-6 h-6'></FaLinkedin></Link>
            <Link onClick={handleGoogleSignIn} className='bg-zinc-200 p-2 rounded-full'><FaGoogle className='text-blue-600 w-6 h-6'></FaGoogle></Link>
           
        </div>
    </div>
    );
};

export default SocialLogin;