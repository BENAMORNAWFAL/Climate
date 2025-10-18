import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Css/NavBarApp.css'



const AppNavbar = ({ textColor }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [showSecondNavbar, setShowSecondNavbar] = useState(false);
    const [showRespSecondNavbar, setShowRespSecondNavbar] = useState(false);
    const navigate = useNavigate()

    const handleCareersOver = () => {
        setShowSecondNavbar(!showSecondNavbar);
    };

    const handleMenuOver = () => {
        setShowRespSecondNavbar(!showRespSecondNavbar);
    };

    const handleCareersOut = () => {
        setShowSecondNavbar(false);
    }

    // small screen ============
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="NavBar" style={{ '--color-text': textColor }}>
            {!isSmallScreen ? (
                <Navbar expand="lg" className="navbar">
                    <div className="logo" >
                        <Navbar.Brand href="/">
                            <img className="navbar-logo" src="src/assets/images/CLIMATE.png" alt="" />

                        </Navbar.Brand>
                    </div>

                    <Navbar.Toggle aria-controls="main-navbar" className='main-navbar' onClick={handleCareersOut} />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="mx-auto list-nav" >


                            <Nav.Link href="/" className="navlink" >Home</Nav.Link>
                            <Nav.Link href="/about" className="navlink">About Us</Nav.Link>
                            <Nav.Link
                                onClick={handleCareersOver}
                                className="navlink serv"
                            >
                                Services{' '}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                                </svg>
                            </Nav.Link>

                        </Nav>
                        <div className="curved-shape"></div>
                        <div className="curved-shape-two"></div>
                        <Nav className=" buttons-navbar">
                            <Link className="btn signup_Button" to={'/contact'}>
                                Contact Us
                            </Link>
                            <Link className=" btn apply_button" to={'/sign_in'}>
                                Apply
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            ) : (
                <Navbar expand="lg" className="navbar">
                    <div className="logo" >
                        <Navbar.Brand href="/">
                            <img className="resp-navbar-logo" src="src/assets/images/logo.png" alt="" />

                        </Navbar.Brand>
                    </div>
                    <div className="curved-shape"></div>
                    <div className="curved-shape-two"></div>

                    <div id="main-navbar">
                        <Nav className="list-nav" >
                            <div class="dropdown">
                                <Link class="btn dropdown-toggle" onClick={handleMenuOver} id='dropbtn' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </Link>
                                {showRespSecondNavbar && (
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item navlink" to="/">Home</Link></li>
                                        <li><Link class="dropdown-item navlink" to="/about">About Us</Link></li>
                                        <li><div class="dropdown-item navlink bg-white">
                                            Services

                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                            </svg>
                                            <br />
                                            <div className='d-flex flex-column align-items-baseline'>

                                                <Link to={'/tech_bootcamps'} className='d-flex gap-1 align-items-baseline mt-2 ms-4 navlink'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                                                    </svg>
                                                    <h5>Tech Bootcamps</h5>
                                                </Link>
                                                <Link to={'/career_coaching'} className='d-flex gap-1 align-items-baseline mt-2 ms-4 navlink'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                    <h5>Career Coaching</h5>
                                                </Link>
                                                <Link to={'/freelancing_school'} className='d-flex gap-1 align-items-baseline mt-2 ms-4 navlink'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                                                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
                                                    </svg>
                                                    <h5>Freelancing School</h5>
                                                </Link>
                                                <Link to={'/climate_school'} className='d-flex gap-2 align-items-baseline mt-2 ms-4 navlink'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                                        <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                                                    </svg>
                                                    <h5>Job Opportunities</h5>
                                                </Link>
                                            </div>
                                        </div>
                                        </li>
                                        <li className="drop-sign-app">

                                            <Link className="btn signup_Button" to={'/contact'}>
                                                Contact Us
                                            </Link>
                                            <Link className=" btn apply_button" to={'/sign_in'}>
                                                Apply
                                            </Link>

                                        </li>

                                    </ul>
                                )}
                            </div>
                        </Nav>


                    </div>
                </Navbar>)
            }
            {/* Conditional rendering for the second navbar */}
            {
                showSecondNavbar && (
                    <div className='position-fixed-2 mt-0 d-flex flex-column gap-0' >
                        <nav className="d-flex align-items-baseline mt-1 gap-3 w-100 ">
                            <Link to={'/tech_bootcamps'} className="card c-1 " style={{ height: "210px" }}>

                                <div className="card-body-nav">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-patch-check" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                                        </svg>
                                    </div>
                                    <h5 className=" ">

                                        Tech Bootcamps
                                    </h5>
                                    <p className="card-text">Learn the latest tech skills</p>

                                </div>

                            </Link>
                            <Link to={'/career_coaching'} className="card c-2" style={{ height: "210px" }}>

                                <div className="card-body-nav">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                    </div>

                                    <h5 className="">Career Coaching</h5>
                                    <p className="card-text">Position yourself as an expert</p>

                                </div>

                            </Link>
                            <Link to={'/freelancing_school'} className="card c-3" style={{ height: "210px" }}>

                                <div className="card-body-nav">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
                                        </svg>
                                    </div>
                                    <h5 className="">Freelancing School</h5>
                                    <p className="card-text">Launch your freelancing career</p>

                                </div>

                            </Link>
                            <Link to={'/climate_school'} className="card c-4" style={{ height: "210px" }}>

                                <div className="card-body-nav">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                    </div>
                                    <h5 className="">Job Opportunities</h5>
                                    <p className="card-text">Find your dream job</p>

                                </div>

                            </Link>


                        </nav>
                        <div className='w-100'>
                            <p className='p-1 mb-0 bg-transparent text-center text-white'>Ready for a career change? <a className='text-white' href="/contact">Contact our team</a></p>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default AppNavbar