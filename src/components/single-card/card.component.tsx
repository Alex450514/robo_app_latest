import { Component } from "react";
import './card.styles.css';

import { Monster } from "../../App";


type CardProps = {
    nameV: string
    emailV: string
    idV: string
}

//Functional component
const Card = (props: CardProps) => {

    return (
        <div className="card-container" key={props.idV}>
            <img alt="monster" src={`https://robohash.org/${props.idV}?set=set2&size=180x180`}></img>
            <h2>{props.nameV}</h2>
            <p>{props.emailV}</p>
        </div>
    )
}

export default Card;