import React, { useEffect, useState } from 'react'
import AppNavbar from './AppNavbar'
import '../assets/Css/ClimateSchool.css'
import { Link } from 'react-router-dom'
import { Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Scroll from './Scroll';


const Climate_School = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <AppNavbar textColor="#621656" />
      <Scroll NumOfSections='12' />
      <section className='section-content' id='section1'>
        <div className='bg-dark-transparent'>
          <div className='flex-1'>
            <p>Find</p>
            <h2>
              Fullfill Your Potential
            </h2>
          </div>
          <div className='flex-1'>
            <p>
              Welcome to Climate School, the premier training division of Climate Consulting. We specialize in providing top-notch
              training in the tech fields of Development,
              Digital Marketing, and Fintech.
              Our assessment-oriented approach, powered by our AI-based
              tool "CLAIM", helps us identify the strengths of each candidate's
              profile and work on their weaknesses. Whether you're looking for technical skills support, career reconversion, or freelancing opportunities,
              we have the right training program for you.
            </p>
            <span className=' gap-2 row'>
              <Link className='btn btn-1' to={'/'}> Explore </Link>
              <Link className='btn btn-2' to={'/'}>Learn More</Link>
            </span>
          </div>
        </div>
      </section>
      {/* ******************************************************************************** */}
      <div className='SchoolPage'>

        <section className='tech-btc-section' id='section2'>
          <h1>Tech Bootcamps</h1>
          <div className='tech-btc-cards'>
            <div className='tech-btc-card'>
              <img className='TechBTC_icon' src="src/assets/Icons/icons8-camp-66.png" alt="" />
              <span>
                <h4>
                  Tech Bootcamps
                </h4>
                <p>
                  Our Tech Bootcamps provide comprehensive technical skills support and career reconversion opportunities.
                </p>
                <Link to={'/'} className='btn btn-LearnMore' >Learn More </Link>
              </span>
            </div>

            <div className='tech-btc-card'>
              <img className='TechBTC_icon' src="src/assets/Icons/icons8-school-48.png" alt="" />
              <h4>
                Freelancing School
              </h4>
              <p>
                Join our Freelancing School to learn how to succeed as a freelance professional in the tech industry.
              </p>
              <Link to={'/'} className='btn btn-LearnMore' >Learn More </Link>
            </div>

            <div className='tech-btc-card'>
              <img className='TechBTC_icon' src="src/assets/Icons/icons8-internship-50.png" alt="" />
              <h4>
                Career Coaching
              </h4>
              <p>
                Our Career Coaching program offers personalized guidance and support to help you achieve your professional goals.
              </p>
              <Link to={'/'} className='btn btn-LearnMore' >Learn More </Link>
            </div>
          </div>
        </section>
        {/* *************************************************************** */}

        <section className='tech_skills_section' id='section3'>
          <div className='flex-1'>
            <div className='training'>
              <h5>Empower</h5>
              <h2>Enhance Your Tech Skills and Career</h2>

              <p>Discover our Tech Bootcamps, designed to provide specialized training
                and support for skill enhancement and career conversion in various tech domains.
                Our AI-based tool "CLAIM" assesses your profile, identifying your strengths and weaknesses,
                allowing us to tailor the training to your specific needs. With our comprehensive programs,
                you can gain the knowledge and expertise required to thrive in the tech industry.</p>
              <span className='row gap-2 align-items-center'>
                <Link className=' btn First-btn-CLSCH' to={'#'}>Learn More</Link>
                <Link className=' btn Second-btn-CLSCH ' to={'#'}>Sign Up > </Link>
              </span>

            </div>
          </div>
          <div className='flex-1 w-100'>
            <img className='image_CLSCH' src="src/assets/Animations/robotics-animate.svg" alt="" />
          </div>

        </section>
        {/* ****************************************************************************** */}
        <section >
          <div className='coach-serv' id='section4'>
            <div className="flex-1">
              <h5>Transform</h5>
              <h1>Unlock Your Potential with Career Coaching Services</h1>
            </div>
            <div className="flex-1">
              <p>
                At Climate School, we offer personalized career coaching services to help you navigate
                your career path in the climate sector.
                Our team of experienced coaches will work closely with you to assess your strengths
                and identify areas for improvement.
                Through our AI-based tool, CLAIM, we provide valuable insights into your profile, allowing us to tailor our coaching sessions to your specific needs.
                Whether you're looking to enhance your technical skills, explore new career opportunities, or transition into the climate sector,
                our career coaching services will empower you to achieve your goals.
              </p>
              <span className='row p-2 gap-2'>
                <Link className='btn First-btn-CLSCH' to={'#'}>Learn More</Link>
                <Link className='btn Second-btn-CLSCH' to={'#'}>Sign Up > </Link>
              </span>
            </div>

          </div>
        </section>

        {/* *********************************************************************************** */}
        <section className='tech_profesional ' id='section5'>
          <div className='flex-1'>
            <div className='training'>
              <h5>Empower</h5>
              <h2>Become an Independent Tech Climate Professional</h2>

              <p>Our Freelancing School is designed to empower individuals for independent work in the tech and climate space. With our comprehensive training programs, you'll gain the skills and knowledge needed to thrive as a freelancer in the ever-evolving tech industry.</p>
              <span className='row gap-2'>
                <img className='cube_small' src='src/assets/Icons/icons8-technological-64.png' />
                <p>Comprehensive training programs for tech and climate freelancers</p>
              </span>
              <span className='row  gap-2'>
                <img className='cube_small' src='src/assets/Icons/icons8-new-50.png' />
                <p>Master the latest tech and climate trends</p>
              </span>
              <span className='row gap-2'>
                <img className='cube_small' src='src/assets/Icons/icons8-professional-50.png' />
                <p>Unlock your potential as an independent professional</p>
              </span>
              <span className='row mt-3 gap-2'>
                <Link className='btn First-btn-CLSCH' to={'#'}>Learn More</Link>
                <Link className='btn Second-btn-CLSCH' to={'#'}>Sign Up > </Link>
              </span>

            </div>
          </div>
          <div className='flex-1'>
            <img src="src/assets/Animations/work-in-progress-animate.svg" alt="" className='image_CLSCH' />
          </div>
        </section>
        {/* *********************************************************************************** */}
        <section className='Assessment   ' id='section6'>
          <div className='Assessment-PartOne'>
            <h5>Discover</h5>
            <h1>Unleash Your Potential with Climate School's Assessment Process</h1>

            <span className='row gap-2 mt-3'>
              <Link className='btn First-btn-CLSCH' to={'#'}>Learn More</Link>
              <Link className='btn Second-btn-CLSCH' to={'#'}>Get Started > </Link>
            </span>
          </div>

          <div className='Assessment-PartTwo'>
            <div className='Assessment-Items'>
              <span className='Assessment-Items-icons'>
                <img src="src/assets/Icons/icons8-inspection-64.png" alt="" className='Assessment-icons' />
                <div className="vertical-line"></div>
              </span>
              <span >
                <h5>Assessment</h5>
                <p>Our AI-based tool "CLAIM" assesses candidates to identify strenghs and areas for improvement</p>
              </span>
            </div>
            <div className='Assessment-Items'>
              <span className='Assessment-Items-icons'>
                <img src="src/assets/Icons/icons8-training-64.png" alt="" className='Assessment-icons' />
                <div className="vertical-line"></div>
              </span>
              <span>
                <h5>Training</h5>
                <p>Choose from our tech bootcamps, career coaching, or freelancing school.</p>
              </span>
            </div>
            <div className='Assessment-Items'>
              <span className='Assessment-Items-icons'>
                <img src="src/assets/Icons/icons8-new-job-50.png" alt="" className='Assessment-icons' />
                <div className="vertical-line"></div>
              </span>
              <span>
                <h5>Job Opportunities</h5>
                <p>Explore job opportunities in the tech industry through Climate Careers.</p>
              </span>
            </div>
            <div className='Assessment-Items'>
              <span className='Assessment-Items-icons'>
                <img src="src/assets/Icons/icons8-potential-99.png" alt="" className='Assessment-icons' />
              </span>
              <span>
                <h5>Unlock Your Potential</h5>
                <p>Join Climate School and unlock your potential in the tech fields.</p>
              </span>
            </div>
          </div>
        </section>
        {/* ****************************************************************************************** */}
        <section className='tech_profesional ' id='section7'>
          <div className='flex-1'>
            <div className='training'>
              <h5>Tailored</h5>
              <h2>Unlock Your Potential with Climate School's Training</h2>

              <p>At Climate School, we believe in a tailored training approach that focuses on your unique strengths and helps you overcome any weaknesses. Our AI-based tool, CLAIM, assesses your profile to determine your strengths and areas for improvement. With our comprehensive training programs, including tech bootcamps, career coaching, and freelancing school, you'll gain the skills and knowledge needed to advance your career in the tech fields of Dev, digital marketing, and fintech.</p>
              <span className='row gap-2 '>
                <img className='cube_small' src='src/assets/Icons/icons8-training-50.png' />
                <p>Personalized Training Plans</p>
              </span>
              <span className='row gap-2 '>
                <img className='cube_small' src='src/assets/Icons/icons8-guidance-99.png' />
                <p>Expert Career Guidance</p>
              </span>
              <span className='row gap-2'>
                <img className='cube_small' src='src/assets/Icons/icons8-problem-solving-skills-50.png' />
                <p>Master In-Demand Tech Skills</p>
              </span>
              <span className='row gap-2 gap-2 mt-3'>
                <Link className='btn First-btn-CLSCH' to={'#'}>Learn More</Link>
                <Link className='btn Second-btn-CLSCH' to={'#'}>Sign Up > </Link>
              </span>

            </div>
          </div>
          <div className='flex-1'>
            <img src="src/assets/Animations/business-plan-animate.svg" alt="" className='image_CLSCH' />
          </div>
        </section>
        {/* *************************************************************************** */}

        <section className='Path-techcareer' id='section8'>
          <div className='flex-1'>
            <h1>
              Discover Your Tech Career Path
            </h1>
            <p>
              Assess your strengths, improve your weaknesses, and find the perfect training program.
            </p>
            <span className='row mt-3 gap-2'>
              <Link className='btn First-btn-CLSCH' to={'#'}>Get Started</Link>
              <Link className='btn Second-btn-CLSCH' to={'#'}>Learn More </Link>
            </span>
          </div>
          <div className='flex-1'>
            <img src="src/assets/Animations/on-the-way-animate.svg" className='image_CLSCH' alt="" />
          </div>
        </section>
        {/* ***************************************************************************** */}
        <section className='Exp_opportunities' id='section9'>
          <div className='flex-1'>
            <h5>Unlock</h5>
            <h2>Explore Opportunities</h2>

            <p>Discover job openings in the tech fields of Dev, digital marketing, and fintech.</p>
          </div>
          <div className='flex-1 row w-100 p-0 m-0 class-drop'>

            <Dropdown className='w-100'>
              <Dropdown.Toggle variant="" id="dropdown-basic" className='DropDown w-75'>
                <h2>Development</h2>
              </Dropdown.Toggle>

              <Dropdown.Menu className='w-100 '>
                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100  w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>
                  <p>Join our team and work on exciting projects in a fast-paced and <br /> innovative environment.</p>
                </Dropdown.Item>

                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100  w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>

                  <p>Take your career to new heights with our comprehensive training programs <br /> and mentorship opportunities.</p>

                </Dropdown.Item>

                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>

                  <p>Join our team of experts and gain valuable skills and experience in the tech industry.</p>

                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='w-100'>
              <Dropdown.Toggle variant="" id="dropdown-basic" className='DropDown w-75'>
                <h2>Digital Marketing</h2>
              </Dropdown.Toggle>

              <Dropdown.Menu className='w-100'>
                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100  w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>
                  <p>Join our team and work on exciting projects in a fast-paced and <br /> innovative environment.</p>
                </Dropdown.Item>
                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100  w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>

                  <p>Take your career to new heights with our comprehensive training programs <br /> and mentorship opportunities.</p>

                </Dropdown.Item>
                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>

                  <p>Join our team of experts and gain valuable skills and experience in the tech industry.</p>

                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='w-100'>
              <Dropdown.Toggle variant="" id="dropdown-basic" className='DropDown w-75'>
                <h2>Fintech</h2>
              </Dropdown.Toggle>

              <Dropdown.Menu className='w-100'>
                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>
                  <p>Join our team and work on exciting projects in a fast-paced and <br /> innovative environment.</p>
                </Dropdown.Item>

                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100  w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>

                  <p>Take your career to new heights with our comprehensive training programs <br /> and mentorship opportunities.</p>

                </Dropdown.Item>

                <Dropdown.Item as="div" className=''>
                  <div className='d-flex justify-content-between align-items-center w-100'>
                    <span>
                      <h6>Job Title</h6>
                      <p>Location</p>
                    </span>
                    <Link to="/" className="btn btn-outline-secondary">Apply Now</Link>
                  </div>

                  <p>Join our team of experts and gain valuable skills and experience in the tech industry.</p>

                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </section>
        {/* ******************************************************************************* */}

        <section className='answers-section' id='section10'>

          <div className='answers-top'>
            <h1>FAQs</h1>
            <p>Find answers to frequently asked questions about the job search process and how Climate Consulting can assist.</p>
          </div>
          <div className='d-flex flex-column align-items-center gap-2 w-100'>
            <select className="form-select-lg custom-select width-select" aria-label="Large select example">
              <option selected disabled>How can Climate Consulting help?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select width-select" aria-label="Large select example">
              <option selected disabled>What sectors do you specialize in?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select width-select" aria-label="Large select example">
              <option selected disabled>How can I launch my freelance career?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select width-select" aria-label="Large select example">
              <option selected disabled>What training opportunities are available?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select width-select" aria-label="Large select example">
              <option selected disabled>Still have questions?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>Get in touch with our team for assistance.</p>
            <Link className='btn First-btn-CLSCH'>Contact</Link>
          </div>

          <div className='mt-5 d-flex '>
            <span className='flex-2'>
              <h2>Still have questions?</h2>
              <p>Contact us for further assistance.</p>
              <Link className="btn Second-btn-CLSCH">Apply Now</Link>
            </span>
          </div>

        </section>
        {/* *************************************************************************** */}

        <section className='Rate_Climateschool' id='section11'>
          <div className='flex-1'>
            <img src="src/assets/Images/logo.png" className='CLSCH_Logo' alt="" />
          </div>
          <div className='flex-1'>
            <h3>⭐⭐⭐⭐⭐</h3>
            <h2>
              Climate School has been a game-changer for me. The hands-on training and personalized coaching helped me excel in the tech industry.
            </h2>
            <p>
              Assess your strengths, improve your weaknesses, and find the perfect training program.
            </p>
            <div className='d-flex  justify-content-between align-items-center'>
              <div className='flex-1'>
                <h5>John Doe</h5>
                <p>Senior Developer, Tech Co</p>
              </div >
            </div>
          </div>
        </section>

        {/* ********************************************************************************************************************************************* */}

        <section className='stay-informed' id='section12'>
          <div className='flex-1'>
            <h1>
              Stay Informed with Climate School
            </h1>
            <p>
              Subscribe for the latest news on tech training, career tips, and job openings.
            </p>
            <form action="" className='form-stay-info'>
              <input type="text" placeholder='Enter your email' className="form-control mb-3" name='email' />
              <button type="submit" className="btn First-btn-CLSCH">Get Started</button>
            </form>
            <p className='school_p'>By clicking Sign Up, you confirm that you agree with our Terms and Conditions.</p>
          </div>
          <div className='flex-1'>
            <img src="src/assets/Animations/email-campaign-animate.svg" className='image_CLSCH' alt="" />
          </div>
        </section>
      </div>
      <Footer FooterColor="#621656" FooterTxTColor="#fff" />
    </div>
  )
}

export default Climate_School