import React from 'react'
import logo from "../assets/image/logo.png"
import Home from '../components/Home'

interface Props {
    
}

const Header: React.FC<Props> = () => {
    return (
        <>
            <header className="header">
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
            {/* <section>
                <div className="row">
                    <div className="col-1-of-2">
                        col-1-of-2
                    </div>

                    <div className="col-1-of-2">
                        col-1-of-2
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        col-1-of-3
                    </div>

                    <div className="col-1-of-3">
                        col-1-of-3
                    </div>

                    <div className="col-1-of-3">
                        col-1-of-3
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-1-of-3">
                        col-1-of-3
                    </div>

                    <div className="col-2-of-3">
                        col-2-of-3
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>

                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>

                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>

                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>

                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>

                    <div className="col-2-of-4">
                        col-2-of-4
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        col-1-of-4
                    </div>

                    <div className="col-3-of-4">
                        col-3-of-4
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Header