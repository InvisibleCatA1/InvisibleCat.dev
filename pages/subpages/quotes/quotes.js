import React from "react";
import { Container } from "reactstrap";
import { quotes } from "../../../components/data/quotes_list";
import classes from "./quotes.module.css"

const Quotes = () => {
    return (
        <quotes className={`${classes.quotes}`}>
            <Container>
                <h1 className={`${classes.title}`}>Quotes</h1>
                <div className={`${classes.quotes_container}`}>
                    {quotes.map((quote, index) => (
                        <p className={`${classes.quote}`}>{quote.quote} - <b>{quote.author}</b> <p1>({quote.date})</p1></p>
                    ))}
                </div>
            </Container>
        </quotes>
    )
}

export default Quotes