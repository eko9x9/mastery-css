import React, { ReactElement } from 'react'

interface Props {
    
}

const Home: React.FC<Props> = (): ReactElement => {
    return (
        <>
             <main>
                <section className="section-about">
                    <div className="center-text">
                        <h2 className="heading-secondary">
                            Do deserunt eiusmod fugiat ullamco occaecat
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            col-1-of-2
                        </div>

                        <div className="col-1-of-2">
                            col-1-of-2
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Home