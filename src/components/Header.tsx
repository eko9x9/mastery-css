import React from 'react'
import logo from "../assets/image/logo.png"

interface Props {
    
}

const Header: React.FC<Props> = () => {
    return (
        <header className="header">
            Text...
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo"/>
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">Is where life happens</span>
                </h1>
                
                <a className="btn btn-white btn-animated" href="#">Discover Our Tour</a>
            </div>
        </header>
    )
}

export default Header