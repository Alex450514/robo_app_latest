import './search-box.styles.css';
import { ChangeEventHandler } from 'react';

type SearchBarProps = {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    currentPlaceholder?: string | undefined;
    currentClassName: string;
}

//Functional Component
const SearchBar = (props: SearchBarProps) => { 
    return (
        <input 
        className={`search-box ${props.currentClassName}`}
        type='search' 
        placeholder={props.currentPlaceholder} 
        onChange={props.onChangeHandler}></input>
    )
}

export default SearchBar;