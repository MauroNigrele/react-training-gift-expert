import { useState } from "react"


export const AddCategory = ({ onNewCategory, currentCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1 ) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            placeholder="Gifs Search"
            value={ inputValue }
            onChange={ onInputChange }
            // onChange={ (event) => onInputChange(event) } // Same Result 
        />
    </form>
  )
}
