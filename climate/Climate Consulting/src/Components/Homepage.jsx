import React, { useEffect, useState } from 'react'
import '../assets/Css/Homepage.css'
import { Link, useNavigate } from 'react-router-dom'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import Scroll from './Scroll'





const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // small screen ============
    const [ResponsiveSection, setResponsiveSection] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setResponsiveSection(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigate = useNavigate();

    const onClickExplore = () => {
        navigate('/climate_hr')
    }

    const onClickSignUp = () => {
        navigate('/sign_up')
    }

    const onClickSignIn = () => {
        navigate('/sign_in')
    }


    

    // css for text animation
    const [opacity1, setOpacity1] = useState(1);
    const [opacity2, setOpacity2] = useState(0);
    const [opacity3, setOpacity3] = useState(0);

    useEffect(() => {
        const firstTitleElement = document.getElementById('first-title');
        const secondTitleElement = document.getElementById('second-title');
        const thirdTitleElement = document.getElementById('third-title');

        firstTitleElement.addEventListener('animationend', () => {
            setOpacity2(1);
        });

        secondTitleElement.addEventListener('animationend', () => {
            setOpacity3(1);
        });

        return () => {
            firstTitleElement.removeEventListener('animationend', () => { });
            secondTitleElement.removeEventListener('animationend', () => { });
        };
    }, []);

    // js card slider

    useEffect(() => {

        const items2 = document.querySelectorAll('.climate-helping .under-helping');
        let next2 = document.getElementById('next2');
        let prev2 = document.getElementById('prev2');
        let active2 = 1;



        const loadShow2 = () => {
            let stt2 = 0;

            if (items2[active2]) {

                items2[active2].style.transform = `none`;
                items2[active2].style.zIndex = 1;
                items2[active2].style.filter = 'none';
                items2[active2].style.opacity = 1;
                items2[active2].style.visibility = 'visible'
            }
            for (let j = active2 + 1; j < items2.length; j++) {

                if (items2[j]) {
                    stt2++;
                    items2[j].style.transform = `translateX(${200 * stt2}px) scale(${1 - 0.2 * stt2}) perspective(16px) rotateY(-1deg)`;
                    items2[j].style.zIndex = -stt2;
                    items2[j].style.filter = 'blur(5px)';                  
                    items2[j].style.opacity = stt2 > 2 ? 0 : 0.6;
                    window.innerWidth < 992 ?
                    items2[j].style.visibility = 'hidden' : items2[j].style.visibility = 'visible';
                }
            }
            stt2 = 0;
            for (let j = active2 - 1; j >= 0; j--) {
                stt2++
                
                items2[j].style.transform = `translateX(${-200 * stt2}px) scale(${1 - 0.2 * stt2}) perspective(16px) rotateY(1deg)`;
                items2[j].style.zIndex = -stt2;
                items2[j].style.filter = 'blur(5px)';
                items2[j].style.opacity = stt2 > 2 ? 0 : 0.6;
                window.innerWidth < 992? items2[j].style.visibility = 'hidden' : items2[j].style.visibility = 'visible';
            }
        };

        loadShow2();

        next2.onclick = () => {
            active2 + 1 < items2.length ? active2 = active2 + 1 : active2 = active2;
            loadShow2();
        };

        prev2.onclick = () => {
            active2 - 1 >= 0 ? active2 = active2 - 1 : active2 = active2;
            loadShow2();
        };
    }, [])





    return (
        <div className='home-content' >


            <AppNavbar textColor="#2B1344" />
            <Scroll NumOfSections='6'/>

            <div id='section1' className='cover' >
                <div className='empowering-Careers'>
                    <h2 id='first-title' style={{ opacity: opacity1 }} data-text-1="Empowering Careers ">Empowering Careers </h2>
                    <h2 id='second-title' style={{ opacity: opacity2 }} data-text-2="Through Cutting-edge Tech Training ">Through Cutting-edge Tech Training </h2>
                    <h2 id='third-title' style={{ opacity: opacity3 }} data-text-3="and Career Development Solutions ">and Career Development Solutions </h2>
                </div>     
            </div>

            {/* ************************************************ */}
            <div className='main'>

                <section id="section2" className=' climate-hr'>
                    <div className='hr-description flex-1'>
                        <h1 >
                            Discover the Power of Climate HR Services for Talent Acquisition
                            and Integration
                        </h1>
                        <p>At Climate Consulting, we offer Link range of HR services to help businesses and recruiters find and integrate top talent. Our comprehensive solutions include talent acquisition, employee assessment, integration support, professional training, and subcontracting. With our AI-powered tool, CLAIM, we ensure the best matching between candidates and job opportunities.</p>
                        <div className='under-title'>
                            <span >
                                <h5>Talent Acquisition</h5>
                                <p>Find the right candidates for your organization
                                    with our efficient talent acquisition strategies.</p>
                            </span>
                            <span>
                                <h5>Employee Assessment</h5>
                                <p>Evaluate the skills and capabilities of your employees
                                    with our comprehensive assessment tools.</p>
                            </span>
                        </div>
                    </div>
                    <img className='climate-icon flex-1' src="src/assets/Animations/business-growth-animate.svg" alt="" />


                </section>

                {/* ********************************************************************************** */}

                <section id="section3" className='climate-helping-section'>
                    <h1 style={{ textAlign: 'center' }} >Climate HR: Helping businesses and recruiters
                        with talent acquisition, assessment, integration and professional training.</h1>
                        <div className='climate-helping'>
                            <div className='under-helping'>
                                <img className='cube_icon-HP' src="src/assets/Icons/work_icon.png" alt="" />
                                <h5>Climate Careers: Job opportunities in Tunisia, abroad, and remote work.</h5>
                                <p>Find the perfect job opportunity that suits your needs and preferences.</p>
                                <Link className='linkLearn' to={'/climate_careers'} >Learn More </Link>
                            </div>

                            <div className='under-helping'>
                                <img className='cube_icon-HP' src="src/assets/Icons/school_icon.png" alt="" />
                                <h5>Climate School: Tech bootcamps, career coaching, and freelance school.</h5>
                                <p>Acquire new skills, enhance your career, or start freelancing.</p>
                                <Link className='linkLearn' to={'/climate_school'} >Learn More </Link>
                            </div>

                            <div className='under-helping'>
                                <img className='cube_icon-HP' src="src/assets/Icons/jobop_icon.png" alt="" />
                                <h5>Climate HR: Helping businesses and recruiters with talent acquisition, assessment, integration, and professional training.</h5>
                                <p>Find the perfect job opportunity that suits your needs and preferences.</p>
                                <Link className='linkLearn' to='/climate_hr' >Learn More </Link>
                            </div>
                            <button id="next2" >
                                <img width="50" height="50" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1" />
                            </button>
                            <button id="prev2">
                                <img width="50" height="50" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" />
                            </button>
                        </div>
                </section>

                {/* **************************************************************************************** */}
                <section id='section4' className='tech-btc'>
                    <h1 className='flex-1'>Tech Bootcamps</h1>
                    <div className='slider flex-1 '>
                        <div className='tech-card'>
                            <img className='cube_icon-HP mb-4' src="src/assets/Icons/bootcamp_icon.png" alt="" />
                            <h4>
                                Tech Bootcamps
                            </h4>
                            <p>
                                Our tech bootcamps provide intensive training in cutting-edge technologies.
                            </p>
                            <Link className='linkLearn' to={'/tech_bootcamps'} >Learn More </Link>
                        </div>

                        <div className='tech-card'>
                            <img className='cube_icon-HP mb-4' src="src/assets/Icons/coaching_icon.png" alt="" />
                            <h4>
                                Career Coaching
                            </h4>
                            <p>
                                Our career coaching program helps individuals navigate their professional paths and achieve their goals.
                            </p>
                            <Link className='linkLearn' to={'/career_coaching'} >Learn More </Link>
                        </div>

                        <div className='tech-card'>
                            <img className='cube_icon-HP mb-4' src="src/assets/Icons/freelanceschool_icon.png" alt="" />
                            <h4>
                                Freelance School
                            </h4>
                            <p>
                                Our freelance school equips individuals with the skills and knowledge needed to succeed as freelancers.
                            </p>
                            <Link className='linkLearn' to={'/freelancing_school'} >Learn More </Link>
                        </div>
                        
                    </div>
                </section>
                {/* ************************************************************** */}
                <section id='section5' className='climate-consulting'>
                    <div className='consulting-description flex-1'>
                        <div>
                            <img className='cube_icon-HP' src="src/assets/Icons/bussiness_icon.png" alt="" />
                        </div>
                        <div>
                            <h2>
                                Unlock Your Business Potential with Climate Consulting's Comprehensive Services

                            </h2>
                            <p>Climate Consulting provides Link range of services tailored to businesses, recruiters, and job seekers.
                                With Climate HR, we assist in talent acquisition, assessment, employee integration, and professional training. Our AI-powered tool, CLAIM, ensures the best matching for your hiring needs.
                                Climate Careers offers job opportunities in Tunisia, abroad, and remote work. Climate School provides tech bootcamps,
                                career coaching and freelance school for continuous learning and growth.</p>
                        </div>
                    </div>
                    <img className='climate-icon flex-1' src="src/assets/Animations/business-support-animate.svg" alt="" />

                </section>
                {/* ************************************************************************************** */}
                <section id='section6' className='two-section'>
                    <div className='hr-solutions'>
                        <div>
                            <h1>Discover Our HR Solutions</h1>
                            <p>Unlock Your Career Potential Today</p>
                        </div>
                        <div className='btn-exp-sign'>
                            <Link className='btn btn-explore' onClick={onClickExplore}>Expolore</Link>
                            <Link className='btn btn-sign flex-1' onClick={onClickSignUp}>Sign Up</Link>
                        </div>
                    </div>
                    {/* ************************************************************************************ */}
                    <div className='Trust mt-5'>
                        <h4>Trusted by top companies around the globe</h4>
                        <div className='trustby'>
                            <img src="src/assets/Images/Webflow_logo.svg" alt="" />
                            <img src="src/assets/Images/relume_logo.png" alt="" />
                            <img src="src/assets/Images/Webflow_logo.svg" alt="" />
                            <img src="src/assets/Images/relume_logo.png" alt="" />
                            <img src="src/assets/Images/Webflow_logo.svg" alt="" />
                            <img src="src/assets/Images/relume_logo.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer FooterColor="#2B1344" FooterTxTColor="#ff1c77" />
        </div>
    )
}

export default Homepage