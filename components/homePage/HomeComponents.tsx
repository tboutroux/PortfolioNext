"use client";

import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
config.autoAddCss = false

/* Components import */
import NavBar from "./NavBar";
import Hero from "./Hero";
import { Discover } from "./Discover";

/* HOMEPAGE COMPONENT */
const HomePage = () => {
    return (
        <div className="w-screen h-screen overflow-x-hidden" id="home">
            <div className="h-full">
                <NavBar />
                <Hero />
                <Discover />
            </div>
        </div>
    );
}


export default HomePage;