import React, { useEffect, useState } from 'react'
import '../assets/Css/FreelanceSchool.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Scroll from './Scroll'

const FreelanceSchool = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <div>

      <AppNavbar textColor="#183491" />
      <Scroll NumOfSections='12'/>
      <section className='w-100 Top' id='section1'>
        <div className='In-Top'>
          <div className='In-Top-text'>
            <h5>Empower</h5>
            <h1>Launch Your Career</h1>
            <p>Become a successful freelance tech professional with Climate Freelancing School.</p>
            <span className='row-btns mt-4 '>
              <Link to={''} className='btn first-btn'>Learn More</Link>
              <Link to={''} className='btn' style={{ color: 'white', border: 'solid 1px white', width: '130px' }}>Sign Up</Link>
            </span>
          </div>
        </div>
      </section>
      {/* *********************************************************************************** */}
      <div className=' FreeelanceSchool-Page ' >
        <section className='section-1' id='section2'>
          <div className=' partone'>
            <h1>Empowering Aspiring Freelancers with Specialized Coaching and Training Programs</h1>
            <p>At Climate Freelancing School, we offer a comprehensive coaching and technical training program designed to help aspiring freelancers in the tech sector launch their career. Our program also includes law support to ensure freelancers have a solid foundation for their business.</p>
            <div className='roww'>
              <span className='flex-1'>
                <h5>Coaching Program</h5>
                <p>Our specialized coaching program provides aspiring freelancers with personalized guidance and support.</p>
              </span>
              <span className='flex-1'>
                <h5>Technical Training</h5>
                <p>We offer technical training courses to equip freelancers with the necessary skills and knowledge.</p>
              </span>
            </div>
          </div>
          <div className='parttwo'>
            <img className='image' src="src/assets/Animations/classroom-animate.svg" alt="" />
          </div>
        </section>
        {/* *********************************************************************************** */}
        <section className='section-2' id='section3'>

          <div className=' partone'>
            <h5>Empower</h5>
            <h1>Master the Tech Skills for Freelancing Success</h1>
            <p>At Freelancing School, we provide comprehensive technical training to equip aspiring freelancers in the tech sectors with the necessary industry skills. Our goal is to empower you to launch a successful freelancing career.</p>
            <div className='roww'>
              <span className='flex-1'>
                <img className='mb-2' src="src/assets/Images/icons8-expert-50.png" alt="" />
                <h5>Expert Coaches</h5>
                <p>Learn from industry experts who will guide you through hands-on projects and real-world scenarios.</p>
              </span>
              <span className='flex-1'>
                <img className='mb-2' src="src/assets/Images/icons8-support-50.png" alt="" />
                <h5>Legal Support</h5>
                <p>Get access to legal resources and guidance to ensure compliance and protect your freelance business.</p>
              </span>
            </div>
            <div className='row gap-2 mt-4'>
              <Link to={''} className='btn first-btn'> Enroll </Link>
              <Link to={''} className='btn second-btn'>Learn More ></Link>
            </div>
          </div>
          <div className='parttwo'>
            <img className='image' src="src/assets/Animations/milestones-of-business-projects-animate.svg" alt="" />
          </div>

        </section>
        {/* *********************************************************************************** */}
        <section className='section-3' id='section4'>

          <div className=' partone'>
            <h5>Empowering</h5>
            <h1>Navigating the Legalities of Freelancing</h1>
            <p>At Freelancing School, we understand that legal matters can be overwhelming for aspiring freelancers. That's why we provide comprehensive legal support services to guide you through contracts, taxes, and other legalities, so you can focus on building your freelance career with confidence.</p>
            <div className='row gap-2 mt-4'>
              <Link to={''} className='btn first-btn'> Learn More </Link>
              <Link to={''} className='btn second-btn'> Sign Up ></Link>
            </div>
          </div>
          <div className='parttwo'>
            <img className='image' src="src/assets/Animations/signing-a-contract-animate.svg" alt="" />
          </div>
          =
        </section>
        {/* *********************************************************************************** */}
        <section className='section-4' id='section5'>
          <div className='row'>
            <div className='flex-1'>
              <h5>Launch</h5>
              <h1>Start Your Freelancing Career with Climate School</h1>
            </div>
            <div className='flex-1 ps-4'>
              <p>Enroll in the Freelancing School at Climate School and embark on a transformative journey to become a successful freelancer in the tech sector. Our AI-powered tool, CLAIM, will guide you through the process of enrolling, training, and graduating, ensuring you have the skills and support you need to thrive in the freelance world.</p>
            </div>
          </div>

          <div className='list-NewCards '>
            <div class="NewCard">
              <div class="icon">
                <ion-icon name="globe-outline">
                  <img className='icon-freeLancing' src="src/assets/Images/icons8-freelance-64.png" alt="" />
                </ion-icon>
              </div>
              <div class="content">
                <h2>Enroll in the Freelancing School</h2>
                <p>Join a community of aspiring freelancers and learn from industry experts.</p>
              </div>
            </div>
            <div class="NewCard">
              <div class="icon">
                <ion-icon name="globe-outline">
                  <img className='icon-freeLancing' src="src/assets/Images/icons8-training-50.png" alt="" />
                </ion-icon>
              </div>
              <div class="content">
                <h2>Master In-Demand Tech Skills</h2>
                <p>Gain hands-on experience and technical expertise through our comprehensive training programs.</p>
              </div>
            </div>
            <div class="NewCard">
              <div class="icon">
                <ion-icon name="globe-outline">
                  <img className='icon-freeLancing' src="src/assets/Images/icons8-legal-50.png" alt="" />
                </ion-icon>
              </div>
              <div class="content">
                <h2>Receive Legal Support and Guidance</h2>
                <p>Navigate the legal aspects of freelancing with the help of our experienced legal team.</p>
              </div>
            </div>
          </div>
          <div className='row-btns mt-5'>
            <Link to={''} className='btn first-btn'> Enroll </Link>
            <Link to={''} className='btn second-btn'> Learn More ></Link>
          </div>
        </section>
        {/* ******************************************************************************* */}

        <section className='section-5' id='section6'>

          <div className='flex-1'>
            <h1>FAQs</h1>
            <p>Find answers to the most common questions about the Freelancing School's curriculum, schedule, and outcomes.</p>
            <Link to={''} className='btn second-btn' >Contact</Link>
          </div>
          <div className='flex-1 w-100 d-flex flex-column gap-1 selections'>
            <select className="form-select-lg custom-select w-100" aria-label="Large select example">
              <option selected disabled>How can Climate Consulting help?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select w-100" aria-label="Large select example">
              <option selected disabled>What sectors do you specialize in?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select w-100" aria-label="Large select example">
              <option selected disabled>How can I launch my freelance career?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select w-100" aria-label="Large select example">
              <option selected disabled>What training opportunities are available?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select-lg custom-select w-100" aria-label="Large select example">
              <option selected disabled>Still have questions?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </section>
        {/* ********************************************************************************************* */}
        <section className='section-6' id='section7'>
          <div >
            <h1 className='deg-title'>Launch Your Freelancing Career Today</h1>
            <p>Join our Freelancing School and receive coaching, technical training, and law support.</p>
          </div>
          <div className='row-btns mt-4'>
            <Link to={''} className='btn first-btn'>Sign Up</Link>
            <Link to={''} className='btn second-btn'>Learn More</Link>
          </div>
        </section>
        {/* ********************************************************************************************* */}
        <section className='section-7' id='section8'>
          <div>
            <h1>Success Stories</h1>
            <p>Hear from our past students who have launched successful freelancing careers.</p>
          </div>
          <div className='d-flex mt-4 justify-content-between align-items-center'>
            <span className='card-FrSchool'>
              <p>⭐⭐⭐⭐⭐</p>
              <span>
                <h5>
                  “The Freelancing School provided me with the skills and support I needed to kickstart my career in the tech industry.”
                </h5>
                <img src="src/assets/Images/icons8-profile-picture-50.png" alt="" className="img_profile" />
                <h6 className='mt-2'>John Doe</h6>
                <p className='text-dark-emphasis'>Freelance Developer, Tech Co</p>
              </span>
            </span>
            <span className='card-FrSchool'>
              <p>⭐⭐⭐⭐⭐</p>
              <span>
                <h5>
                  “The Freelancing School provided me with the skills and support I needed to kickstart my career in the tech industry.”
                </h5>
                <img src="src/assets/Images/icons8-profile-picture-50.png" alt="" className="img_profile" />
                <h6 className='mt-2'>John Doe</h6>
                <p className='text-dark-emphasis'>Freelance Developer, Tech Co</p>
              </span>
            </span>
            <span className='card-FrSchool'>
              <p >⭐⭐⭐⭐⭐</p>
              <span>
                <h5>
                  “The Freelancing School provided me with the skills and support I needed to kickstart my career in the tech industry.”
                </h5>
                <img src="src/assets/Images/icons8-profile-picture-50.png" alt="" className="img_profile" />
                <h6 className='mt-2'>John Doe</h6>
                <p className='text-dark-emphasis'>Freelance Developer, Tech Co</p>
                {/* <img src="src/assets/Images/Webflow_logo.svg" alt="" className=" w-25" /> */}
              </span>
            </span>
          </div>
        </section>
        {/* ************************************************************************************************************************ */}
        <section className='section-8' id='section9'>
          <div>
            <h5>Launch</h5>
            <h1>Get in Touch</h1>
            <p>Fill out the form below to contact us.</p>
          </div>
          <form action="" className='d-flex flex-column align-items-center'>
            <div className='formulaire'>
              <div className='flex-1 w-75'>
                <label htmlFor="" className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className='formulaire'>
                <div className='flex-1 w-75'>
                  <label htmlFor="" className="form-label">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className='formulaire'>
              <div className='flex-1 w-75'>
                <label htmlFor="" className="form-label ">Email</label>
                <input type="text" className="form-control " />
              </div>
              <div className='flex-1 w-75'>
                <label htmlFor="" className="form-label">Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className='mt-4 form-select-resp'>
              <label htmlFor="" className="form-label">Choose a Topic</label>
              <select name="" className=' form-select' id="">
                <option value="one" selected disabled>Select One ...</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
              </select>
            </div>
            <div className='mt-5'>
              <p>Which Best Describes You?</p>
              <div className='formulaire'>
                <div className=''>
                  <span className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      First Choice
                    </label>
                  </span>
                  <span className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Third Choice
                    </label>
                  </span>
                  <span className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Fifth Choice
                    </label>
                  </span>
                </div>

                <div className=''>
                  <span className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Second Choice
                    </label>
                  </span>
                  <span className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Fourth Choice
                    </label>
                  </span>
                  <span className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Other
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className='w-100 mt-4'>
              <label htmlFor="" className="form-label">Message</label>
              <textarea type="text" className="form-control" placeholder='Type your message...' rows={5} />
            </div>
            <div className="form-check mt-3 checkinput">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" for="flexCheckDefault">
                I accept the Terms
              </label>
            </div>
            <button type='submit' className='btn first-btn mt-3'> Submit </button>
          </form>
        </section>
        {/* ************************************************************************************************** */}
        <section className='section-9' id='section10'>

          <div className='flex-1 '>
            <h5>Empower</h5>
            <h1>Meet Our Team</h1>
            <p>Discover the talented coaches and legal advisors</p>

          </div>
          <div className='card-coach'>

            <div class="card-wrap">
              <div class="card-header-fr one">
              </div>
              <div class="card-content">
                <h1 class="card-title">John Doe</h1>
                <h4 className='card-grad'>Career Coach</h4>
                <p class="card-text">Passionate about helping aspiring freelancers achieve their goals</p>
                <span className='d-flex gap-1 w-50 mb-2'>
                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>

                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </Link>
                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card-header-fr two">

              </div>
              <div class="card-content">
                <h1 class="card-title">Jane Smith</h1>
                <h4 className='card-grad'>Legal Advisor</h4>
                <p class="card-text">Experienced in providing legal support to freelancers in the tech industry</p>
                <span className='d-flex gap-1 w-50  mb-2'>
                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>

                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </Link>
                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
            <div class="card-wrap">
              <div class="card-header-fr four">

              </div>
              <div class="card-content">
                <h1 class="card-title">Michael Johnson</h1>
                <h4 className='card-grad'>Technical Trainer</h4>
                <p class="card-text">Equipped with extensive knowledge in tech sectors to guide freelancers</p>
                <span className='d-flex gap-1 w-50  mb-2'>
                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>

                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </Link>
                  <Link to={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ backgroundColor: 'white', color: '#183491' }} fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h1>Join Us!</h1>
            <p>Explore exciting career opportunities with our team</p>
            <button className='btn second-btn'>View Openings</button>
          </div>

        </section>
        {/* *********************************************************************************** */}
        <section className='section-10' id='section11'>

          <div className='flex-1 section-10-PartOne'>
            <h5>Empower</h5>
            <h1>Unlock Your Potential in Tech Freelancing</h1>
            <p>Discover the unique advantages of choosing the Freelancing School for your tech sector freelancing career development. Our comprehensive coaching, technical training, and law support will equip you with the skills and knowledge needed to succeed in the freelance world.</p>
            <div className=' row-freelancing'>
              <span className='flex-1'>
                <img className='mb-2' src="src/assets/Images/icons8-popular-man-50.png" alt="" />
                <h5>Expert Guidance</h5>
                <p>Receive personalized coaching from industry experts to accelerate your freelancing journey.</p>
              </span>
              <span className='flex-1'>
                <img className='mb-2' src="src/assets/Images/icons8-writing-skills-50.png" alt="" />
                <h5>Cutting-Edge Skills</h5>
                <p>Gain in-demand technical skills through our hands-on training programs and workshops.</p>
              </span>
            </div>
            <div className='row-btns-fre gap-2 mt-4'>
              <Link to={''} style={{ marginRight: '0.5rem' }} className='btn third-btn'> Learn More </Link>
              <Link to={''} style={{ margin: 0 }} className='btn second-btn'> Sign Up ></Link>
            </div>
          </div>
          <div className='flex-1'>
            <img className='image' src="src/assets/Animations/freelancer-animate.svg" alt="" />
          </div>

        </section>
        {/* ********************************************************************************************* */}
        <section className=' section-11' id='section12'>
          <div className='text-center'>
            <h5>Start</h5>
            <h1>Get in Touch</h1>
            <p>Have a question? Need more information? Contact us now!</p>
          </div>
          <form action="" className=' '>
            <div className='form-content '>
              <label htmlFor="name">Name</label>
              <input className='form-content-input' type="text" />
            </div>
            <div className='form-content pt-2'>
              <label htmlFor="email">Email</label>
              <input className='form-content-input' type="text" />
            </div>
            <div className='form-content pt-2'>
              <label htmlFor="message">Message</label>
              <textarea className='form-content-texterea' type="text" placeholder='Enter your Message...' rows={4} />
            </div>
            <div className='bottom-form pt-4'>
              <span className="form-check d-flex align-items-baseline gap-2">
                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                  I agree to the Terms
                </label>
              </span>
              <button className='first-btn' type='submit'>Submit</button>
            </div>
          </form>
        </section>

      </div>
      <Footer FooterColor="#183491" FooterTxTColor="#fff" />
    </div>

  )
}

export default FreelanceSchool