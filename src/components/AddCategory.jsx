import { useState } from "react";



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange= ({target}) => {

        setInputValue(target.value);
        
    }




    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 0) return;
        // setCategories( categories => [inputValue,...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('')


    //     const onAddCategory = (e) => {
    //         setCategories( ['Halo 2',...categories ])
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder="Busca un GIF"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

