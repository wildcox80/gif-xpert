import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifXpert = () => {

    const [categories, setCategories] = useState(['Programming']);

    
    return (
        <div>
            <h2>GifXpert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>


            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifXpert;