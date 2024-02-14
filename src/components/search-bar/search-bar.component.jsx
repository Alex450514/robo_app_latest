// import { Component } from "react";
import './search-box.styles.css';

//Functional Component
const SearchBar = (props) => {
    return (
        <input 
        className={`search-box ${props.currentClassName}`}
        type='search' 
        placeholder={props.currentPlaceholder} 
        onChange={props.onChangeHandler}></input>
    )
}

// class SearchBar extends Component {
//     render() {
//         return (
//         <input 
//         className={`search-box ${this.props.currentClassName}`}
//         type='search' 
//         placeholder={this.props.currentPlaceholder} 
//         onChange={this.props.onChangeHandler}></input>
//         )
//     }
// }

export default SearchBar;