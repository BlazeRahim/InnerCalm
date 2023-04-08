import React from "react";
import './Home.css';
import Nav from '../components/Nav'

const Home = () => {
    return (
        <>
            <Nav />
            <section className="banner">
                <div className="backdrop">
                    <div className="banner_tag">
                        <h1>
                            WE'RE HERE FOR YOU
                        </h1>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Home