import { Component } from "react";
import './card.styles.css';

//Functional component
const Card = (props) => {

    return (
        <div className="card-container" key={props.idV}>
            <img alt="monster" src={`https://robohash.org/${props.idV}?set=set2&size=180x180`}></img>
            <h2>{props.nameV}</h2>
            <p>{props.emailV}</p>
        </div>
    )
}

// class Card extends Component {
//     render() {
//         return (
//         <div className="card-list">
//             {this.props.allMonsters.map((monster) => {
//             let { name, email, id } = monster;
//                 return (
//                 <div className="card-container" key={id}>
//                     <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//                 )
//             })}
//         </div>
//         )
//     }
// }

export default Card;