import React, { ReactElement } from 'react';
import Logo from "../assets/image/logo.png"

interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={Logo} alt="" />
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Contact Us</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Build by <a href="#" className="footer__link">Eko</a>. Copyright &copy; by Eko.
                    </p>
                </div>
            </div>
        </footer>
    )
}
