import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interest from "./components/Interest.js"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"

export default function App(){
    return (
        <>
            <Header />
            <div className="rectangle-91">
                <Info />
                <About />
                <Interest />
            </div>
            <Footer />
        </>
    )
}
