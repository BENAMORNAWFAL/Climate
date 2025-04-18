import React, { useState } from 'react'
import '../assets/Css/Scroll.css'

const Scroll = ({NumOfSections}) => {

    
    const [currentSection, setCurrentSection] = useState('section1');
    const scrollToNextSection = (currentId) => {
        const currentSectionNumber = parseInt(currentId.replace('section', ''));
        if (currentSectionNumber < NumOfSections) {
            const nextSectionId = `section${currentSectionNumber + 1}`;
            setCurrentSection(nextSectionId);
            const nextSection = document.getElementById(nextSectionId);
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center',

            });

        }
    };
    const scrollToPreviousSection = () => {
        const currentSectionNumber = parseInt(currentSection.replace('section', ''));
        if (currentSectionNumber > 1) {
            const nextSectionId = `section${currentSectionNumber - 1}`;
            setCurrentSection(nextSectionId);
            const nextSection = document.getElementById(nextSectionId);
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        } else {
            setCurrentSection('section1');
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setCurrentSection('section1');
    };







    return (
        <div className='btn-scroll'>
            <button className='Previous text-dark' onClick={scrollToPreviousSection}>
                <h6 style={{ margin: '0' }}>Return</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </button>
            <button className='To-Top text-dark ' onClick={scrollToTop}>
                <h6 style={{ margin: '0' }}>Top</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </button>
            <button className='Arrow-Down text-dark' onClick={() => scrollToNextSection(currentSection)}>
                <h6 style={{ margin: '0' }}>More</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                </svg>
            </button>
        </div>
    )
}

export default Scroll