import React, { useEffect, useState } from 'react'
import '../assets/Css/Tech_Bootcamps.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Scroll from './Scroll';


const Tech_Bootcamps = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // css for title animation
    const [opacityoftitle, setOpacityoftitle] = useState(1);
    const [opacityoftitle2, setOpacityoftitle2] = useState(0);


    useEffect(() => {
        const firstTitleElement = document.getElementById('title-techbtc');
        firstTitleElement.addEventListener('animationend', () => {
            setOpacityoftitle2(1); 
        });
        return () => {
            firstTitleElement.removeEventListener('animationend', () => { });
        };
    }, []);


    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1444);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1444);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);





    return (

        <main>
            <AppNavbar textColor="rgb(102, 231, 245)" />
            <Scroll NumOfSections='9' />


            <div className='top_page' id='section1'>

                {!isSmallScreen ? (
                    <div className='bg-text'>
                        <h1 id='title-techbtc' style={{ opacity: opacityoftitle }} data-text-one="Reinvent Yourself">Reinvent Yourself</h1>
                        <h2 id='title-techbtctwo' style={{ opacity: opacityoftitle2 }} data-text-two="Join our transformative bootcamps and learn AI-tools for IT, Digital MArketing and Fintech">
                            Join our transformative bootcamps and learn AI-tools for IT, Digital MArketing and Fintech
                        </h2>
                    </div>) : (
                    <div className='bg-text'>
                        <h1 id='title-techbtc' style={{ opacity: opacityoftitle }} data-text-one="Reinvent Yourself">Reinvent Yourself</h1>
                        <h2 id='title-techbtctwo' style={{ opacity: opacityoftitle2 }} data-text-two="Join our transformative bootcamps">
                            Join our transformative bootcamps
                        </h2>
                        <h2 id='title-techbtctwo' style={{ opacity: opacityoftitle2 }} data-text-two="and learn AI-tools for IT,">
                            and learn AI-tools for IT,
                        </h2>
                        <h2 id='title-techbtctwo' style={{ opacity: opacityoftitle2 }} data-text-two="Digital MArketing and Fintech">
                            Digital MArketing and Fintech
                        </h2>
                    </div>
                )
                }
            </div>
                {/* **************************************** */}
                <div className='BootcampsPage'>
                    <section className='row align-items-baseline mt-5 pt-5 gap-5 text-in-center w-100' id='section2'>
                        <div className=' flex-1 Title'>
                            <h2>Learn the Latest Tech Skills</h2>
                        </div>
                        <div className='flex-1 d-flex flex-column gap-0'>
                            <div className='flex-1 border-box2 block glow'>
                                <p>
                                    At Climate School, we offer a range of tech-oriented bootcamps designed to equip you with the skills and knowledge you need to thrive in the IT, Digital Marketing, and Fintech industries. Whether you're looking to upskill, switch careers, or enhance your expertise, our bootcamps provide a comprehensive learning experience that will set you up for success.
                                </p>
                            </div>
                            <div className='flex-1 row row-section gap-3 mt-0'>
                                <div className='flex-1 d-flex flex-column block1 glow1 text-in-center'>
                                    <img src="src/assets/Images/search-job-icon.png" alt="" className='cube-image' />
                                    <span>
                                        <h5>Job Opportunities</h5>
                                        <p>Discover your dream job through our expansive network</p>
                                    </span>
                                </div>
                                <div className='flex-1 d-flex flex-column block1 glow1 text-in-center'>
                                    <img src="src/assets/Images/career-transition-icon.png" alt="" className='cube-image' />
                                    <span>
                                        <h5>Career Transition</h5>
                                        <p>Take your career to new heights with our tech bootcamps</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* *********************************************************************************** */}
                    <section className='mt-5 pt-5 text-dark w-100 w-100' id='section3'>
                        <div className='mt-5 text-center'>
                            <h5>Transform</h5>
                            <h1>Become a Tech Pro</h1>
                            <p>Unlock Your Potential in the Tech-Driven Industry</p>
                        </div>
                        <div className='between'>
                            <div className=' flex-1 d-flex flex-column gap-5'>
                                <span>
                                    <h5 style={{ color: '#66e7f5' }}>Innovate</h5>
                                    <h1>Take Your IT Career to New Heights</h1>
                                </span>
                                <p>Our IT bootcamp offers a comprehensive curriculum, spanning various tech disciplines, and equips participants with the skills needed to excel in the digital age.</p>
                                <span className=' row-btns'>
                                    <Link style={{ color: 'white', backgroundColor: '#66e7f5' }} className='btn border'>Learn More</Link>
                                    <Link style={{ color: 'white', backgroundColor: 'rgb(55 71 79)' }} className='btn border'>Apply Now ></Link>
                                </span>
                            </div>
                            <div className='flex-1'>
                                <img className='image' src="src/assets/Animations/digital-transformation-animate.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    {/* *********************************************************************************** */}
                    <section className='mt-5 pt-5 tech-btc-section-4 w-100' id='section4'>
                        <div className='flex-1'>
                            <img className='image' src="src/assets/Animations/conversion-rate-optimization-animate.svg" alt="" />
                        </div>
                        <div className=' flex-1 d-flex flex-column gap-5 w-100'>
                            <span>
                                <h5 style={{ color: '#66e7f5' }}>Empower</h5>
                                <h1>Master the Digital Marketing Lanscape</h1>
                            </span>
                            <p style={{color:'black'}}>Join our tech-oriented bootcamp and gain expertise in SEO, content marketing, social media strategies, and more. Our comprehensive program is designed to equip you with the skills needed to thrive in the digital marketing industry.</p>
                            <span className='row-btns'>
                                <Link style={{ color: 'white', backgroundColor: '#66e7f5' }} className='btn border'>Learn More</Link>
                                <Link style={{ color: 'white', backgroundColor: 'rgb(55 71 79)' }} className='btn btn-light'>Apply Now ></Link>
                            </span>
                        </div>
                    </section>
                    {/* *********************************************************************************** */}
                    <section className='mt-5 pt-5 w-100' id='section5'>
                        <div className='d-flex gap-5 align-items-center justify-content-center text-dark section5 section-FTFN'>
                            <div className=' flex-1 d-flex flex-column gap-3'>
                                <h5 style={{ color: '#66e7f5' }}>Inspire</h5>
                                <span>
                                    <h1>Discover the Future of Finance</h1>
                                    <p>Join our intensive Fintech bootcamp and gain the skills needed to thrive in the rapidly evolving world of financial technologies. Learn about blockchain, data analysis, and more.</p>
                                </span>
                                <span className='row-btns'>
                                    <Link style={{ color: 'white', backgroundColor: '#66e7f5' }} className='btn border'>Learn More</Link>
                                    <Link style={{ color: 'white', backgroundColor: 'rgb(55 71 79)' }} className='btn border'>Apply Now ></Link>
                                </span>
                            </div>
                            <div className='flex-1'>
                                <img className='image' src="src/assets/Animations/money-motivation-animate.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    {/* *********************************************************************************************** */}
                    <section className='mt-5 pt-5 text-dark w-100' id='section6'>
                        <div className='section6 d-flex w-100 '>
                            <div className='flex-1 d-flex flex-column gap-2 '>
                                <span>
                                    <h5 style={{ color: '#66e7f5' }}>Apply</h5>
                                    <h1>Get in Touch</h1>
                                </span>
                                <p>Fill out the form below to express your interest</p>
                                <Link style={{ color: 'rgb(0 121 150)' }}>✉ info@climateexperiment.com</Link>
                                <Link style={{ color: 'rgb(0 121 150)' }}>📞 +216...... </Link>
                                <Link style={{ color: 'rgb(0 121 150)' }}>🗺 Sfax </Link>
                            </div>
                            <div className='flex-1 '>
                                <form action="" method="post">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter your message...' rows="4"></textarea>
                                    </div>
                                    <div className='d-flex align-items-center gap-2 '>
                                        <input type="checkbox" />
                                        <p>I agree to the Terms</p>
                                    </div>
                                    <button type='submit' style={{ color: 'white', backgroundColor: '#66e7f5' }} className='btn border'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* *********************************************************************************** */}
                    <section className='mt-5 pt-5 text-dark w-100  d-flex flex-column' id='section7'>
                        <div className=' w-100  section-7'>
                            <div className='flex-1 col-lg-6 text-in-center'>

                                <h1 style={{ color: '#66e7f5' }}>Unlock Your Potential with Tech Bootcamps at Climate: The Experiment</h1>
                                <p>Our tech-oriented bootcamps offer a unique opportunity for career growth and hands-on learning. Join us today and gain valuable skills in IT, digital marketing, and Fintech with the use of the latest AI-tools on the market.</p>
                                <div className=' gap-5 row-section-7'>
                                    <span className='flex-1 col-md-6 text-in-center'>
                                        <h5 style={{ color: '#66e7f5' }}>Career Advancement</h5>
                                        <p>Enroll in our bootcamps and open doors to new career opportunities in the tech industry.</p>
                                    </span>
                                    <span className='flex-1 col-md-6 text-in-center'>
                                        <h5 style={{ color: '#66e7f5' }}>Hands-on Learning</h5>
                                        <p>Experience practical, real-world projects that will enhance your skills and knowledge.</p>
                                    </span>
                                </div>
                            </div>
                            <div className='flex-1 col-lg-4 col-md-10'>
                                <img className='image' src="src/assets/Animations/education-animate.svg" alt="" />
                            </div>
                        </div>
                    </section>
                    {/* ******************************************************************************************************** */}
                    <section className='mt-5 pt-5 w-100' id='section8'>

                        <div id="carouselExampleDark" className="carousel carousel-dark slide text-dark">
                            <div className="carousel-indicators mb-0">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-bs-interval="10000">
                                    <div className='text-center mt-5 pt-5 carousel_content  '>
                                        <h1>⭐⭐⭐⭐⭐</h1>
                                        <h3>
                                            I attended the IT bootcamp at Climate and it was a game-changer. The hands-on learning experience and supportive instructors helped me land a job in the tech industry.
                                        </h3>
                                        <p>
                                            Assess your strengths, improve your weaknesses, and find the perfect training program.
                                        </p>
                                        <div className='d-flex justify-content-between rating '>
                                            <div className='flex-1'>
                                                <h5>John Doe</h5>
                                                <p>Software Engineer, ABC Inc, Tech Co</p>
                                            </div >
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <div className='text-center mt-5 pt-5 carousel_content'>
                                        <h1>⭐⭐⭐⭐⭐</h1>
                                        <h3>
                                            I attended the IT bootcamp at Climate and it was a game-changer. The hands-on learning experience and supportive instructors helped me land a job in the tech industry.
                                        </h3>
                                        <p>
                                            Assess your strengths, improve your weaknesses, and find the perfect training program.
                                        </p>
                                        <div className='d-flex  justify-content-between '>
                                            <div className='flex-1'>
                                                <h5>Dhia Abdelmoula</h5>
                                                <p>Software Engineer, ABC Inc, Tech Co</p>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='text-center mt-5 pt-5 carousel_content'>
                                        <h1>⭐⭐⭐⭐⭐</h1>
                                        <h3>
                                            I attended the IT bootcamp at Climate and it was a game-changer. The hands-on learning experience and supportive instructors helped me land a job in the tech industry.
                                        </h3>
                                        <p>
                                            Assess your strengths, improve your weaknesses, and find the perfect training program.
                                        </p>
                                        <div className='d-flex  justify-content-between '>
                                            <div className='flex-1'>
                                                <h5>Nawfal Benamor</h5>
                                                <p>Software Engineer, ABC Inc, Tech Co</p>
                                            </div >
                                        </div>
                                    </div>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                    {/* *********************************************************************************** */}
                    <section className='mt-5 pt-5 text-dark mb-5 w-100' id='section9'>

                        <div className='d-flex gap-5 align-items-center justify-content-center section9'>
                            <div className=' flex-1 d-flex flex-column gap-3  '>

                                <h1 >Unlock Your Tech Career Potential</h1>
                                <p>Join our bootcamps and gain the skills to thrive in the digital age.</p>
                                <div className='row-btns'>
                                    <Link to={''} style={{ color: 'white', backgroundColor: '#66e7f5'}} className='btn border'>Apply</Link>
                                    <Link to={''} style={{ color: 'white', backgroundColor: 'rgb(55 71 79)' }} className='btn border'>Learn More</Link>
                                </div>
                            </div>
                            <div className='flex-1 text-center'>
                                <img className='image' src="src/assets/Animations/profile-data-animate.svg" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            <Footer FooterColor="rgb(102, 231, 245)" FooterTxTColor="#2B1344"/>
        </main>
    )
}

export default Tech_Bootcamps