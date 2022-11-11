import React from "react";

import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import classes from "./footer.module.css"


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

const SOCIALS = [
    {
        "name": "Github",
        "img_path": "/assets/socials/github.svg",
        "url": "https://github.com/InvisibleCatA1/"
    },
    {
        "name": "Steam",
        "img_path": "/assets/socials/steam.svg",
        "url": "https://steamcommunity.com/id/InvisibleCat_/"
    },
    {
        "name": "Reddit",
        "img_path": "/assets/socials/reddit.svg",
        "url": "https://www.reddit.com/user/InvisableCat109"
    }
]

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return <footer>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className={`${classes.nav__menu}`}>
                        {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={item.index}>
                                    {item.display}
                                </Link>
                            ))}
                    </div>
                </Col>

                <Col lg='6'>
                    <div className={`${classes.footer_creator}`}>
                            <h6>Website made by InvisibleCat</h6>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={`${classes.socials}`}>
                        {SOCIALS.map((social, index) => (
                                <a className={`${classes.social}`} href={social.url} target="_blank">
                                    <img src={social.img_path} alt={social.name} width="50"></img>
                                </a>
                            ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                    <div className={`${classes.footer_copyright}`}>
                        <p>&copy; Copyright {year} - InvisibleCat. All rights reserved</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;