import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ ]);

    const onNewCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
        
        // setCategories( cat => [...cat, "Counter Strike"]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={onNewCategory}
            />

            { 
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                )) 
            }
        </>
    )
}
