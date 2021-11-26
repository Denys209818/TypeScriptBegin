
export enum ProductReducerTypes 
{
    SET_PRODUCTS= 'SET_PRODUCTS'
}

export interface ProductState 
{
    products: Array<Product>;
}

export interface Product 
{
    id: number;
    title: string;
    text: string;
    price: number;
}


export interface GetProducts 
{
    type: ProductReducerTypes.SET_PRODUCTS;
    payload: Array<any>;
}

export type ProductReducerSwitch = GetProducts;