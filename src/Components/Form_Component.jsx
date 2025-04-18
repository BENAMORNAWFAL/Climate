import React, { useEffect , useState } from 'react'
import '../assets/Css/Form.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import backgroundImage from '../assets/Animations/moving-forward-animate.svg';
import Scroll from './Scroll';


const Form_Component = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div>
            <AppNavbar textColor="#621656" />
            <Scroll NumOfSections='4' />
            <section className=' form_top_page ' id='section1'>
                <div className='bg-form-text'>
                    <h1>Get Early Access</h1>
                    <p>Be the first to experience our groundbreaking climate solutions and receive <br /> exclusive benefits.</p>
                </div>
            </section>
            {/* ******************************************************************************************** */}
            <div className='form_page'>
                <section className='w-100 row align-items-center gap-5' id='section2'>

                    <div className='flex-1 d-flex flex-column items-baseline w-100'>
                        <h1>Unlock Exclusive Early Access Benefits</h1>
                        <p>Get discounted pricing, additional resources, and priority service.</p>
                        <span className='row gap-2 align-items-center justify-content-baseline w-100'>
                            <input className=' form-control' type="text" placeholder='Your Email address' />
                            <button type='submit' className='btn first-btn-form'> Sign Up </button>
                        </span>
                        <p>By clicking Sign Up, you confirm that you agree with our Terms and Conditions.</p>
                    </div>
                    <div className='flex-1'>
                        <img src="src/assets/Animations/discount-animate.svg" class="form_image" alt="..." />
                    </div>
                </section>
                {/* ************************************************************************************ */}
                <section className='w-100 d-flex flex-column align-items-center gap-3' id='section3' >

                    <div className='text-center '>
                        <h5>Join</h5>
                        <h1>Get in Touch</h1>
                        <p>Fill out the form below to pre-order and get early access benefits</p>
                    </div>

                    <form action="" className='form_formpage'>
                        <div className='row gap-2 w-100'>
                            <div className='flex-1'>
                                <label htmlFor="" class="form-label">First Name</label>
                                <input type="text" class="form-control w-100" />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="" class="form-label">Last Name</label>
                                <input type="text" class="form-control w-100" />
                            </div>
                        </div>
                        <div className='row gap-2 w-100'>
                            <div className='flex-1 w-100'>
                                <label htmlFor="" class="form-label ">Email</label>
                                <input type="text" class="form-control w-100" />
                            </div>
                            <div className='flex-1 w-100'>
                                <label htmlFor="" class="form-label">Phone Number</label>
                                <input type="text" class="form-control w-100" />
                            </div>
                        </div>
                        <div className='mt-4 w-100'>
                            <label htmlFor="" class="form-label">Choose a Topic</label>
                            <select name="" className='w-50 form-select w-100' id="">
                                <option value="one" selected disabled>Select One ...</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                            </select>
                        </div>
                        <div className='check-formpage text-start mt-3'>
                            <p>Which Best Describes You?</p>
                            <div className='row-form-formpage'>
                                <div className='flex-1 w-100'>
                                    <span class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            First Choice
                                        </label>
                                    </span>
                                    <span class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Third Choice
                                        </label>
                                    </span>
                                    <span class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Fifth Choice
                                        </label>
                                    </span>
                                </div>

                                <div className='flex-1 w-100' >
                                    <span class="form-check w-75">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Second Choice
                                        </label>
                                    </span>
                                    <span class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Fourth Choice
                                        </label>
                                    </span>
                                    <span class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Other
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='w-50 mt-4 w-100 mb-2'>
                            <label htmlFor="" class="form-label ">Message</label>
                            <textarea type="text" className="form-control w-100" placeholder='Type your message...' rows={5} />
                        </div>
                        <div class=" d-flex flex-column align-items-center gap-2" >
                            <div class=" d-flex gap-2">
                                <input type="checkbox" value="" id="flexCheckDefault" />
                                <label for="flexCheckDefault">
                                    I agree to the Terms
                                </label>
                            </div>
                            <div className=''>
                                <button type='submit' className='btn first-btn-form'>Submit</button>
                            </div>
                        </div>
                    </form>

                </section>

                {/* ******************************************************************************************** */}
                <section className='w-100 section-bg-Form ' id='section4'>
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
                    <div className='section-bg-Form-text '>
                        <h1>Secure Your Early Access Benefits</h1>
                        <p>Be among the first to experience the groundbreaking features of Climate: The Experiment.</p>
                        <span className='row align-items-center justify-content-center mt-3  gap-2 '>
                            <Link className='btn second-btn-form'>Pre-Order</Link>
                            <Link className='btn third-btn-form'>Learn More</Link>
                        </span>

                    </div>
                </section>
            </div>
            <Footer FooterColor="#621656" FooterTxTColor="#fff" />
        </div>
    )
}

export default Form_Component