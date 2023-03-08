

export const initialState = {
    basket:[]
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    DELETE_ITEM : "DELETE_ITEM",

}

export const getBasketTotal = (basket)=>{ 
    return basket?.reduce((amount, item)=> item.price + amount, 0);
    
}


const reducer = (state, action ) => {
        console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket:[...state.basket, action.item],
            };    
        case "DELETE_ITEM": 
             let index = state.basket.findIndex(item=>item.id===action.id);
             let newBasket=[...state.basket];
             if(index>=0){
                newBasket.splice(index,1);
             } else {
                console.log("cant remove item")
             }
            return {
                ...state,
                basket: newBasket,
            }     
        default:
            return state;
    }
};
  
export default reducer;