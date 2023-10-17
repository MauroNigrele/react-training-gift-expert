
import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['es tal cual']);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] );
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* List */}

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={category} 
                    />
                ))
            }
        
            {/* Title */}


        </>
    )
}
