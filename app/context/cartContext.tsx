import React, { useState, createContext, ReactNode } from "react";

interface ProductProps {
    id: string;
    name: string;
    price: number;
    quatity: number; 
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
        setCart([...cart, newItem]);
        //console.log("Item adicionado:", newItem.name);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart 
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;