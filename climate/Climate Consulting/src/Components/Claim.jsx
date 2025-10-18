import React, { useEffect } from 'react'
import '../assets/Css/Claim.css'
import AppNavbar from '../Components/AppNavbar.jsx'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'
import Scroll from './Scroll.jsx'




const Claim = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <AppNavbar textColor="#34E0C3" />
            <Scroll NumOfSections='6' />

            <section className='Top_Claim_Page' id='section1'>
                <div className='section-bg-claim-text'>
                    <h1>Revolutionary Candidate Assessment</h1>
                    <p>Discover the power of CLAIM, an AI-based tool that revolutionizes candidate assessment and career development.</p>

                </div>
            </section>
            <div className='Claim_Page'>
                {/* *********************************************************************************** */}
                <section className='row gap-5 align-items-center justify-content-center' id='section2'>

                    <div className=' flex-1'>
                        <h5>Revolutionize</h5>
                        <h1>Assess and Guide Candidates to Career Success</h1>
                        <p>CLAIM is an AI-based tool that assesses candidates for both soft and hard skills, creates candidate profiles, and assists in creating personalized career coaching roadmaps. With future versions, we plan to offer features such as assessing skills advancement during the coaching phase, diagnosing company HR processes, recommending job descriptions, and facilitating candidate integration.</p>
                        <div className='row gap-4 '>
                            <div className='flex-1 d-flex flex-column under_title_claim gap-3'>
                                <img className='claim_icon' src="src/assets/Icons/icons8-assessment-32.png" alt="" />
                                <span>
                                    <h5 style={{ margin: 0 }}>Assessment Tool</h5>
                                    <p style={{ margin: 0 }}>Assess candidates for both soft and hard skills to identify their strengths and areas for improvement.</p>
                                </span>
                            </div>
                            <div className='flex-1 d-flex flex-column under_title_claim gap-3'>
                                <img className='claim_icon' src="src/assets/Icons/icons8-candidates-66.png" alt="" />
                                <span>
                                    <h5 style={{ margin: 0 }}>Candidate Profiling</h5>
                                    <p style={{ margin: 0 }}>Create detailed profiles of candidates to better understand their qualifications and potential.</p>
                                </span>
                            </div>
                        </div>
                        <div className='row gap-2 mt-4'>
                            <Link to={''} className='btn first-btn-claim'> Learn More </Link>
                            <Link to={''} className='btn second-btn-claim'>Sign Up ></Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img className='image_claim' src="src/assets/Animations/credit-assesment-animate.svg" alt="" />
                    </div>

                </section>
                {/* *********************************************************************************** */}
                <section className='row gap-5 align-items-center justify-content-center' id='section3'>

                    <div className=' flex-1 d-flex flex-column'>

                        <img className='Claim_icon_two' src="src/assets/Icons/icons8-ai-50.png" alt="" />
                        <span className='mt-5'>
                            <h1>Unlock Your Full Potential with CLAIM</h1>
                            <p>CLAIM is an AI-based tool that revolutionizes the way candidates and employers connect. With precise skill assessment, tailored career progression, and enhanced recruitment processes, CLAIM empowers you to reach new heights.</p>
                        </span>
                        <div className='row gap-2'>
                            <Link to={''} className='btn first-btn-claim'> Learn More </Link>
                            <Link to={''} className='btn second-btn-claim'>Sign Up ></Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img className='image_claim' src="src/assets/Animations/processing-thoughts-animate.svg" alt="" />
                    </div>

                </section>
                {/* *********************************************************************************** */}
                <section className='row gap-5 align-items-center justify-content-center' id='section4'>

                    <div className=' flex-1'>

                        <h1>Stay Updated with CLAIM News</h1>
                        <p>Subscribe to our newsletter for the latest updates on CLAIM features and versions.</p>
                        <div >
                            <form action="" className='row align-items-baseline gap-2'>
                                <input class="form-control" type="text" placeholder='Enter your email' />
                                <button type='submit' className='btn first-btn-claim ' >Sign Up</button>
                            </form>
                        </div>
                        <p style={{ fontSize: '12px' }}>By clicking Sign Up, you confirm that you agree to our Terms and Conditions.</p>
                    </div>
                    <div className='flex-1'>
                        <img className='image_claim' src="src/assets/Animations/emails-animate.svg" alt="" />
                    </div>

                </section>
                {/* *********************************************************************************** */}
                <section className=' row gap-5' id='section4'>
                    <h1 className='flex-1'>Anticipated Future Enhancements for CLAIM</h1>
                    <p className='flex-1'>CLAIM is an AI-based tool that assesses candidates for both soft and hard skills, prepares candidate profiling, and assists in creating a career coaching roadmap. In future versions, we plan to add features such as skill certification during coaching, HR process diagnostics, job description recommendations, and facilitation of candidate integration.</p>
                </section>
                {/* *********************************************************************************** */}
                <section className=' d-flex flex-column align-items-center w-100' id='section5'>

                    <div className='Claim-NewCards'>
                        <div class="ClaimCard">
                            <div class="icon">
                                <ion-icon name="globe-outline">
                                    <img className='ClaimCard_icon' src="src/assets/Icons/icons8-certification-48.png" alt="" />
                                </ion-icon>
                            </div>
                            <div class="content">
                                <h4>
                                    Skill Certification During Coaching
                                </h4>
                                <p>
                                    Certify candidates' skill advancements during the coaching phase.
                                </p>

                                <Link className='btn third-btn-claim' to={'/'} >Learn More > </Link>
                            </div>
                        </div>
                        <div class="ClaimCard">
                            <div class="icon">
                                <ion-icon name="globe-outline">
                                    <img className='ClaimCard_icon' src="src/assets/Icons/icons8-test-results-32.png" alt="" />
                                </ion-icon>
                            </div>
                            <div class="content">
                                <h4>
                                    HR Process Diagnostics
                                </h4>
                                <p>
                                    Diagnose company HR processes to improve efficiency and effectiveness.
                                </p>

                                <Link className='btn third-btn-claim' to={'/'} >Learn More > </Link>
                            </div>
                        </div>
                        <div class="ClaimCard">
                            <div class="icon">
                                <ion-icon name="globe-outline">
                                    <img className='ClaimCard_icon' src="src/assets/Icons/icons8-profiles-48.png" alt="" />
                                </ion-icon>
                            </div>
                            <div class="content">
                                <h4>
                                    HR Process Diagnostics
                                </h4>
                                <p>
                                    Diagnose company HR processes to improve efficiency and effectiveness.
                                </p>

                                <Link className='btn third-btn-claim' to={'/'} >Learn More > </Link>
                            </div>
                        </div>
                    </div>



                </section>

                {/* *********************************************************************** */}
                <section className='row gap-5 justify-content-between' id='section6'>

                    <div className='flex-1'>
                        <h1>FAQs</h1>
                        <p>Learn more about the usage, benefits, and technical requirements of CLAIM to make an informed decision.</p>
                        <Link to={''} className='btn first-btn-claim' >Contact</Link>
                    </div>
                    <div className='flex-1 w-100 d-flex flex-column align-items-center gap-1'>
                        <select class="form-select-lg custom-select w-100" aria-label="Large select example">
                            <option selected disabled>How does CLAIM work?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select w-100" aria-label="Large select example">
                            <option selected disabled>What are the future features of CLAIM?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select w-100" aria-label="Large select example">
                            <option selected disabled>How can I contact support?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select w-100" aria-label="Large select example">
                            <option selected disabled>Can CLAIM be customized?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select class="form-select-lg custom-select w-100" aria-label="Large select example">
                            <option selected disabled>Is CLAIM compatible with all devices?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </section>
            </div>
            <Footer FooterColor="#34E0C3" FooterTxTColor="#fff" />
        </div>
    )
}

export default Claim