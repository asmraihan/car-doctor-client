import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

    const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log( email, password)
        signIn(email, password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=> console.log(error))
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-md border-2 rounded-md bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-accent" />
                            </div>
                        </form>
                        <div>
                            <p className='text-center my-4'>Or Sign in with</p>
                            <div className='flex justify-center items-center gap-4'>
                                <Link className='bg-zinc-200 p-2 rounded-full'><FaFacebook className='text-blue-700 w-6 h-6'></FaFacebook></Link>
                                <Link className='bg-zinc-200 p-2 rounded-full'><FaLinkedin className='text-blue-500 w-6 h-6'></FaLinkedin></Link>
                                <Link className='bg-zinc-200 p-2 rounded-full'><FaGoogle className='text-blue-600 w-6 h-6'></FaGoogle></Link>
                               
                            </div>
                        </div>
                        <p className='text-center my-4'>New to Car Doctors? <Link className='text-orange-600 font-semibold' to='/register'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;