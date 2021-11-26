import { Dispatch } from "react";
import { Product, ProductReducerTypes } from "../../interfaces/ReduxInterfaces";


export const InitAction = () => async (dispatch:Dispatch<any>) => 
{
    dispatch({type: ProductReducerTypes.SET_PRODUCTS, payload: [
        {id: 1, title: 'Автомобіль', text: 'Автомоіль Audi', price: 1000}, 
        {id: 2, title: 'Вантажівка', text: 'Вантажівка Ford', price: 1500}
    ]});
}