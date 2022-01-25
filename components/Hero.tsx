import React from 'react';

export const Hero = () => {
    return (
        <div className="header-container">
            <div className="wrapper">
                <header>
                    <div className="hero-content">
                        <h1>Hi, I'm Pablo</h1>
                        <p>
                            I am a committed & enthusiastic full-stack software engineer
                        </p>
                        <a href="#">
                            Contact Me
                        </a>
                    </div>
                    <div className="hero-image">
                        <img src="assets/images/photo.png" alt="me" />
                        <div className="photo-bg"></div>
                    </div>
                </header>
                <div className="social-icons">
                    <a href="#">
                        <img src="assets/images/instagram-icon.png" alt="insta" />
                    </a>
                    <a href="#">
                        <img src="assets/images/behance-logo.png" alt="insta" />
                    </a>
                    <a href="#">
                        <img src="assets/images/github-logo.png" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    )
};