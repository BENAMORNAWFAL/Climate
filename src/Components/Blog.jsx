import React, { useEffect, useState } from 'react'
import '../assets/Css/Blog.css'
import AppNavbar from './AppNavbar'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Scroll from './Scroll';

const cardsData = [
    {
        id: 1,
        category: 'Technology',
        readTime: '5 min read',
        title: 'The Future of Blockchain Technology',
        description: 'Discover how blockchain is reshaping industries and driving innovation.',
        link: '#',
        imageSrc: 'src/assets/Animations/bitcoin-p2p-animate.svg'
    },
    {
        id: 2,
        category: 'Technology',
        readTime: '5 min read',
        title: 'The Rise of Cybersecurity Threats',
        description: 'Learn about the latest cybersecurity threats and how to protect yourself.',
        link: '#',
        imageSrc: 'src/assets/Animations/endpoint-animate.svg'
    },
    {
        id: 3,
        category: 'Data Science',
        readTime: '5 min read',
        title: 'The Impact of Big Data on Business',
        description: 'Explore how big data is transforming businesses and driving growth.',
        link: '#',
        imageSrc: 'src/assets/Animations/data-analysis-animate.svg'
    },
    {
        id: 4,
        category: 'Technology',
        readTime: '5 min read',
        title: 'The Future of Augmented Reality',
        description: 'Discover the exciting possibilities of augmented reality technology.',
        link: '#',
        imageSrc: 'src/assets/Animations/virtual-reality-animate.svg'
    },
    {
        id: 5,
        category: 'Technology',
        readTime: '5 min read',
        title: 'The Power of Cloud Computing',
        description: 'Learn how cloud computing is revolutionizing the way businesses operate.',
        link: '#',
        imageSrc: 'src/assets/Animations/cloud-hosting-animate.svg'
    },
    {
        id: 6,
        category: 'Technology',
        readTime: '5 min read',
        title: 'The Future of Internet of Things',
        description: 'Explore the potential of IoT and its impact on our daily lives.',
        link: '#',
        imageSrc: 'src/assets/Animations/connected-world-animate.svg'
    },
];


