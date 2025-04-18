import React, { useEffect, useState } from 'react'
import AppNavbar from './AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../assets/Css/Career_coaching.css'
import Footer from './Footer';
import Scroll from './Scroll';

const Career_Coaching = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        const items = document.querySelectorAll('.SecondSection .under-secondsection');
        let next = document.getElementById('nextCareerCoaching');
        let prev = document.getElementById('prevCareerCoaching');
        let active = 1;
        const loadShow2 = () => {
            let stt2 = 0;

            if (items[active]) {

                items[active].style.transform = `none`;
                items[active].style.zIndex = 1;
                items[active].style.filter = 'none';
                items[active].style.opacity = 1;
                items[active].style.visibility = 'visible'

            }
            for (let j = active + 1; j < items.length; j++) {

                if (items[j]) {
                    stt2++;
                    items[j].style.transform = `translateX(${300 * stt2}px) scale(${1 - 0.2 * stt2}) perspective(100px) rotateY(0deg) `;
                    items[j].style.zIndex = -stt2;
                    items[j].style.filter = 'blur(5px)';
                    items[j].style.opacity = stt2 > 2 ? 0 : 0.6;
                    window.innerWidth < 992 ?
                        items[j].style.visibility = 'hidden' : items[j].style.visibility = 'visible';


                }
            }
            stt2 = 0;
            for (let j = active - 1; j >= 0; j--) {
                stt2++
                items[j].style.transform = `translateX(${-300 * stt2}px) scale(${1 - 0.2 * stt2}) perspective(100px) rotateY(0deg)`;
                items[j].style.zIndex = -stt2;
                items[j].style.filter = 'blur(5px)';
                items[j].style.opacity = stt2 > 2 ? 0 : 0.6;
                window.innerWidth < 992 ?
                    items[j].style.visibility = 'hidden' : items[j].style.visibility = 'visible';
            }
        };

        loadShow2();
        next.onclick = () => {
            active + 1 < items.length ? active = active + 1 : active = active;
            loadShow2();
        };

        prev.onclick = () => {
            active - 1 >= 0 ? active = active - 1 : active = active;
            loadShow2();
        };
    }, []);

    return (
        <div>
            <AppNavbar textColor="#F72E85" />
            <Scroll NumOfSections='9' />
            <div className='main-CareerCoaching'>
                <section className='top-CareerCoaching' id='section1'>
                    <div className=' top-txt '>
                        <div className='mt-0'>
                            <h5>Transform</h5>
                            <h1 className='fw-bold'>Unlock Your Potential</h1>
                        </div>
                        <div className='mt-0 d-flex flex-column text-center align-items-center'>
                            <p>Discover the power of Career Coaching services provided by Climate Consulting. Our AI-powered tool CLAIM empowers tech industry candidates to enhance their profiles, including LinkedIn, portfolio, and interview skills. We also offer guidance in developing essential soft skills. Let us help you map out your career path and unlock a world of opportunities.</p>
                            <span className='row-career gap-2'>
                                <Link style={{ backgroundColor: '#00000066', border: 'solid 1px #00000066' }} className="btn text-white btn-career">Learn More</Link>
                                <Link className="btn border text-white btn-career">Sign Up</Link>
                            </span>
                        </div>
                    </div>
                </section>
                {/* ************************************************************************************************************ */}
                <div className=" Page-CareerCoaching" >
                    <section className='FirstSection' id='section2'>

                        <div className=' flex-1 FirstPartOne'>
                            <h5>Enhance</h5>
                            <h1 className='fw-bold'>Unlock Your Potential with Soft Skills Development</h1>
                            <p >At Climate Consulting, we understand the importance of soft skills in the tech industry. Our AI-powered tool CLAIM provides comprehensive support to candidates, helping them optimize their profiles, ace interviews, and develop essential soft skills. With our career coaching service, we guide candidates in determining their career map and offer job opportunities for trained individuals. Additionally, we provide tech bootcamps to further enhance your skills.</p>
                            <div className='row-career gap-2'>
                                <span className='flex-1'>
                                    <h1 className='fw-bold'>50%</h1>
                                    <p >Improved Communication, Collaboration, and Leadership Skills</p>
                                </span>
                                <span className='flex-1'>

                                    <h1 className='fw-bold'>50%</h1>
                                    <p >Increased Employability and Career Advancement Opportunities</p>
                                </span>
                            </div>
                            <div className='row-career mt-3'>
                                <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} to={''} className='btn btn-career'> Learn More </Link>
                                <Link style={{ color: 'rgb(69 90 100)', border: 'solid 1px rgb(69 90 100)' }} to={''} className='btn btn-career'> Sign Up ></Link>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img className='image' src="src/assets/Animations/soft-skills-animate.svg" alt="" />
                        </div>

                    </section>
                    {/* **************************************************************************************** */}
                    <section className=' SecondSection' id='section3'>
                        <div className='flex-1 d-flex flex-column  align-items-center text-center under-secondsection  '>
                            <img className='career-coaching_icon' src="src/assets/Images/opp-careerCoaching.png" alt="" />

                            <div className='d-flex flex-column align-items-center'>
                                <h4 style={{ color: 'rgb(69 90 100)' }}>
                                    Explore Global Job Opportunities with Climate Consulting
                                </h4>
                                <p>
                                    Climate Consulting's global network and partnerships provide a wide range of job opportunities abroad.                            </p>
                                <div></div>
                                <span className='row-career gap-2'>
                                    <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career' to={'/'} >Learn More </Link>
                                    <Link style={{ color: 'rgb(69 90 100)', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career' to={'/'} > Apply Now > </Link>
                                </span>
                            </div>
                        </div>

                        <div className='flex-1 d-flex flex-column  text-center align-items-center under-secondsection'>
                            <img className='career-coaching_icon' src="src/assets/Images/icons8-consulting-50.png" alt="" />
                            <div className='under-secondsection-flex-column d-flex flex-column align-items-center justify-content-between'>
                                <h4 style={{ color: 'rgb(69 90 100)' }}>
                                    Launch Your Freelance Career with Climate Consulting
                                </h4>
                                <p>
                                    Climate Consulting helps aspiring freelancers in IT, Digital Marketing, and Fintech sectors.                            </p>
                                <span className='row-career gap-2'>
                                    <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn' to={'/'} >Learn More </Link>
                                    <Link style={{ color: 'rgb(69 90 100)', border: 'solid 1px rgb(69 90 100)' }} className='btn' to={'/'} > Apply Now > </Link>
                                </span>
                            </div>
                        </div>

                        <div className='flex-1 d-flex flex-column  text-center align-items-center under-secondsection'>
                            <img className='career-coaching_icon' src="src/assets/Images/icons8-school-48.png" alt="" />
                            <div className='d-flex flex-column align-items-center justify-content-between'>
                                <h4 style={{ color: 'rgb(69 90 100)' }}>
                                    Expand Your Skills with Climate School's Training Opportunities
                                </h4>
                                <p>
                                    Climate School offers career coaching, professional reconversion, and continuous training programs.                            </p>
                                <span className='row-career gap-2'>
                                    <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career' to={'/'} >Learn More </Link>
                                    <Link style={{ color: 'rgb(69 90 100)', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career' to={'/'} > Apply Now > </Link>
                                </span>
                            </div>
                        </div>
                        <button id="nextCareerCoaching" >
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1" />
                        </button>
                        <button id="prevCareerCoaching">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" />
                        </button>
                    </section>
                    {/* ******************************************************************************************** */}
                    <section className='ThirdSection' id='section4'>
                        <div className=' w-75 d-flex flex-column  gap-2'>
                            <h5>Unlock</h5>
                            <h1 className='fw-bold'>Personalized Career Coaching to Achieve Success</h1>
                            <p>At Climate Consulting, we offer career coaching services powered by our AI tool CLAIM. Our experienced coaches provide support to tech industry candidates in enhancing their profiles, developing their soft skills, and mapping out their personalized career paths. We also offer job opportunities and tech bootcamps for trained candidates.</p>
                        </div>
                        <div className='mt-5 cards'>
                            <div className='flex-1 d-flex gap-4 align-items-center flex-column text-center'>
                                <img src="src/assets/Images/icons8-steps-58.png" alt="" className='career-coaching_icon' />
                                <span>
                                    <h2>Step-by-Step Career Mapping Process</h2>
                                    <p>Our career coaching process involves a step-by-step approach to help candidates map out their personalized career paths. From assessing their skills and interests to identifying growth opportunities, our coaches provide guidance at every stage.</p>
                                </span>
                            </div>
                            <div className='flex-1 d-flex gap-4  flex-column align-items-center gap-1 text-center'>
                                <img src="src/assets/Images/icons8-cv-64.png" alt="" className='career-coaching_icon' />
                                <span>
                                    <h2>Enhance Your Profile and Soft Skills</h2>
                                    <p>Our coaches assist candidates in optimizing their LinkedIn profiles, portfolios, and interview skills. We also focus on developing their soft skills, such as communication, leadership, and problem-solving abilities.</p>
                                </span>
                            </div>
                            <div className='flex-1 d-flex gap-4  align-items-center flex-column text-center'>
                                <img src="src/assets/Images/icons8-career-path-64.png" alt="" className='career-coaching_icon' />

                                <h2>Discover Your Career Path</h2>
                                <p>We help candidates determine their career map by exploring their interests, strengths, and aspirations. Our coaches provide guidance in aligning their goals with the current tech industry trends.</p>

                            </div>
                        </div>
                        <div className='mt-5 row-career justify-content-center gap-2 w-50'>
                            <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career'>Learn More</Link>
                            <Link style={{ color: 'rgb(69 90 100)', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career'>Sign Up ></Link>
                        </div>
                    </section>
                    {/* ******************************************************************************************************* */}
                    <section className='four-section' id='section5'>

                        <div className=' flex-1 d-flex flex-column  gap-5 four-section-partone '>
                            <img className='career-coaching_icon' src="src/assets/Images/icons8-administrative-tools-50.png" alt="" />

                            <span>
                                <h1>Optimize Your Profile with AI-Powered Tool</h1>
                                <p>At Climate Consulting, we offer career coaching services for the tech industry. Our AI-powered tool, CLAIM, helps candidates enhance their profiles by optimizing their LinkedIn presence, portfolio, and interview skills. We also provide assessments to improve both soft skills and hard skills. With our support, you can create a strong professional brand that stands out in the competitive tech industry.</p>
                                <div className='row-career mt-3 gap-2'>
                                    <Link to={''} style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career'> Learn More </Link>
                                    <Link to={''} style={{ color: 'rgb(69 90 100)', border: 'solid 1px rgb(69 90 100)' }} className='btn btn-career'>Sign Up ></Link>
                                </div>
                            </span>
                        </div>
                        <div className='flex-1'>
                            <img className='image' src="src/assets/Animations/artificial-intelligence-animate.svg" alt="" />
                        </div>

                    </section>
                    {/* ************************************************************************************************** */}
                    <section className='Section-Five' id='section6'>
                        <div className='text-center w-75 d-flex flex-column  gap-1'>
                            <h5>Bootcamp</h5>
                            <h1 className='fw-bold'>Gain Technical Skills Fast</h1>
                            <p>Explore our tech bootcamps for accelerated learning.</p>
                        </div>
                        <div className='cards '>

                            <div className="card" >
                                <img src="src/assets/Animations/visionary-technology-animate.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className='d-flex align-items-baseline gap-0'>
                                        <h5>Tech</h5>
                                        <p style={{ fontSize: '13px', margin: '6px 10px' }}>10 min read</p>
                                    </span>
                                    <span>
                                        <h5 className="card-title">Master the Latest Technologies</h5>
                                        <p className="card-text">Discover our comprehensive tech bootcamps designed to equip you with in-demand skills.</p>
                                    </span>
                                    <Link style={{ color: 'rgb(69 90 100)', padding: '0' }} className="mt-3">Learn More ></Link>
                                </div>
                            </div>
                            <div className="card" >
                                <img src="src/assets/Animations/visionary-technology-animate.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className='d-flex align-items-baseline gap-0'>
                                        <h5>Tech</h5>
                                        <p style={{ fontSize: '13px', margin: '6px 10px' }}>10 min read</p>
                                    </span>
                                    <span>
                                        <h5 className="card-title">Master the Latest Technologies</h5>
                                        <p className="card-text">Discover our comprehensive tech bootcamps designed to equip you with in-demand skills.</p>
                                    </span>
                                    <Link style={{ color: 'rgb(69 90 100)', padding: '0' }} className="mt-3">Learn More ></Link>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center gap-0 w-50 mt-5'>
                            <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn '>View All</Link>

                        </div>
                    </section>
                    {/* *********************************************************************************************** */}
                    <section className='mt-5 pt-5 d-flex flex-column align-items-start gap-5 section-6' id='section7'>
                        <div className='w-100'>
                            <h5>Articles</h5>
                            <h1>Unlock Your Career Potential</h1>
                            <span className='d-flex justify-content-between align-items-center btnDesc'>
                                <p>Discover job opportunities available for trained candidates.</p>
                                <Link style={{ backgroundColor: 'rgb(69 90 100)', color: 'white', border: 'solid 1px rgb(69 90 100)' }} className='btn toview'>View All</Link>
                            </span>
                        </div>
                        <div className='cards'>
                            <div className="card" >
                                <img src="src/assets/Animations/interview-animate.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className='d-flex align-items-baseline gap-0'>
                                        <h5>Category</h5>
                                        <p style={{ fontSize: '13px', margin: '6px 10px' }}>5 min read</p>
                                    </span>
                                    <span>
                                        <h5 className="card-title">How to Ace Job Interviews</h5>
                                        <p className="card-text">Learn valuable tips and techniques to excel in job interviews.</p>
                                    </span>
                                    <Link style={{ color: 'rgb(69 90 100)', padding: '0' }} className="">Read More ></Link>
                                </div>
                            </div>
                            <div className="card" >
                                <img src="src/assets/Animations/portfolio-animate.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className='d-flex align-items-baseline gap-0'>
                                        <h5>Category</h5>
                                        <p style={{ fontSize: '13px', margin: '6px 10px' }}>5 min read</p>
                                    </span>
                                    <span>
                                        <h5 className="card-title">Building a Strong Portfolio</h5>
                                        <p className="card-text">Discover the key elements of a successful tech portfolio.</p>
                                    </span>
                                    <Link style={{ color: 'rgb(69 90 100)', padding: '0' }} className="">Read More ></Link>
                                </div>
                            </div>
                            <div className="card" >
                                <img src="src/assets/Animations/Mastering-skills-animate-.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <span className='d-flex align-items-baseline gap-0'>
                                        <h5>Category</h5>
                                        <p style={{ fontSize: '13px', margin: '6px 10px' }}>5 min read</p>
                                    </span>
                                    <span>
                                        <h5 className="card-title">Mastering Soft Skills</h5>
                                        <p className="card-text">Develop essential soft skills to thrive in the tech industry.</p>
                                    </span>
                                    <Link style={{ color: 'rgb(69 90 100)', padding: '0' }} className="">Read More ></Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* **************************************************************************************************** */}
                    <section className='section-seven' id='section8'>
                        <div className='section-seven-text'>
                            <h1>Unlock Your Tech Career Potential</h1>
                            <p>Get personalized coaching and support to excel in the tech industry.</p>
                            <span className='row-career'>
                                <Link to={''} className='btn btn-seven'>Sign Up ></Link>
                                <Link to={''} className='btn btn-seven-2'> Learn More </Link>
                            </span>
                        </div>
                    </section>
                    {/* *********************************************************************** */}
                    <section className='eighth-section ' id='section9'>


                        <div className='eighth-section-one'>
                            <h1>FAQs</h1>
                            <p>Find answers to frequently asked questions about our Career Coaching program and its outcomes.</p>
                            <Link to={''} className='btn btn-eighth' >Contact</Link>
                        </div>
                        <div className='eighth-section-two'>
                            <select defaultValue="What is Career Coaching?" className="form-select-lg custom-select w-100" aria-label="Large select example">
                                <option disabled value={''}>What is Career Coaching?</option>
                                <option value={''}>One</option>
                                <option value={''}>Two</option>
                                <option value={''}>Three</option>
                            </select>

                            <select defaultValue="How does CLAIM work?" className="form-select-lg custom-select w-100" aria-label="Large select example">
                                <option disabled>How does CLAIM work?</option>
                                <option value={''}>One</option>
                                <option value={''}>Two</option>
                                <option value={''}>Three</option>
                            </select>

                            <select defaultValue="What job opportunities are available?" className="form-select-lg custom-select w-100" aria-label="Large select example">
                                <option disabled>What job opportunities are available?</option>
                                <option value={''}>One</option>
                                <option value={''}>Two</option>
                                <option value={''}>Three</option>
                            </select>

                            <select defaultValue="What are tech bootcamps?" className="form-select-lg custom-select w-100" aria-label="Large select example">
                                <option disabled>What are tech bootcamps?</option>
                                <option value={''}>One</option>
                                <option value={''}>Two</option>
                                <option value={''}>Three</option>
                            </select>

                            <select defaultValue="How can I apply?" className="form-select-lg custom-select w-100" aria-label="Large select example">
                                <option disabled>How can I apply?</option>
                                <option value={''}>One</option>
                                <option value={''}>Two</option>
                                <option value={''}>Three</option>
                            </select>
                        </div>

                    </section>

                </div>
                <Footer FooterColor="#F72E85" FooterTxTColor="#455a64" />
            </div>
        </div>

    )
}

export default Career_Coaching