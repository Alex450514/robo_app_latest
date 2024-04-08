// import { Component } from "react";
import Card from "../single-card/card.component";
import './card-list.styles.css';

import { Monster } from "../../App";

type CardListProps = {
    monsters: Monster[]
}

//Functional component
const CardList = (props: CardListProps) => {
    const {monsters} = props
    return (
        <div className="card-list" key={1}>
            {monsters.map((monster) => {
            let { name, email, id } = monster;
                return (
                    <Card nameV={name} idV={id} emailV={email} />
                )
            })}
        </div>
    )
}

export default CardList