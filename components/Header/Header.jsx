import React from "react";

import { Container } from "reactstrap"; 
import classes from './header.module.css'
import Link from "next/link";


const NAV__LINK = [
    {
        path:'/',
        display: "Home"
    },
    {
        path:'#about',
        display: "About"
    },
    {
        path:'/projects',
        display: "Projects"
    },
    {
        path:'/quotes',
        display: "Quotes"
    }
]

const Header = () => {
    return (
        <header className={`${classes.header}`}>
        <Container>
            <div className={`${classes.nav__wrapper}`}>
                {/*  Pfp */}
                <div className={`${classes.pfp}`}>
                    <img src="/assets/profile/pfp.png" alt="InvisibleCat"></img>
                    <h1>InvisibleCat</h1>
                </div>

                {/*  Nav bar*/}
                <div className={`${classes.navigation}`}>
                    <div className={`${classes.nav__menu}`}>
                        {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={item.index}>{
                                item.display}
                                </Link>
                            ))}

                            <div className={`${classes.nav__right}`}>
                                {" "}
                                <p className=" d-flex align-items-center gap-2 mb-0 "><i className="ri-discord-fill"></i>InvisibleCat#5775</p>
                                {" "}
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    </header>
    );
};

export default Header;