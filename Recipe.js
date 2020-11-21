import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title,cautions,image,ingredients }) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Caution: {cautions}</b></p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;