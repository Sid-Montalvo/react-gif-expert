import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Gears Of War']);

  const onAddCategory = (newCategory) => {


    if(categories.includes(newCategory)) return;

    setCategories( [newCategory,...categories ])
    // setCategories( cat => [...categories, 'Halo 2'])
    // categories.push(newCategory);
  }

  return (
    <>
        <h1>GifExpertApp</h1> 

        <AddCategory 
          // setCategories = {setCategories }
          onNewCategory={e => onAddCategory(e) }
        />
        
        {
          categories.map( category => (
          
            <GifGrid 
              key={category} 
              category ={category}
            />
          ))
        }
    
    </>
  ) 
}
