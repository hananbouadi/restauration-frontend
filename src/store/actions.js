import axios from "axios"

export const recipies = () =>{
    return async(dispatch)=>{
        const resp = await axios.get('http://127.0.0.1:8000/api/recipes')
        const updatedRecipes = resp.data.map((recipe) => ({
            ...recipe,
            image: 'http://127.0.0.1:8000' + recipe.image,
          }));
        dispatch({
            type:'LOADAPI',
            payload:updatedRecipes 
        })
        
        console.log(updatedRecipes)
    }
}