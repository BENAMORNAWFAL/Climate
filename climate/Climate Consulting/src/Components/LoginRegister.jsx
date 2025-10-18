import React, { useState, useEffect } from 'react'
import '../assets/Css/LoginRegister.css'
import { FaUserGraduate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";




const LoginRegister = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    }

    const loginLink = () => {
        setAction('');
    }

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const spans = Array.from({ length: 60 }, (_, index) => (
        <span key={index} style={{ '--i': `${Math.floor(Math.random() * 20) + 10}` }}></span>
      ));

    return (

        <div className="body_page" style={{ '--height--screen': `${height}px` }}>
            <div className="bubbles" >{spans}</div>
            <div className={`wrapper ${action} `}>
                <div className='form-box login'>
                    <form action="" method='post' >
                        <h1>Login</h1>
                        <div className='lab-inp'>
                            <input type="text" placeholder='Email ' required />
                            <MdAlternateEmail className='log_icons' />
                        </div>

                        <div className='lab-inp'>
                            <input type="password" placeholder='Password ' required />
                            <FaLock className='log_icons' />
                        </div>
                        <div className='remember-forgot'>

                            <label htmlFor="remember_me"><input type="checkbox" />Remember me </label>
                            <a href="/password_forgot">Forgot Password?</a>

                        </div>
                        <button type='submit' className='btn btn-submit'>Login</button>
                        <div className='register-link'>
                            <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a> </p>
                        </div>
                    </form>

                </div>

                <div className='form-box register'>
                    <form action="" method='post' >
                        <h1>Registration</h1>
                        <div className='lab-inp'>
                            <input type="text" placeholder='First Name ' required />
                            <FaUserGraduate className='log_icons' />
                        </div>
                        <div className='lab-inp'>
                            <input type="text" placeholder='Last Name ' required />
                            <FaUserGraduate className='log_icons' />
                        </div>
                        <div className='lab-inp'>
                            <input type="text" placeholder='Email ' required />
                            <MdAlternateEmail className='log_icons' />
                        </div>
                        <div className='lab-inp'>
                            <input type="text" placeholder='Confirm Email ' required />
                            <MdAlternateEmail className='log_icons' />
                        </div>

                        <div className='lab-inp'>
                            <input type="password" placeholder='Password ' required />
                            <FaLock className='log_icons' />
                        </div>
                        <div className='lab-inp'>
                            <input type="password" placeholder='Confirm Password ' required />
                            <FaLock className='log_icons' />
                        </div>
                        <div className='remember-forgot'>

                            <label htmlFor="remember_me"><input type="checkbox" required/>I agree to the terms & conditions </label>


                        </div>
                        <button type='submit' className='btn btn-submit'>Register</button>
                        <div className='register-link'>
                            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a> </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginRegister