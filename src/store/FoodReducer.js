const init = {food:[]}

export const FoodReducer = (state=init , action)=>{
    if(action.type === 'LOADAPI'){
        return {
            ...state,
            food:action.payload
        }
    }
    else{
        return state;
    }
     
}