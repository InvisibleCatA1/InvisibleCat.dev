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
                    <img src= alt="InvisibleCat"></img>
                </div>

                {/*  Nav bar*/}
                <div className={`${classes.navigation}`}>
                    <div className={`${classes.nav__menu}`}>
                        {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={item.index}>{
                                item.display}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </Container>
    </header>
    );
};

export default Header;