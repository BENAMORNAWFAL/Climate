import React, { useEffect, useState } from 'react'
import '../assets/Css/About.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from './Scroll'


const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //================================================ css for title animation
    const [opacityoftitle, setOpacityoftitle] = useState(1);
    const [opacityoftitle2, setOpacityoftitle2] = useState(0);
    const [opacityoftitle3, setOpacityoftitle3] = useState(0);


    useEffect(() => {
        const firstTitleElement = document.getElementById('title-About');
        const secondTitleElement = document.getElementById('paragraph-About');
        firstTitleElement.addEventListener('animationend', () => {
            setOpacityoftitle2(1);
        });
        secondTitleElement.addEventListener('animationend', () => {
            setOpacityoftitle3(1);
        });
        return () => {
            firstTitleElement.removeEventListener('animationend', () => { });
            secondTitleElement.removeEventListener('animationend', () => { });
        };
    }, []);

    return (
        <div >
            <AppNavbar textColor="#2B1344" />
            <Scroll NumOfSections='6' />
            <section className='Top-About' id='section1'>
                <div className='text-About'>
                    <h1 id='title-About' style={{ opacity: opacityoftitle }} data-text-one='Empowering Innovation Through Education'>Empowering Innovation Through Education</h1>
                    <p id='paragraph-About' style={{ opacity: opacityoftitle2 }} data-text-two='At Climate : The Experiment, we are committed to addressing tech innovation'>At Climate : The Experiment, we are committed to addressing tech innovation</p>
                    <p style={{ opacity: opacityoftitle3 }} data-text-three='through education and career opportunities'>through education and career opportunities.</p>

                </div>
            
        </section>
            {/* *********************************************************************************** */ }
            <div className='About-Page' >
                <section className='Placeholder' id='section2'>

                    <div className=' flex-1'>

                        <h1>Placeholder</h1>
                        <p>Climate: The Experiment is a start-up in HR solutions that was founded with a vision to revolutionize the way people find employment. With a focus on climate-related careers, we aim to connect talented individuals with opportunities that contribute to a sustainable future. Our journey as a start-up has been driven by our founding principles of innovation, inclusivity, and environmental stewardship.</p>

                    </div>
                    <div className='flex-1'>
                        <img className='image-about' src="src/assets/Animations/tech-company-animate.svg" alt="" />
                    </div>

                </section>
                {/* **************************************************************************************** */}
                <section className='d-flex flex-column gap-5 Team-section' id='section3'>
                    <div className='Team-Top'>
                        <h5>Innovators</h5>
                        <h1>Meet Our Team</h1>
                        <p>Get to know the leaders behind Climate: The Experiment</p>
                    </div>
                    <div className='row gap-5'>
                        <div className='Team-Contacts'>
                            <div class="card-team">
                                <div class="header-card">
                                    <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" />
                                    <h2>John Doe</h2>
                                    <h4>CEO</h4>
                                </div>
                                <div class="body-card">
                                    <p>
                                        John Doe is a visionary leader with extensive experience in tech innovation
                                    </p>
                                </div>
                                <div class="footer-card">
                                    <ul>

                                        <li>
                                            <a href="/twitter">
                                                <i class="fab">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/dribble">
                                                <i class="fab " >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="fab ">
                                                <a href="/linkedin">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path style={{ color: 'white', backgroundColor: '' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                    </svg>
                                                </a>
                                            </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-team">
                                <div class="header-card">
                                    <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" />
                                    <h2>Jane Smith</h2>
                                    <h4>CTO</h4>
                                </div>
                                <div class="body-card">
                                    <p>
                                        John Doe is a visionary leader with extensive experience in tech innovation
                                    </p>
                                </div>
                                <div class="footer-card">
                                    <ul>

                                        <li>
                                            <a href="/twitter">
                                                <i class="fab">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/dribble">
                                                <i class="fab " >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="fab ">
                                                <a href="/linkedin">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path style={{ color: 'white', backgroundColor: '' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                    </svg>
                                                </a>
                                            </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card-team">
                                <div class="header-card">
                                    <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" />
                                    <h2>David Johnson</h2>
                                    <h4>COO</h4>
                                </div>
                                <div class="body-card">
                                    <p>
                                        John Doe is a visionary leader with extensive experience in tech innovation
                                    </p>
                                </div>
                                <div class="footer-card">
                                    <ul>

                                        <li>
                                            <a href="/twitter">
                                                <i class="fab">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/dribble">
                                                <i class="fab " >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <i class="fab ">
                                                <a href="/linkedin">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path style={{ color: 'white', backgroundColor: '' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                    </svg>
                                                </a>
                                            </i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='Team-Contacts'>
                        <div class="card-team">
                            <div class="header-card">
                                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" />
                                <h2>Sarah Williams</h2>
                                <h4>CFO</h4>
                            </div>
                            <div class="body-card">
                                <p>
                                    Sarah Williams oversees financial planning and ensures sustainable growth for the company
                                </p>
                            </div>
                            <div class="footer-card">
                                <ul>

                                    <li>
                                        <a href="/twitter">
                                            <i class="fab">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dribble">
                                            <i class="fab " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fab ">
                                            <a href="/linkedin">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path style={{ color: 'white', backgroundColor: '' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                </svg>
                                            </a>
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="card-team">
                            <div class="header-card">
                                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" />
                                <h2>Michael Brown</h2>
                                <h4>CMO</h4>
                            </div>
                            <div class="body-card">
                                <p>
                                    Michael Brown leads our marketing efforts and drives brand awareness and engagement
                                </p>
                            </div>
                            <div class="footer-card">
                                <ul>

                                    <li>
                                        <a href="/twitter">
                                            <i class="fab">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dribble">
                                            <i class="fab " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fab ">
                                            <a href="/linkedin">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path style={{ color: 'white', backgroundColor: '' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                </svg>
                                            </a>
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="card-team">
                            <div class="header-card">
                                <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png" />
                                <h2>We're hiring!</h2>
                                <h4>Join us</h4>
                            </div>
                            <div class="body-card">
                                <p>
                                    Explore our open positions and be part of our innovative team
                                </p>
                            </div>
                            <div class="footer-card">
                                <ul>

                                    <li>
                                        <a href="/twitter">
                                            <i class="fab">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dribble">
                                            <i class="fab " >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fab ">
                                            <a href="/linkedin">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path style={{ color: 'white', backgroundColor: '' }} d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                </svg>
                                            </a>
                                        </i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='Bottom-team-contact'>
                        <h1>We're hiring!</h1>
                        <p>Join our team and make a difference in the climate industry.</p>
                        <Link className='btn First-btn-About'>View positions</Link>
                    </div>
                </section>
                {/* **************************************************************************************** */}
                <section className='About-Certifications' id='section4'>
                    <div className='flex-1'>
                        <h1>Awards and Recognitions</h1>
                        <p>Discover the awards and recognitions received by "climate : the experiment" for its contributions to the sector.</p>
                        <span className='row gap-2'>
                            <Link className='btn First-btn-About'>Learn More</Link>
                            <Link className='btn Second-btn-About'>Sign Up ></Link>
                        </span>
                    </div>
                    <div className=' flex-1'>
                        
                            <img className='image-about' src="src/assets/Animations/certification-animate.svg"  alt="" />
                        

                    </div>
                </section>

                {/* ************************************************************************************** */}
                {/* <section className='d-flex align-items-center gap-2'>
                    <div className='flex-1'>
                        <video src="src/assets/Images/career-coaching.jpg"></video>
                    </div>
                    <div className='flex-1'>
                        <h1>⭐⭐⭐⭐⭐</h1>
                        <h3>
                            Climate : The Experiment has been a game-changer for my career and education. It provided me with invaluable knowledge and opportunities to grow.
                        </h3>

                        <div className='d-flex  justify-content-between '>
                            <div className='flex-1'>
                                <h5>John Doe</h5>
                                <p>Marketing Manager, XYZ Corp</p>
                            </div >
                            
                        </div>

                    </div>


                </section> */}
                {/* ******************************************************************************************** */}
                <section className='section-bg-claim ' id='section5'>
                    
                   
                        <h1>Subscribe to Our Newsletter</h1>
                        <p>Stay updated on tech careers, education programs, and industry news.</p>
                        <span className='input-About'>
                            <input className='section-bg-claim-input' type="text" placeholder='Your Email address' />
                            <button type='submit' className='btn First-btn-About'> Join Now </button>
                        </span>
                        <p>By joining, you agree to our Terms and Conditions.</p>
                    
                </section>
                {/* ************************************************************************************************* */}
                <section className='Join-About' id='section6'>
                    <div className='flex-1'>
                        <h1>Join the Climate Experiment Today!</h1>
                    </div>
                    <div className='flex-1'>
                        <p>Discover how you can make a difference in the fight against climate change. Explore our programs, partnerships, and donation opportunities.</p>
                        <span className='row gap-2'>
                            <Link className='btn First-btn-About'>Get Involved</Link>
                            <Link className='btn Second-btn-About'>Learn More</Link>
                        </span>
                    </div>
                </section>
            </div >
            <Footer FooterColor="#2B1344" FooterTxTColor="#ff1c77"/>
        </div >

    )
}

export default About