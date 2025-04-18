import React, { useEffect, useState } from 'react'
import '../assets/Css/Form_LastPage.css'
import { Link } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import Scroll from './Scroll'




const Form_LastPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <AppNavbar textColor="#5a12a7" />
            <Scroll NumOfSections='7' />
            <section className='section-bg-LastForm ' id='section1'>

                <div className='section-bg-LastForm-text '>
                    <h1>Secure Your Early Access Benefits</h1>
                    <p>Be among the first to experience the groundbreaking features of Climate: The Experiment.</p>
                    <span className='row gap-2 '>
                        <Link className='btn first-btn-lastpage'>Pre-Order</Link>
                        <Link className='btn second-btn-lastpage'>Learn More</Link>
                    </span>
                </div>
            </section>

            {/* ******************************************************************************************** */}
            <div className='Form_LastPage'>
                <section className='row align-items-center  w-100' id='section2'>

                    <div className='flex-1 '>
                        <h1>Find Your Dream Job Today</h1>
                        <p>Explore exciting career opportunities in the field of climate</p>
                        <span className='row gap-2 mt-3 '>
                            <Link className='btn first-btn-lastpage' style={{ width: '150px' }}>I am a Condidate</Link>
                            <Link className='btn second-btn-lastpage' style={{ width: '150px' }}>I am a Recruiter</Link>
                        </span>

                    </div>
                    <div className='flex-1'>
                        <img src="src/assets/Animations/dreamer-animate.svg" class="form_image" alt="..." />
                    </div>
                </section>
                {/* *********************************************************************************************** */}
                <section className='d-flex flex-column align-items-center form-container w-100' id='section3'>

                    <div className='d-flex gap-0 flex-column text-center'>
                        <h5>Apply</h5>
                        <h1>Get in Touch</h1>
                        <p>Fill out the form below to apply for a position</p>
                    </div>

                    <form action="" method="post" className='Form_LastForm'>
                        <div class="mb-3 input-label">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name='name' class="form-control W-100" id="exampleFormControlInput1" placeholder="" />
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
                                <button type='submit' className='btn first-btn-lastpage'>Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
                {/* ************************************************************************************ */}
                <section className='row align-items-baseline gap-4 w-100' id='section4'>

                    <div className='flex-1 d-flex flex-column gap-2 '>
                        <h5>Join Us</h5>
                        <h1>Contact Form</h1>
                        <p>Fill out the form below to get in touch with us.</p>
                        <Link>✉ Climate@educat.mail</Link>
                        <Link>📞 +216 .. ... ... </Link>
                        <Link>🗺 Sfax </Link>
                    </div>
                    <div className='flex-1'>
                        <form action="" className='d-flex flex-column align-items-center w-100'>
                            <div className='row-form-lastform'>
                                <div className='flex-1'>
                                    <label htmlFor="" class="form-label">First Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='row-form-lastform'>
                                <div className='flex-1'>
                                    <label htmlFor="" class="form-label ">Email</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="" class="form-label">Phone Number</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='mt-4 row-form-lastform-two'>
                                <label htmlFor="" class="form-label">Choose a Topic</label>
                                <select name="" className='form-select select-lastform' id="">
                                    <option value="one" selected disabled>Select One ...</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column align-items-center row-form-lastform-two mt-3'>
                                <p>Which Best Describes You?</p>
                                <div className='row w-100 row-lastform mt-3'>
                                    <div className='flex-1 '>
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

                                    <div className='flex-1'>
                                        <span class="form-check">
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
                            <div className='mt-4 row-form-lastform-two'>
                                <label htmlFor="" class="form-label ">Message</label>
                                <textarea type="text" className="form-control w-100" placeholder='Type your message...' rows={5} />
                            </div>
                            <div className='d-flex flex-column align-items-center'>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I accept the Terms
                                    </label>
                                </div>
                                <button type='submit' className='btn second-btn-lastpage mt-3'> Submit </button>
                            </div>
                        </form>
                    </div>
                </section>
                {/* *********************************************************************************************** */}
                <section className='d-flex flex-column align-items-center form-container' id='section5'>
                    <div className='d-flex gap-0 flex-column text-center'>
                        <h5>Showcase</h5>
                        <h1>Get in Touch</h1>
                        <p>Learn how to showcase your skills and explore opportunities</p>
                    </div>

                    <form action="" method="post" className='Form_LastForm '>
                        <div class="mb-3 W-100">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name='name' class="form-control W-100" id="exampleFormControlInput1" placeholder="" />
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
                                <button type='submit' className='btn second-btn-lastpage mt-3'>Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
                {/* ****************************************************************************************** */}
                <section className=' d-flex flex-column gap-2 align-items-center' id='section6'>
                    <h1>FAQs</h1>
                    <p>Find answers to common questions about filling out the forms or the subsequent processes.</p>
                    <div className='mt-3 flex-1 w-100 d-flex flex-column align-items-center gap-2'>
                        <select class="form-select-lg custom-select width-select" aria-label="Large select example">
                            <option selected disabled>How do I apply?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select width-select" aria-label="Large select example">
                            <option selected disabled>What documents are required?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select width-select" aria-label="Large select example">
                            <option selected disabled>How long does it take?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select width-select" aria-label="Large select example">
                            <option selected disabled>Can I apply for multiple positions?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select width-select" aria-label="Large select example">
                            <option selected disabled>How can I contact support?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column align-items-center mt-3'>
                        <h3>Still have questions?</h3>
                        <p>Contact us for more information.</p>
                        <Link className='btn first-btn-lastpage mt-3'>Contact</Link>
                    </div>
                </section>
                {/* ************************************************************************************************* */}
                <section className='d-flex flex-column' id='section7'>
                    <h1>Client Feedback</h1>
                    <p>Read what our clients have to say</p>
                    <div className='row gap-5 mt-5'>

                        <div className='flex-1 align-rate'>
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <p>
                                Our experience with Climate has been exceptional. Their platform connected us with top-notch candidates quickly and efficiently.
                            </p>

                            <div className='flex-profile mt-3'>

                                <img src="src/assets/Images/background.jpeg" className='image_profile' alt="" />

                                <span className='text-start'>
                                    <h6>John Doe</h6>
                                    <p>HR Manager, ABC Company</p>
                                </span>
                            </div >


                        </div>
                        <div className='flex-1 align-rate'>
                            <h5>⭐⭐⭐⭐⭐</h5>
                            <p>
                                I found Climate to be a valuable resource for finding freelance opportunities. Their platform is user-friendly and the support team is always responsive.
                            </p>


                            <div className='flex-profile mt-3'>
                                <img src="src/assets/Images/background.jpeg" className='image_profile' alt="" />
                                <span className='text-start'>
                                    <h6>Jane Smith</h6>
                                    <p>Freelance Writer, XYZ Agency</p>
                                </span>
                            </div >



                        </div>

                    </div>
                </section>
            </div>
            <Footer FooterColor="#5a12a7" FooterTxTColor="#fff" />
        </div>
    )
}

export default Form_LastPage