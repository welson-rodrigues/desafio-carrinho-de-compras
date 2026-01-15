import React, { useState, createContext, ReactNode } from "react";

interface ProductProps {
    id: string;
    name: string;
    price: number;
    quatity: number; 
    amount: number;
    total: number;
}

interface CartContextData {
    cart: ProductProps[];
    addItemCart: (newItem: ProductProps) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductProps[]>([]);

    function addItemCart(newItem: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1; // se o que clicar ja existe soma +1

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price // aqui vai o calculo, quantidade "amount" * o preço "price"

            setCart(cartList)
            return;

        }


        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(producs => [...producs, data])
        console.log(...cart, data)

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;