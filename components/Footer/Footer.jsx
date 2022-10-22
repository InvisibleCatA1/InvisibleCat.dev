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

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return <footer>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className={`${classes.nav__menu}`}>
                        {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={item.index}>{
                                item.display}
                                </Link>
                            ))}
                    </div>
                </Col>

                <Col lg='6'>
                    <div className={`${classes.footer__creator}`}>
                            <h6>Website made by InvisibleCat</h6>
                    </div>
                </Col>

                <Col lg='12'>
                    <div className={`${classes.footer__copyright}`}>
                        <p>&copy; Copyright {year} - InvisibleCat. All rights reserved</p>
                    </div>
                </Col>
    
            </Row>
        </Container>
    </footer>
};

export default Footer;