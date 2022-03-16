import React from 'react';


// import logins from '../../img/preview.jpg';
// import { AiFillGoogleCircle, AiOutlineLogin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { AiTwotoneLock } from "react-icons/ai";


// import './Login.css'

import { useState } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

    useLocation,
    useHistory
} from "react-router-dom";

import useAuth from './useAuth';
// import { ExitToApp, GolfCourseTwoTone, NearMe } from '@material-ui/icons';


const Login = () => {
    const { loginInUser, loading, error, user, googleLogin } = useAuth()

    const [loginDate, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginDate }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }




    const handleOnSubmit = (e) => {
        e.preventDefault()
        loginInUser(loginDate.email, loginDate.password, location, history)

    }

    const handleGoogleLogin = () => {
        googleLogin(location, history)
    }



    return (
        //     <div style={{background:'',width:'100%',height:'100%'}} className="">
        //     <div className='   d-flex justify-content-center align-items-center '>
        //         <div className=' fs-5'>
        //             <div className='row '>
        //                 <div className=' my-4 '>
        //                     <Card
        //                         style={{ width: '24rem' }} className='shad p-3 '>
        //                         <h2 className='fw-bolder'>Login</h2>
        //                         <div>
        //                             <button
        //                                 className='btn btn-primary  mt-1 m-0 p-0 w-100 '
        //                                 onClick={handleGoogleLogin}
        //                             > <AiFillGoogleCircle className='fs-1 me-3 text-white bg-primary'></AiFillGoogleCircle>  LogIn With  Google</button>
        //                         </div>
        //                         <hr className='style-eight'/>

        //                         <form onSubmit={handleOnSubmit}>
        //                         <div className="mb-3 text-start">
        //                             <input
        //                                 name='email'
        //                                 type="email" className="form-control rounded-3" id="exampleInputEmail1"
        //                                 onChange={handleOnChange}
        //                                 placeholder='Type Your Email'
        //                                 aria-describedby="emailHelp" />
        //                         </div>
        //                         <div className="mb-3 text-start">
        //                             <input
        //                                 name='password'
        //                                 placeholder='Type Your Password'
        //                                 type="password" className="form-control rounded-3"
        //                                 onChange={handleOnChange}
        //                                 id="exampleInputPassword1" />
        //                         </div>
        //                         <div className="text-start mt-1">
        //                             <button
        //                                 className='btn btn-primary  m-0 p-0 w-100 '
        //                                 type='submit'
        //                             >
        //                                 <AiOutlineLogin className='fs-1  text-white bg-primary me-3'></AiOutlineLogin>
        //                                 Login</button>
        //                         </div>


        //                         <Card
        //                             style={{ width: '22rem' }} className=' '>
        //                             <NavLink
        //                                 style={{ textDecoration: 'none' }}
        //                                 to='/register'><p className='text-dark'
        //                                 >New User?Please  <em className='text-primary text-decoration-underline fw-bolder '>Register</em> </p>
        //                             </NavLink>
        //                         </Card>

        //                         <hr />


        //                         </form>
        //                         {loading && <div>
        //                             <div class="spinner-grow text-dark" role="status">
        //                                 <span class="visually-hidden">Loading...</span>
        //                             </div><div class="spinner-grow text-dark" role="status">
        //                                 <span class="visually-hidden">Loading...</span>
        //                             </div>
        //                         </div>}
        //                         {user?.email &&
        //                             <div class="alert alert-primary" role="alert">
        //                                 User Created SuccessFulyy
        //                             </div>
        //                         }
        //                         {error &&
        //                             <div class="alert alert-warning" role="alert">
        //                                 {error}
        //                             </div>
        //                         }
        //                     </Card>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div>

            <div className="loginimage">

                <div class="containerlogin">

                    <div class="screen">
                        <div class="screen__content">

                            <form onSubmit={handleOnSubmit} class="login">
                                <div class="social-login">
                                    <h3 className='text-dark'>Sign In WIth Google</h3>
                                    <button className='social-icons text-dark button-23' onClick={handleGoogleLogin}>
                                        Sign In <FcGoogle className='fs-1'></FcGoogle>

                                    </button>
                                </div>
                                <div class="login__field">
                                    <FiUserPlus></FiUserPlus>
                                    <input
                                        name='email'
                                        type="email" id="exampleInputEmail1"
                                        onChange={handleOnChange}
                                        placeholder='Type Your Email'
                                        class="login__input" />
                                </div>
                                <div class="login__field">
                                    <AiTwotoneLock></AiTwotoneLock>
                                    <input
                                        name='password'
                                        placeholder='Type Your Password'
                                        type="password"
                                        onChange={handleOnChange}
                                        class="login__input" />
                                </div>


                                <button class="button login__submit my-5 ">
                                    <span class="button__text">Login Now</span>
                                    <i class="button__icon fa fa-sign-in fs-5"></i>
                                </button>
                            </form>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/register'><p className='text-dark'
                                >New User?Please  <em className='text-primary text-decoration-underline fw-bolder '>Register</em> </p>
                            </NavLink>


                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
                {loading && <div>
                    <div class="spinner-grow text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div><div class="spinner-grow text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>}
                {user?.email &&
                    <div class="alert alert-primary" role="alert">
                        User Created SuccessFulyy
                    </div>
                }
                {error &&
                    <div class="alert alert-warning" role="alert">
                        {error}
                    </div>
                }
            </div>
        </div>


































        // <div className="bg-success">
        //     <div className=' 
        //  d-flex justify-content-center align-items-center
        // ba fs-5 '>
        //         <Card
        //             style={{ width: '24rem', height: '250px' }} className=' p-3  '>
        //             <div
        //                 className=' '>
        //                 <h2>Login</h2>
        //                 <form
        //                     onSubmit={handleOnSubmit}>
        //                     <div className="mb-3 text-start">
        //                         <input
        //                             name='email'
        //                             type="email" className="form-control" id="exampleInputEmail1"
        //                             onChange={handleOnChange}
        //                             placeholder='Type Your Email'
        //                             aria-describedby="emailHelp" />
        //                     </div>
        //                     <div className="mb-3 text-start">
        //                         <input
        //                             name='password'
        //                             placeholder='Type Your Password'
        //                             type="password" className="form-control"
        //                             onChange={handleOnChange}
        //                             id="exampleInputPassword1" />
        //                     </div>
        //                     <div className="text-start mt-1">
        //                         <button
        //                             className='btn btn-primary  m-0 p-0 w-100 py-1'
        //                             type='submit'
        //                         >
        //                             Login</button>
        //                     </div>


        //                     <Card
        //                         style={{ width: '22rem' }} className=' '>
        //                         <NavLink
        //                             style={{ textDecoration: 'none' }}
        //                             to='/register'><p className='text-dark'
        //                             >New User?Please  <em className='text-primary text-decoration-underline fw-bolder '>Register</em> </p>
        //                         </NavLink>
        //                     </Card>

        //                     <hr />
        //                     <button

        //                         className='btn btn-primary my-3  mt-1 m-0 p-0 w-100 py-1'
        //                         onClick={handleGoogleLogin}
        //                     >

        //                         LogIn With  Google </button>

        //                     {loading && <div>
        //                         <div class="spinner-grow text-dark" role="status">
        //                             <span class="visually-hidden">Loading...</span>
        //                         </div><div class="spinner-grow text-dark" role="status">
        //                             <span class="visually-hidden">Loading...</span>
        //                         </div>
        //                     </div>}
        //                     {user?.email &&
        //                         <div class="alert alert-success" role="alert">
        //                             User Created SuccessFulyy
        //                         </div>
        //                     }
        //                     {error &&
        //                         <div class="alert alert-warning" role="alert">
        //                             {error}
        //                         </div>
        //                     }


        //                 </form>


        //             </div>
        //         </Card>

        //     </div>
        // </div>
    );
};

export default Login;