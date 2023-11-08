import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(fab);
config.autoAddCss = false

const PresentationPage = () => {

    return (
        <div className="w-screen h-screen bg-gold" id="presentationPage">
        </div>
    )
}

export default PresentationPage;