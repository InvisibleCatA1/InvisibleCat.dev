import React from "react";
import { Container } from "reactstrap";
import { projects } from "../../../components/data/project_list";
// import image from "../../../public/assets/images/r"
import classes from "./projects.module.css"

const Projects = () => {
    return (
        <projects className={`${classes.projects}`}>        
            <Container>
                <h1 className={`${classes.title}`}>Projects</h1>
                    <div className={`${classes.row}`}>
                        {projects.map((card, index) => (
                            <div className={`${classes.column}`}>
                                <a className={`${classes.card}`} href={card.href} target="_blank">
                                    <img src={card.img} alt={card.title}></img>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
            </Container>
        </projects>
    )
}
export default Projects