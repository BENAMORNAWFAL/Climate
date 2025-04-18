import React, { useEffect,useState } from 'react'
import '../assets/Css/Welcome_Aboard.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import backgroundImage from '../assets/Animations/mail-sent-animate.svg';
import Scroll from './Scroll';




const Welcome_Aboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <content>
            <AppNavbar textColor="#2B1344"  />
            <Scroll NumOfSections='4'/>

            <section className=' welcome_top_page ' id='section1'>
                <div className='bg-welcome-text'>
                    <div className='flex-1'>
                        <h6>Welcome</h6>
                        <h1>Start Your Journey</h1>
                    </div>
                    <div className='flex-1 '>
                        <p>Thank you for joining our community! We're excited to have you on board and look forward to helping you navigate your career in the climate industry.</p>
                        <span className='row align-items-center justify-content-center gap-2'>
                            <Link className='btn first-btn-welcome'>Learn More</Link>
                            <Link className='btn second-btn-welcome'> Share</Link>
                        </span>
                    </div>
                </div>
            </section>
            {/* ******************************************************************************************** */}
            <div className='welcome_page'>
                <section className=' row gap-5 align-items-center w-100' id='section2'>
                    <div className='flex-1 d-flex flex-column gap-4'>
                        <img className='welcome_icon' src="src/assets/Icons/icons8-qr-code-64.png" alt="" />
                        <span>
                            <h1 style={{ margin: 0 }}>Welcome aboard! Here are the next steps to follow after signing up.</h1>
                            <p>Please check your email for the QR code that has been sent to you. This QR code can be shared with your co-workers.</p>
                        </span>
                    </div>
                    <div className='flex-1'>
                        <img src="src/assets/Animations/qr-code-animate.svg" class="image_welcome" alt="..." />
                    </div>
                </section>
                {/* ******************************************************************************************** */}
                <section className='section-bg-welcome w-100' id='section3' >
                    <div style={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(10px)',
                        zIndex: -1,
                        
                    }} />
                    <h1>Welcome to Climate: The Experiment</h1>
                    <p>As a new member, you now have access to exclusive content and benefits</p>
                    <span className='row gap-1 align-items-center justify-content-center w-100'>
                        <input className='form-control' type="text" placeholder='Your Email address' />
                        <button type='submit' className='btn first-btn-welcome'> Join Now </button>
                    </span>
                    <p>By clicking Sign Up, you confirm that you agree with our Terms and Conditions</p>

                </section>
                {/* *********************************************************************************************** */}
                <section className='d-flex flex-column align-items-center w-100' id='section4'>

                    
                        <div className='d-flex gap-0 flex-column text-center'>
                            <h5>Connect</h5>
                            <h1>Get in Touch</h1>
                            <p>Have a question? We're here to help!</p>
                        </div>

                        <form action="" method="post" className='width-form-welcome '>
                            <div class="mb-3 W-100">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" name='name' class="form-control w-100" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter your message...' rows="4"></textarea>
                            </div>

                            <div class=" d-flex flex-column align-items-center gap-2" >
                                <div class=" d-flex gap-2">
                                    <input type="checkbox" value="" id="flexCheckDefault" />
                                    <label for="flexCheckDefault">
                                        I agree to the Terms
                                    </label>
                                </div>
                                <div className='d-flex flex-column'>
                                    <button type='submit' className='btn first-btn-welcome'>Submit</button>
                                </div>
                            </div>

                        </form>

                    

                </section>
            </div>
            <Footer FooterColor="#2B1344" FooterTxTColor="#fff" />
        </content>
    )
}




export default Welcome_Aboard