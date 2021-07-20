import React, { ReactElement } from 'react';
import "./assets/scss/index.scss"
import Home from './components/Home';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer"

interface Props {
    
}

export default function App({}: Props): ReactElement {
    return (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}
