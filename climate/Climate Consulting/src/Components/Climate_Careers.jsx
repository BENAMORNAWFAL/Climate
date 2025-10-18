import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import '../assets/Css/Climate_careers.css'
import 'animate.css'
import Footer from './Footer'
import Scroll from './Scroll'



const Climate_Careers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [imageSrc, setImageSrc] = useState('src/assets/Animations/working-remotely-animate.svg');
    const navigate = useNavigate();

    const handleClickTraining = () => {

        navigate('/training');
    };
    const handleClickMaster = () => {

        navigate('/master');
    };
    const handleClickBroaden = () => {

        navigate('/broaden');
    };



    const handleMouseOver = (src) => {
        setImageSrc(src);
    };


    return (
        <div>
            <AppNavbar textColor="#FF9F14" />
            <Scroll NumOfSections='11' />

            <section className='Potential' id='section1'>
                <div className='Potential-bg-text'>
                <div className='flex-1'>
                    <p style={{ color: '#DF2639' }}>Find</p>
                    <h2>
                        Fullfill Your Potential
                    </h2>


                </div>
                <div className='flex-1'>
                    <p>
                        Discover exciting job opportunities in IT, Digital Marketing, and Fintech with Climate Careers.
                        We connect talented candidates with top employers in Tunisia, abroad, and remote positions.
                        Take the next step in your career today!
                    </p>
                    <span className=' row gap-2 mt-3'>
                        <Link className='btn First-btn-Top' to={'/career_coaching'}>Learn More</Link>
                        <Link className='btn Second-btn-Top' to={'/sign_up'}>Sign Up</Link>
                    </span>
                </div>
                </div>
            </section>
            {/* *************************************************************** */}
            <div className="Climate_careers" >

                <section className='Descover-Careers' id='section2'>
                    <div className='flex-1'>
                        <div className='selection' onMouseOver={() => handleMouseOver('src/assets/Animations/working-remotely-animate.svg')} >
                            <h2>
                                Remote Career Opportunities
                            </h2>

                            <p>
                                Discover exciting job opportunities in Tunisia and receive support throughout the application process.
                            </p>
                        </div>
                        <div className='selection' onMouseOver={() => handleMouseOver('src/assets/Animations/active-support-animate.svg')}>
                            <h2>
                                Career Support Services
                            </h2>

                            <p>
                                We provide comprehensive career support services to help you succeed in your job search in Tunisia.
                            </p>
                        </div >
                        <div className='selection' onMouseOver={() => handleMouseOver('src/assets/Animations/marketing-animate.svg')}>
                            <h2>
                                IT, Digital Marketing Fintech
                            </h2>

                            <p>
                                Explore job opportunities in the thriving sectors of IT, Digital Marketing, and Fintech.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src={imageSrc} alt="" className='image_select' />
                    </div>

                </section>
                {/* *************************************************************** */}

                <section className='opportunities-section' id='section3'>


                    <div className='opportunity '>
                        <img className='' src="src/assets/Icons/icons8-jobs-64.png" alt="" />
                        <div className='opportunity-card'>
                            <h4>
                                Explore Global Job Opportunities with Climate Consulting
                            </h4>
                            <p>
                                Climate Consulting's global network and partnerships provide a wide range of job opportunities abroad.                            </p>
                            <div></div>
                            <span className='row gap-2'>
                                <Link className='btn First-btn-careers' to={'/career_coaching'} >Learn More </Link>
                                <Link className='btn Second-btn-careers' to={'/sign_up'} > Apply Now > </Link>
                            </span>
                        </div>
                    </div>

                    <div className='opportunity'>
                        <img className='' src="src/assets/Icons/icons8-freelance-64.png" alt="sss" />
                        <div className='opportunity-card'>
                            <h4>
                                Launch Your Freelance Career with Climate Consulting
                            </h4>
                            <p>
                                Climate Consulting helps aspiring freelancers in IT, Digital Marketing, and Fintech sectors.                            </p>
                            <span className='row gap-2'>
                                <Link className='btn First-btn-careers' to={'/career_coaching'} >Learn More </Link>
                                <Link className='btn Second-btn-careers' to={'/sign_up'} > Apply Now > </Link>
                            </span>
                        </div>
                    </div>

                    <div className='opportunity'>
                        <img className='' src="src/assets/Icons/icons8-skills-50.png" alt="" />
                        <div className='opportunity-card'>
                            <h4>
                                Expand Your Skills with Climate School's Training Opportunities
                            </h4>
                            <p>
                                Climate School offers career coaching, professional reconversion, and continuous training programs.                            </p>
                            <span className='row gap-2'>
                                <Link className='btn First-btn-careers' to={'/career_coaching'} >Learn More </Link>
                                <Link className='btn Second-btn-careers' to={'/sign_up'} > Apply Now > </Link>
                            </span>
                        </div>
                    </div>

                </section>
                {/* *************************************************************** */}
                <section className='Careers-section' id='section4'>
                    <h1>Find Your Dream Job Anywhere withClimate Careers</h1>
                    <div className='opportinities '>
                        <div className='opportunity'>
                            <img className='icons' src="src/assets/Icons/icons8-office-48.png" alt="" />
                            <span className='opportunity-card'>
                                <h4>
                                    Explore Exciting Remote Work Opportunities With Climate Careers
                                </h4>
                                <p>
                                    Discover the freedom and flexibility of remote work with Climate Careers</p>
                                <Link className='btn Third-btn-careers' to={'/'} >Learn More > </Link>
                            </span>
                        </div>

                        <div className='opportunity'>
                            <img className='icons' src="src/assets/Icons/icons8-work-from-home-64.png" alt="" />
                            <span className='opportunity-card'>
                                <h4>
                                    Launch Your Freelance Career with Climate Careers </h4>
                                <p>
                                    Unlock your potential as a freelancer with Climate Careers </p>
                                <Link className='btn Third-btn-careers' to={'/'} >Sign Up > </Link>
                            </span>
                        </div>

                        <div className='opportunity '>
                            <img className='icons' src="src/assets/Icons/icons8-web-marketing-64.png" alt="" />
                            <span className='opportunity-card'>
                                <h4>
                                    Discover IT, Digital Marketing, and Fintech Opportunities with Climate Careers</h4>
                                <p>
                                    Explore exciting job prospects in the IT, Digital Marketing, and Fintech sectors with Climate Careers</p>
                                <Link className='btn Third-btn-careers' to={'/'} >Apply > </Link>
                            </span>
                        </div>
                    </div>
                </section>
                {/* *************************************************************** */}

                <section className='freelance-opportunities-section' id='section5'>


                    <div className='freelance-opportunity'>
                        <img className='icons' src="src/assets/Icons/icons8-grow-64.png" alt="" />
                        <div className='freelance-opportunity-content'>
                            <h4>Launch and Grow Your Freelance Career</h4>
                            <p>Climate Careers provides comprehensive support and guidance for professionals looking to start or advance their freelance careers in the IT, Digital Marketing, and Fintech sectors.</p>
                            <span className='row gap-2'>
                                <Link className='btn First-btn-careers' to={'/'} >Learn More </Link>
                                <Link className='btn Second-btn-careers' to={'/sign_up'} > Sign Up > </Link>
                            </span>
                        </div>
                    </div>

                    <div className='freelance-opportunity'>
                        <img className='icons' src="src/assets/Icons/icons8-training-40.png" alt="" />
                        <div className='freelance-opportunity-content'>
                            <h4>Training Opportunities for Freelancers</h4>
                            <p>Climate School offers a range of training programs designed to enhance the skills and knowledge of freelancers,
                                including career coaching, professional reconversion, and continuous training.</p>
                            <span className='row gap-2'>
                                <Link className='btn First-btn-careers' to={'/'} >Learn More </Link>
                                <Link className='btn Second-btn-careers' to={'/sign_up'} > Sign Up > </Link>
                            </span>
                        </div>
                    </div>

                    <div className='freelance-opportunity'>
                        <img className='icons' src="src/assets/Icons/icons8-workspace-48.png" alt="" />
                        <div className='freelance-opportunity-content'>
                            <h4>Unlock Your Freelance Potential Today</h4>
                            <p>Discover the benefits of joining Climate Careers and gain access to a supportive community, valuable resources,
                                and exciting freelance opportunities in Tunisia, Abroad, or fully remotely.
                            </p>
                            <span className='row gap-2'>
                                <Link className='btn First-btn-careers' to={'/'} >Learn More </Link>
                                <Link className='btn Second-btn-careers' to={'/sign_up'} > Sign Up > </Link>
                            </span>
                        </div>
                    </div>

                </section>
                {/* *********************************************************** */}
                <section className='training-section' id='section6'>

                    <div className='training'>
                        <h5 style={{ color: '#ffb243' }}>Training</h5>
                        <h2>Explore Training Opportunities</h2>
                        <span className='training-description'>
                            <p>Discover IT, Digital Marketing, and Fintech courses</p>
                            <button className='btn First-btn-careers'>View all</button>
                        </span>
                    </div>
                    <div className='Training-courses'>

                        <div class="card-Training" onClick={handleClickTraining}>
                            <div class="card-header-Training one">
                                <img className='courses-img' src="src/assets/Animations/course-app-animate.svg" alt="" />
                            </div>
                            <div class="card-Training-content">
                                <div className='category'>
                                    <h6>Category</h6>
                                    <p>5 min read</p>
                                </div>
                                <div className='courses-content'>
                                    <h4 style={{ color: '#ffb243' }}>Unlock Your Potential with Training</h4>
                                    <p>Enhance your skills with our IT, Digital Marketing and Fintech courses</p>
                                    <Link to={'/training'} className='link-courses'>Read More ></Link>
                                </div>
                            </div>
                        </div>

                        <div class="card-Training" onClick={handleClickMaster}>
                            <div class="card-header-Training one">
                                <img className='courses-img' src="src/assets/Animations/order-ahead-animate.svg" alt="" />
                            </div>
                            <div class="card-Training-content">
                                <div className='category'>
                                    <>Category</>
                                    <p>5 min read</p>
                                </div>
                                <span className='courses-content'>
                                    <h4 style={{ color: '#ffb243' }}>Master New Skills with Our Courses</h4>
                                    <p>Stay ahead of the curve with our IT, Digital Marketing, and Fintech courses</p>
                                    <Link to={'/master'} className='link-courses'>Read More ></Link>
                                </span>
                            </div>
                        </div>

                        <div class="card-Training" onClick={handleClickBroaden}>
                            <div class="card-header-Training one">
                                <img className='courses-img' src="src/assets/Animations/knowledge-animate.svg" alt="" />
                            </div>
                            <div class="card-Training-content">
                                <div className='category'>
                                    <>Category</>
                                    <p>5 min read</p>
                                </div>
                                <span className='courses-content'>
                                    <h4 style={{ color: '#ffb243' }}>Broaden Your Skill Set with Our Courses</h4>
                                    <p>Expand your knowledge with our IT, Digital Marketing, and Fintech courses</p>
                                    <Link to={'/broaden'} className='link-courses'>Read More ></Link>
                                </span>
                            </div>
                        </div>



                    </div>

                </section>
                {/* ************************************************************************ */}
                <section className='Rate-Careers-section' id='section7'>
                    <img className='climate-img' src="src/assets/Images/CLIMATE.png" alt="" />
                    <h5>Working with Climate Careers was a game-changer for me. They helped me secure a job in the IT industry, and I couldn't be happier.</h5>
                    <img className='profil-img' src="src/assets/Images/icons8-profile-picture-50.png" alt="" />
                    <h6 className='name-profil'>John Doe</h6>
                    <p>Software Engineer, ABC Inc.</p>
                </section>
                {/* ****************************************************************************************** */}

                <section className='get-in-touch-section' id='section8'>
                    <div className='get-in-touch'>
                        <h5 style={{ color: '#FF9F14' }}>Start</h5>
                        <h1>Get in Touch</h1>
                        <p>Have a question? Need more information? Contact us now!</p>
                    </div>
                    <form action="" className='get-in-touch-form'>
                        <div className='form-content'>
                            <label htmlFor="name">Name</label>
                            <input className='form-content-input' type="text" />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="email">Email</label>
                            <input className='form-content-input' type="text" />
                        </div>
                        <div className='form-content'>
                            <label htmlFor="message">Message</label>
                            <textarea className='form-content-texterea' type="text" />
                        </div>
                        <div className='bottom-form'>
                            <span className='terms'>

                                <input type='checkbox' />
                                <p>I agree to the Terms</p>
                            </span>
                            <button className='btn First-btn-careers' type='submit'>Submit</button>
                        </div>
                    </form>
                </section>
                {/* ****************************************************************************************** */}
                <section className='Next-Step' id='section9'>
                    <img src="src/assets/Animations/next-steps-animate.svg" className='image-next' alt="" />
                    <div className='Under-Next'>
                        <h1>Take the next step in your career</h1>
                        <p>Sign up with Climate Consulting to find job opportunities in IT, Digital Marketing, and Fintech.</p>
                        <div className='row gap-2'>
                            <Link to={'/sign_up'} className='btn First-btn-careers'>Sign Up</Link>
                            <Link className='btn Third-btn-careers'>Learn More</Link>
                        </div>
                    </div>
                </section>
                {/* ****************************************************************************************** */}
                <section className='answers-section' id='section10'>
                    <div className='answers-top'>
                        <h1 style={{ color: '#FF9F14' }}>FAQs</h1>
                        <p>Find answers to frequently asked questions about the job search process and how Climate Consulting can assist.</p>
                    </div>
                    <div className='form-selection'>
                        <select class="form-select-lg custom-select colored-select" aria-label="Large select example">
                            <option selected disabled>How can Climate Consulting help?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select colored-select" aria-label="Large select example">
                            <option selected disabled>What sectors do you specialize in?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select colored-select" aria-label="Large select example">
                            <option selected disabled>How can I launch my freelance career?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select colored-select" aria-label="Large select example">
                            <option selected disabled>What training opportunities are available?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select colored-select" aria-label="Large select example">
                            <option selected disabled>Still have questions?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <p>Get in touch with our team for assistance.</p>
                        <button className='btn First-btn-careers'>Contact</button>
                    </div>
                </section>
                {/* ******************************************************* */}
                <section className='Trust-section' id='section11'>
                    <h4>Trusted by leading companies in the IT, Digital Marketing and Fintech sectors</h4>
                    <div className='trustby'>
                        <img src="src/assets/Images/CLIMATE.png" alt="" />
                        <img src="src/assets/Images/CLIMATE.png" alt="" />
                        <img src="src/assets/Images/CLIMATE.png" alt="" />
                        <img src="src/assets/Images/CLIMATE.png" alt="" />
                        <img src="src/assets/Images/CLIMATE.png" alt="" />
                        <img src="src/assets/Images/CLIMATE.png" alt="" />
                    </div>
                </section>
            </div>
            <Footer FooterColor="#FF9F14" FooterTxTColor="#fff"/>
        </div>
    )

}

export default Climate_Careers