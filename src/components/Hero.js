import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <div className="bg">
                <div className="lines">
                    <div className="line"></div>

                    <div className="line"></div>

                    <div className="line"></div>

                    <div className="line"></div>

                    <div className="line"></div>
                </div>
                <div className="sun">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="scene">
                <div className="grid"></div>
            </div>
            <div className="text">
                <h1>
                    Rafał
                    <br />
                    Karczmarzyk
                </h1>
                <h2>Fullstack developer</h2>
            </div>
            <div className="links">
                <a
                    href="https://www.linkedin.com/in/rafa%C5%82-karczmarzyk-55b09718b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="ico ico-linkedin"></div>
                    <p>LinkedIn</p>
                </a>
                <a
                    href="https://github.com/liptun"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="ico ico-github"></div>
                    <p>GitHub</p>
                </a>
            </div>
        </div>
    )
}
export default Hero