const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ====================== Category selections ===========
    const categories = ['View All', 'Technology', 'Innovation', 'Artificial Intelligence', 'Data Science'];
    const [activeCategory, setActiveCategory] = useState('View All');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const filteredCards = activeCategory === 'View All'
        ? cardsData
        : cardsData.filter(card => card.category === activeCategory);


    return (
        <div>
            <AppNavbar textColor="#183491" />
            <Scroll NumOfSections='7' />
            <section className='blog-top_page' id='section1'>
                <div className='bg-blog-text'>
                    <h4>Blog</h4>
                    <h1>Discover Tech Careers and Education</h1>
                    <p>Stay updated with the latest in tech careers and education.</p>
                </div>
            </section>
            {/* ******************************************************************* */}
            <div className='blog_Page'>
                <section className='d-flex flex-column align-items-center w-100' id='section2'>
                    <div className='row-cards-blog'>
                        <div className="card-blog">
                            <div className="card-header-blog mb-2">
                                <img src="src/assets/Animations/tech-company-blog-animate.svg" className='image-card-blog' alt="" />
                            </div>
                            <div className="card-blog-content">
                                <span className='d-flex align-items-baseline gap-2'>
                                    <h5>Tech</h5>
                                    <p className='p-size'>5 min read</p>
                                </span>
                                <div className="card-blog-body">
                                    <h5 className="">Unlocking the Potential of Tech Education</h5>
                                    <p className="">Discover how tech education is shaping the future of careers.</p>
                                    <a href="#" className=" read-more-link">Read More ></a>
                                </div>
                            </div>
                        </div>
                        <div className="card-blog">
                            <div className="card-header-blog mb-2">
                                <img src="src/assets/Animations/online-world-animate.svg" className='image-card-blog' alt="" />
                            </div>
                            <div className="card-blog-content">
                                <span className='d-flex align-items-baseline gap-2'>
                                    <h5>Career</h5>
                                    <p className='p-size'>5 min read</p>
                                </span>
                                <div className="card-blog-body">
                                    <h5 className="">The Future of Remote Work</h5>
                                    <p className="">Explore the benefits and challenges of remote work in the tech industry.</p>
                                    <a href="#" className=" read-more-link">Read More ></a>
                                </div>
                            </div>
                        </div>

                        <div className="card-blog">
                            <div className="card-header-blog mb-2">
                                <img src="src/assets/Animations/coronavirus-second-wave-animate.svg" className='image-card-blog' alt="" />
                            </div>
                            <div className="card-blog-content">
                                <span className='d-flex align-items-baseline gap-2'>
                                    <h5>Education</h5>
                                    <p className='p-size'>5 min read</p>
                                </span>
                                <div className="card-blog-body">
                                    <h5 className="">The Rise of AI in Healthcare</h5>
                                    <p className="">Discover how AI is transforming the healthcare industry and creating new opportunities.</p>
                                    <Link href="#" className=" read-more-link">Read More ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='btn first-btn-blog mt-5'>View All</Link>
                </section>
                {/* ************************************************************************************************ */}
                <section className='d-flex flex-column align-items gap-5 w-100' id='section3'>
                    <div className='flex-1'>
                        <h6>Blog</h6>
                        <h1>Discover the Latest Tech News</h1>
                        <p>Stay informed with our curated selection of blog posts.</p>
                    </div>
                    <div className="card-blog-column">
                        <div className="card-header-column mb-2">
                            <img src="src/assets/Animations/cyborg-animate.svg" className='image-card-column' alt="" />
                        </div>
                        <div className="card-content-column">
                            <div className="card-body-column">
                                <span className='d-flex align-items-baseline gap-2'>
                                    <h5 >Category</h5>
                                    <p className='p-size'>5 min read</p>
                                </span>
                                <span className="d-flex flex-column align-items-baseline">
                                    <h5 className="">Unlocking the Power of Artificial Intelligence</h5>
                                    <p className="">Learn how AI is revolutionizing industries and shaping the future.</p>
                                    <Link href="#" className=" read-more-link mt-4">Read More > </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* *********************************************************** */}
                    <div className='w-100'>
                        <div className='row-category gap-1'>
                            {categories.map((category) => (
                                <Link
                                    key={category}
                                    className={`btn select-btn-blog ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </Link>))}
                        </div>
                        <div className={`w-100 cards-with-category ${activeCategory === 'View All' ? 'view-all-active' : ''}`}>
                            {filteredCards.map(card => (


                                <div className="card-blog">
                                    <div className="card-header-blog mb-2">
                                        <img src={card.imageSrc} className='image-card-blog' alt="" />
                                    </div>
                                    <div className="card-blog-content">
                                        <span className='d-flex align-items-baseline gap-2'>
                                            <h5>{card.category}</h5>
                                            <p className='p-size'>{card.readTime}</p>
                                        </span>
                                        <div className="card-blog-body">
                                            <h5 className="">{card.title}</h5>
                                            <p className="">{card.description}</p>
                                            <Link to={card.link} className=" read-more-link">Read More ></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>
                {/* ******************************************************************************************** */}
                <section className='row gap-5 align-items-center w-100' id='section4'>

                    <div className='flex-1 d-flex flex-column align-items '>
                        <h1>Subscribe to Our Newsletter Today</h1>
                        <p>Stay updated with the latest tech career and education insights.</p>
                        <span className='row gap-2 align-items-center justify-content-baseline mt-2 mb-2'>
                            <input className=' form-control' type="text" placeholder='Your Email address' />
                            <button type='submit' className='btn first-btn-blog'> Join Now </button>
                        </span>
                        <p>By joining, you agree to our Terms and Conditions.</p>
                    </div>
                    <div className='flex-1'>
                        <img src="src/assets/Animations/newsletter-animate.svg" className="" alt="..." />
                    </div>
                </section>
                {/* ****************************************************************************************** */}
                <section className=' d-flex flex-column align-items-center justify-content-center' id='section5'>
                    <h1>FAQs</h1>
                    <p>Find answers to commonly asked questions about tech careers, education paths, and the content found within our blog.</p>
                    <div className='flex-1 w-100 d-flex flex-column align-items-center gap-1 mt-3 mb-3'>
                        <select className="form-select-lg custom-select " aria-label="Large select example">
                            <option selected disabled>What are tech careers?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select-lg custom-select " aria-label="Large select example">
                            <option selected disabled>What education paths are available?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select-lg custom-select " aria-label="Large select example">
                            <option selected disabled>What content is in the blog?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select-lg custom-select " aria-label="Large select example">
                            <option selected disabled>How can I join the tech industry?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select-lg custom-select " aria-label="Large select example">
                            <option selected disabled>Still have questions?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column align-items-center text-center mt-5 gap-2'>
                        <h3>Contact Us</h3>
                        <p>Have more questions?Get in touch with us!</p>
                        <Link className='btn first-btn-blog'>Contact</Link>
                    </div>
                </section>
                {/* *********************************************************************************************** */}
                <section className=' d-flex gap-5 flex-column align-items-center text-center rate-blog ' id='section6'>
                    <h4>I have greatly benefited from the tech careers mentioned in the blog. The resources provided have helped me advance in my field.</h4>
                    <span className='d-flex flex-column align-items-center gap-2'>
                        <img src="src/assets/Images/climate-hr.webp" className='profile-img' alt="" />
                        <h5>John Doe</h5>
                        <p>Software Engineer, ABC Inc.</p>
                    </span>
                </section>
                {/* *********************************************************************************************** */}
                <section className=' d-flex flex-column align-items-center text-center gap-1' id='section7'>
                    <h1>Join the Tech Innovation Movement</h1>
                    <p>Discover exciting career and educational opportunities in the tech industry.</p>
                    <span className='d-flex gap-2 mt-3'>
                        <Link to={''} className='btn first-btn-blog'>Explore</Link>
                        <Link to={''} className='btn second-btn-blog'>Learn More</Link>
                    </span>
                </section>
            </div>
            <Footer FooterColor="#183491" FooterTxTColor="#fff" />
        </div>
    )
}

export default Blog