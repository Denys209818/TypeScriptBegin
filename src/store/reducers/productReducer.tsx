import { ProductReducerSwitch, ProductReducerTypes, ProductState } from "../../interfaces/ReduxInterfaces"

const initialState : ProductState = 
{
    products: [],
}

export const productReducer = (state = initialState, action:ProductReducerSwitch) : ProductState => 
{
    switch(action.type) 
    {
        case ProductReducerTypes.SET_PRODUCTS: 
        {
            return {
                products: [...action.payload]
            }
        }
        default : 
        {
            return state;
        }
    }
}