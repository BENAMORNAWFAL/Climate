import React, { useState, useEffect } from 'react'
import AppNavbar from '../Components/AppNavbar'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Css/Climate_HR.css'
import Footer from './Footer';
import Scroll from './Scroll';

const Climate_HR = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [activeDiv, setActiveDiv] = useState('multiCollapseExample1');
    const displayDiv = (divId) => {
        setActiveDiv(divId === activeDiv ? null : divId);
    };

    // change images
    const [imageSrc, setImageSrc] = useState('src/assets/Animations/hiring-animate.svg');
    const handleMouseOver = (src) => {
        setImageSrc(src);
    };

    // css button toggle 
    const [activeButton, setActiveButton] = useState('multiCollapseExample1');

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        displayDiv(buttonId);
    };

    return (
        <div>
            <AppNavbar textColor="#DF2639"  />
            <Scroll NumOfSections='8' />
            <section id='section1' className='Top_Climate_HR_Page'>
                <div className='Climate_HR_Page_bg_txt'>
                    <h5>Innovative</h5>
                    <h1>HR Sollutions for Tech</h1>
                    <p>Unlock the potential of your tech wirkforce with our specialized HR solutions.</p>
                    <span className='row gap-2'>
                        <Link className="btn first-btn-climate-hr">Learn More</Link>
                        <Link className="btn second-btn-climate-hr">Contact Us</Link>
                    </span>
                </div>
            </section>
            {/* ************************************************************************* */}
            <div className='Climate-HR-Page'>
                <section className='row gap-5 align-items-center w-100' id='section2'>
                    <div className='flex-1'>
                        <img src={imageSrc} alt="" className='image-climate-hr'  />
                    </div>
                    <div className='flex-1 d-flex flex-column'>
                        <div className='select-hover' onMouseOver={() => handleMouseOver('src/assets/Animations/hiring-animate.svg')}>
                            <h2>
                                Recruitment Services
                            </h2>

                            <p>
                                We provide comprehensive recruitment solutions for businesses in the tech sectors, including IT, digital marketing, and fintech. Our team of experts will help you find the right candidates to meet your specific needs.
                            </p>
                        </div>
                        <div className='select-hover' onMouseOver={() => handleMouseOver('src/assets/Animations/business-deal-animate.svg')}>
                            <h2>
                                Subcontracting Solutions
                            </h2>

                            <p>
                                Need to outsource certain tasks or projects? Our subcontracting services allow you to find skilled professionals to handle your workload efficiently. We ensure that you get the best talent for the job.
                            </p>
                        </div >
                        <div className='select-hover' onMouseOver={() => handleMouseOver('src/assets/Animations/problem-solving-animate.svg')}>
                            <h2>
                                Employee Training
                            </h2>

                            <p>
                                Invest in your workforce's development with our employee training programs. We offer customized training solutions to enhance the skills and knowledge of your employees, helping them excel in their roles.
                            </p>
                        </div>
                    </div>


                </section>
                {/* ***************************************************************************************** */}
                <section className=' row align-items-center gap-5 w-100' id='section3'>
                    <div className='flex-1'>
                        <h5>Revolutionary</h5>
                        <h1>Advanced Candidate Assessments with AI Powerd Tool</h1>
                        <p>Our AI-powered tool "CLAIM" revolutionizes candidate assessments, providing advanced insights for smarter hiring decisions. Experience the future of HR consulting today.</p>
                        <div className='row align-items-baseline'>
                            <span className='flex-1 '>
                                <h5>Benefits</h5>
                                <ol class="list-group-numbered ">
                                    <li class="list-group-item">Streamlined hiring process</li>
                                    <li class="list-group-item">Enhanced candidate evaluation</li>
                                    <li class="list-group-item">Improved recruitment outcomes</li>
                                </ol>
                            </span>
                            <span className='flex-1'>
                                <h5>Features</h5>
                                <ol class="list-group-numbered">
                                    <li class="list-group-item">AI-powered candidate assessments</li>
                                    <li class="list-group-item">Comprehensive evaluation reports</li>
                                    <li class="list-group-item">Data-driven hiring recommendations</li>
                                </ol>
                            </span>
                        </div>
                        <div className='d-flex gap-0'>
                            <span className='row gap-2'>
                                <Link className="btn first-btn-climate-hr">Learn More</Link>
                                <Link className="btn third-btn-climate-hr">Sign Up ></Link>
                            </span>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src="src/assets/Animations/deconstructed-robot-animate.svg" alt="" className='image-climate-hr' />
                    </div>
                </section>
                {/* ************************************************************************************* */}
                <section className=' row gap-5 align-items-baseline w-100' id='section4'>
                    <div className='flex-1'>
                        <h5>Innovative</h5>
                        <h1>Unlock the Potential of Your Tech Business</h1>
                    </div>
                    <div className='flex-1 d-flex flex-column align-items-baseline'>
                        <p>
                            Partner with Climate HR to access top talent, streamline your recruitment process, and optimize job descriptions. Our AI-powered tool, CLAIM, ensures accurate candidate assessment.
                        </p>
                        <div className='row align-items-baseline'>
                            <div className='flex-1 col-icons d-flex flex-column gap-4'>
                                <img className='cube_icon' src="src/assets/Icons/businesswoman-with-a-specific-quality-24.png" alt="" />
                                <span>
                                    <h4 style={{ margin: 0 }}>
                                        Expertise
                                    </h4>
                                    <p style={{ margin: 0 }}>
                                        Leverage our industry knowledge to find the right candidates for your tech roles.
                                    </p>
                                </span>
                            </div>
                            <div className='flex-1 col-icons d-flex flex-column gap-4 '>
                                <img className='cube_icon' src="src/assets/Icons/icons8-human-resources-68.png" alt="" />
                                <span>
                                    <h4 style={{ margin: 0 }}>
                                        Efficiency
                                    </h4>
                                    <p style={{ margin: 0 }}>
                                        Save time and resources with our streamlined recruitment and HR consulting services.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <span className='row gap-2 mt-3'>
                            <Link className="btn first-btn-climate-hr">Learn More</Link>
                            <Link className="btn third-btn-climate-hr">Sign Up ></Link>
                        </span>
                    </div>
                </section>
                {/* ******************************************************************************************** */}
                <section className=' d-flex flex-column align-items-center w-100' id='section5'>
                    <h5>Solutions</h5>
                    <h1>Pricing Options</h1>
                    <p>Choose the right plan for your business needs</p>
                    <span>
                        <p className="d-flex gap-2 mb-0">
                            <button className={`btn Toggle-first-element ${activeButton === 'multiCollapseExample1' ? 'active' : ''} `} type="button" onClick={() => { displayDiv('multiCollapseExample1'), handleButtonClick('multiCollapseExample1') }}>Monthly</button>
                            <button className={`btn Toggle-second-element ${activeButton === 'multiCollapseExample2' ? 'active' : ''}`} type="button" onClick={() => { displayDiv('multiCollapseExample2'), handleButtonClick('multiCollapseExample2') }}>Yearly</button>
                        </p>
                    </span>
                    <div >
                        <div className={` ${activeDiv === 'multiCollapseExample1' ? '' : 'd-none'}`}>
                            <div className="card-climate-hr">
                                {/* ******** */}
                                <div class="card-body-toggle" >
                                    <div class="card-toggle-header">
                                        <h5>Basic Plan</h5>
                                        <h1 className='fw-bold'>$19/mo</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Includes:</h5>
                                        <ul className='list'>
                                            <li>AI-powered candidate assessment</li>
                                            <li>Job description optimization</li>
                                            <li>Recruitment support</li>
                                        </ul>
                                    </div>
                                    <Link className='btn get-start-btn mb-2'>Get Started</Link>
                                </div>
                                <div class="card-body-toggle" >
                                    <div class="card-toggle-header">
                                        <h5>Business Plan</h5>
                                        <h1 className='fw-bold'>$29/mo</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Includes:</h5>
                                        <ul className='list'>
                                            <li>AI-powered candidate assessment</li>
                                            <li>Job description optimization</li>
                                            <li>Recruitment support</li>
                                            <li>Training programs</li>
                                        </ul>
                                    </div>
                                    <Link className='btn get-start-btn mb-2'>Get Started</Link>
                                </div>
                                <div class="card-body-toggle" >
                                    <div class="card-toggle-header">
                                        <h5>Business Plan</h5>
                                        <h1 className='fw-bold'>$49/mo</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Includes:</h5>
                                        <ul className='list'>
                                            <li>AI-powered candidate assessment</li>
                                            <li>Job description optimization</li>
                                            <li>Recruitment support</li>
                                            <li>Training programs</li>
                                            <li>Dedicated account manager</li>
                                        </ul>
                                    </div>
                                    <Link className='btn get-start-btn mb-2'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className={` ${activeDiv === 'multiCollapseExample2' ? '' : 'd-none'}`}>
                            <div className="card-climate-hr">
                                {/* ******** */}
                                <div class="card-body-toggle" >
                                    <div class="card-toggle-header">
                                        <h5>Basic Plan</h5>
                                        <h1 className='fw-bold'>$19/Yr</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Includes:</h5>
                                        <ul className='list'>
                                            <li>AI-powered candidate assessment</li>
                                            <li>Job description optimization</li>
                                            <li>Recruitment support</li>
                                        </ul>
                                    </div>
                                    <Link className='btn get-start-btn mb-2'>Get Started</Link>
                                </div>
                                <div class="card-body-toggle" >
                                    <div class="card-toggle-header">
                                        <h5>BUsiness Plan</h5>
                                        <h1 className='fw-bold'>$29/Yr</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Includes:</h5>
                                        <ul className='list'>
                                            <li>AI-powered candidate assessment</li>
                                            <li>Job description optimization</li>
                                            <li>Recruitment support</li>
                                            <li>Training programs</li>
                                        </ul>
                                    </div>
                                    <Link className='btn get-start-btn mb-2'>Get Started</Link>
                                </div>
                                <div class="card-body-toggle" >
                                    <div class="card-toggle-header">
                                        <h5>BUsiness Plan</h5>
                                        <h1 className='fw-bold'>$49/Yr</h1>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Includes:</h5>
                                        <ul className='list'>
                                            <li>AI-powered candidate assessment</li>
                                            <li>Job description optimization</li>
                                            <li>Recruitment support</li>
                                            <li>Training programs</li>
                                            <li>Dedicated account manager</li>
                                        </ul>
                                    </div>
                                    <Link className='btn get-start-btn mb-2'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ************************************************************************************ */}
                <section className='row align-items-baseline gap-5 w-100' id='section6'>

                    <div className='flex-1 d-flex flex-column'>
                        <h5>Save</h5>
                        <h1>Get in Touch</h1>
                        <p>Fill out the form below to receive the 25% reduction on Climate HR services</p>
                        <Link>✉ info@climateexperiment.com</Link>
                        <Link>📞 +216...... </Link>
                        <Link>🗺 Sfax </Link>
                    </div>
                    <div className='flex-1 '>
                        <form action="" className='d-flex flex-column align-items-center mt-5 w-100'>
                            <div className='row w-100'>
                                <div className='flex-1 w-100'>
                                    <label htmlFor="" class="form-label">First Name</label>
                                    <input type="text" class="form-control w-100" />
                                </div>
                                <div className='flex-1 w-100'>
                                    <label htmlFor="" class="form-label">Last Name</label>
                                    <input type="text" class="form-control w-100" />
                                </div>
                            </div>
                            <div className='row w-100'>
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
                            <div className='which-best'>
                                <p>Which Best Describes You?</p>
                                <div className='d-flex w-100 '>
                                    <div className='flex-1'>
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
                            <div className='w-50 mt-4 w-100'>
                                <label htmlFor="" class="form-label ">Message</label>
                                <textarea type="text" className="form-control w-100" placeholder='Type your message...' rows={5} />
                            </div>
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    I accept the Terms
                                </label>
                            </div>
                            <button type='submit' className='btn first-btn-climate-hr  mt-3'> Submit </button>
                        </form>
                    </div>
                </section>
                {/* *************************************************************************************** */}
                <section className='climate-hr-rating' id='section7'>
                
                    <h4>Working with Climate HR has been a game-changer for our recruitment process. Their expertise and AI-powered tool, CLAIM, have helped us find the perfect candidates quickly and efficiently.</h4>
                    <img src="src/assets/Images/climate-hr.webp" className='profile-img' alt="" />
                    <h5>John Doe</h5>
                    <p>HR Manager, Tech Solutions</p>
                </section>
                {/* ************************************************************************************** */}
                <section className='row align-items-center gap-5 w-100' id='section8'>

                    <div className='flex-1 d-flex flex-column align-items-baseline'>

                        <h1>
                            Transform Your HR Strategy Today
                        </h1>

                        <p>
                            Contact Climate HR for expert HR consulting services in the tech industry.
                        </p>

                        <span className='row gap-2'>
                            <Link className="btn first-btn-climate-hr">Learn More</Link>
                            <Link className="btn third-btn-climate-hr">Sign Up ></Link>
                        </span>
                    </div>
                    <div className='flex-1'>
                        <img src="src/assets/Animations/strategic-consulting-animate.svg" alt="" className='image' />
                    </div>

                </section>

            </div>
            <Footer FooterColor="#DF2639" FooterTxTColor="#fff"/>
        </div>
    )
}

export default Climate_HR