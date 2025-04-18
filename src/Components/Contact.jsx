import React, { useEffect, useState } from 'react'
import '../assets/Css/Contact.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Scroll from './Scroll'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <AppNavbar textColor="#0e8fe6" />
            <Scroll NumOfSections='5' />
            <section className='contact-top_page' id='section1'>
                <div className='bg-contact-text'>
                    <h6>Connect</h6>
                    <h1>Get in Touch</h1>
                    <p>We're here to answer your questions and provide support.</p>
                    <span className='row gap-2 mt-5'>
                        <Link className='btn first-btn-contact'>Contact</Link>
                        <Link className='btn second-btn-contact'>Learn More</Link>
                    </span>
                </div>
            </section>
            {/* *********************************************************************************************** */}
            <div className='Contact_Page'>
                <section className='' id='section2'>
                    <div className='d-flex flex-column align-items-center  w-100 '>
                        <div className=''>
                            <h5>Connect</h5>
                            <h1>Get in Touch</h1>
                            <p>Have a question? We're here to help!</p>
                        </div>
                        <form action="" method="post" className='w-100 d-flex flex-column align-items-center'>
                            <div class="form-width mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" name='name' class="form-control w-100" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div class="form-width mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name='email' class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div class=" form-width mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Enter your message...' rows="4"></textarea>
                            </div>
                            <div class=" d-flex gap-2 align-items-center" >
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    I agree to the Terms
                                </label>
                            </div>
                            <button type='submit' className='btn first-btn-contact mt-3'>Submit</button>
                        </form>
                    </div>
                </section>
                {/* ************************************************************************************************* */}
                <section className=' d-flex flex-column' id='section3'>
                    <div>
                        <h6>Connect</h6>
                        <h1>Contact Information</h1>
                        <p>For any inquiries, please feel free to reach out to us.</p>
                    </div>
                    <div className='row align-items-center gap-2'>

                        <div className='d-flex flex-1 flex-column gap-4'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                                <div className='mt-3'>
                                    <h2>Email</h2>
                                    <p>Send us an email</p>
                                    <Link to="">Climate@contact.email</Link>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                                <div className='mt-3'>
                                    <h2>Phone</h2>
                                    <p>Give us a call</p>
                                    <Link to="">+216 .. ... ...</Link>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                <div className='mt-3'>
                                    <h2>Office</h2>
                                    <p>Rue ... Sfax</p>
                                    <Link to="">Get Directions ></Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img className='Contact_Image' src="src/assets/Animations/new-message-animate.svg" alt="" />
                        </div>
                    </div>
                </section>
                {/* ********************************************************************************************************** */}
                <section className=' d-flex gap-5 flex-column align-items-center text-center section-rating' id='section4'>

                    <h1>The team at Climate: The Experiment has been incredibly responsive and their support quality is top-notch. They have exceeded our expectations in every way.</h1>
                    <div className='d-flex flex-column align-items-center gap-1'>
                        <img src="src/assets/Images/climate-hr.webp" className='profile-img' alt="" />
                        <h5>John Doe</h5>
                        <p>CEO, ABC Company</p>
                    </div>
                </section>
                {/* *********************************************************************************************************** */}
                <section className=' row align-items-center gap-2' id='section5'>
                    <div className='flex-1'>
                        <h1>Stay Connected with Us</h1>
                        <p>Follow us on social media for updates and community engagement</p>
                        <span className='row gap-2 mt-3'>
                            <Link className='btn first-btn-contact'>Connect</Link>
                            <Link className='btn second-btn-contact'>Learn More</Link>
                        </span>
                    </div>
                    <div className='flex-1'>
                        <img className='Contact_Image' src="src/assets/Animations/online-tech-talks-animate.svg" alt="" />
                    </div>
                </section>
            </div>
            <Footer FooterColor="#0e8fe6" FooterTxTColor="#fff" />
        </div>

    )
}

export default Contact