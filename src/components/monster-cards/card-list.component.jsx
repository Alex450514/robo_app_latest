// import { Component } from "react";
import Card from "../single-card/card.component";
import './card-list.styles.css';

//Functional component
const CardList = (props) => {
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

// class CardList extends Component {
//     render() { 
//         const { monsters } = this.props; 

//         return (
//             <Card allMonsters={monsters} />
//         )
//     }
// }

export default CardList