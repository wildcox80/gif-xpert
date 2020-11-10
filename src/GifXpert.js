import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifXpert = () => {

    const [categories, setCategories] = useState(['Comics', 'Memes', 'Tech']);

    // const handleAdd = () => {
    //     setCategories( cats => [...categories, 'Programming'] );
    // }

    return (
        <div>
            <h2>GifXpert App</h2>
            <AddCategory />
            <hr></hr>


            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category }</li>
                    })
                }
            </ol>
        </div>
    )
}

export default GifXpert;