import React, { ReactElement } from 'react';
import Photo1 from "../assets/image/salar.jpg"

interface Props {
    
}

const Home: React.FC<Props> = (): ReactElement => {
    return (
        <>
             <main>
                <section className="section-about">
                    <div className="center-text">
                        <h2 className="heading-secondary mb-big">
                            Do deserunt eiusmod fugiat ullamco occaecat
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary mb-small">
                                Your'e going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Voluptate anim nulla sunt laboris aliqua labore nostrud. Occaecat aliqua eu ea enim et labore cupidatat consequat aute. Irure incididunt esse incididunt commodo incididunt ex do enim cillum non. Pariatur consequat ea consequat qui laborum ipsum irure occaecat. Sunt exercitation enim do ullamco. Dolore non nulla excepteur anim sint voluptate amet laborum laborum occaecat. Irure eu cillum ullamco culpa amet aute eu id laboris.
                            </p>
                            <h3 className="heading-tertiary mb-small">Live adventure like you never have before</h3>
                            <p className="paragraph">
                                Esse aute veniam cupidatat tempor ad laborum qui laboris consequat laboris amet nisi proident nisi. Commodo sunt enim nostrud consequat eiusmod ex. Reprehenderit labore excepteur magna dolor voluptate aute nisi officia commodo fugiat. Magna et deserunt anim ex cupidatat quis voluptate sint eiusmod ut. Aliqua enim nisi ipsum nulla voluptate incididunt id dolore voluptate culpa excepteur in culpa.
                            </p>

                            <a href="#" className="btn-text">Learn more &rarr;</a>
                        </div>

                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src={Photo1} alt="" className="composition__photo composition__photo__p1" />
                                <img src={Photo1} alt="" className="composition__photo composition__photo__p2" />
                                <img src={Photo1} alt="" className="composition__photo composition__photo__p3" />
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary mb-small">Explore The World</h3>

                                <p className="feature-box__text">
                                    Aute laboris non ut esse id ex et exercitation do id.
                                </p>
                            </div>
                        </div>


                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary mb-small">Explore The World</h3>

                                <p className="feature-box__text">
                                    Aute laboris non ut esse id ex et exercitation do id.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary mb-small">Explore The World</h3>

                                <p className="feature-box__text">
                                    Aute laboris non ut esse id ex et exercitation do id.
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary mb-small">Explore The World</h3>

                                <p className="feature-box__text">
                                    Aute laboris non ut esse id ex et exercitation do id.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section-tours">
                    <div className="center-text">
                        <h2 className="heading-secondary mb-big">
                            Most popular tours
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>

                                    <h4 className="card__heading">
                                        <span className="card__heading--span--1">
                                            The Sea Explorer
                                        </span>
                                    </h4>

                                    <div className="card__details">
                                        <ul>
                                            <li>3 Days tour</li>
                                            <li>Up to 30 people</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card__side card__side--back">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price--only">Only</p>
                                            <p className="card__price">$1</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>

                                    <h4 className="card__heading">
                                        <span className="card__heading--span--1">
                                            The Sea Explorer
                                        </span>
                                    </h4>

                                    <div className="card__details">
                                        <ul>
                                            <li>3 Days tour</li>
                                            <li>Up to 30 people</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card__side card__side--back">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price--only">Only</p>
                                            <p className="card__price">$1</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Book now</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>

                                    <h4 className="card__heading">
                                        <span className="card__heading--span--1">
                                            The Sea Explorer
                                        </span>
                                    </h4>

                                    <div className="card__details">
                                        <ul>
                                            <li>3 Days tour</li>
                                            <li>Up to 30 people</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="card__side card__side--back">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price--only">Only</p>
                                            <p className="card__price">$1</p>
                                        </div>
                                        <a href="#" className="btn btn--white" >Book now</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="story">
                            <figure className="story__shape">
                                <img src={Photo1} alt="" className="story__img" />
                                <figcaption className="story__caption">
                                    Mary me
                                </figcaption>
                            </figure>
                            <div className="story__text">
                                <h3 className="heading-tertiary mb-small">Labore incididunt consequat duis dolore deserunt.</h3>
                                <p>Ut sint exercitation culpa voluptate quis id do incididunt voluptate adipisicing ullamco exercitation velit. Adipisicing deserunt ex sint consectetur ea id pariatur irure duis anim aliquip exercitation elit. Ea minim nisi anim cupidatat. Qui velit exercitation mollit elit dolor mollit. Nostrud sint commodo dolore incididunt amet sit aute quis dolore. Ea et sunt do eiusmod minim eiusmod. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-book">
                    <div className="row">
                        <div className="book">
                            <div className="book__form">
                                <form action="#" className="form">
                                    <div className="center-text">
                                        <h2 className="heading-secondary" style={{marginBottom: "3rem"}}>
                                            Start Booking Now
                                        </h2>
                                    </div>

                                    <div className="form__group">
                                        <input type="text" className="form__input" id="name" placeholder="Name" required/>
                                        <label htmlFor="name" className="form__label">Name</label>
                                    </div>

                                    <div className="form__group">
                                        <input type="email" className="form__input" id="email" placeholder="Email" required/>
                                        <label htmlFor="email" className="form__label">Email</label>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="small" name="size" />
                                            <label htmlFor="small" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Small Tour Group
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form__group">
                                        <div className="form__radio-group">
                                            <input type="radio" className="form__radio-input" id="large" name="size" />
                                            <label htmlFor="large" className="form__radio-label">
                                                <span className="form__radio-button"></span>
                                                Large Tour Group
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form__group">
                                        <button className="btn btn--green">Next step</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home