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
    total: number;
    addItemCart: (newItem: ProductProps) => void;
    removeItemCart: (product: ProductProps) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [total, setTotal] = useState(0);

    function addItemCart(newItem: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1; // se o que clicar ja existe soma +1

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price // aqui vai o calculo, quantidade "amount" * o preço "price"

            setCart(cartList)
            totalResultCart(cartList);

            return;

        }


        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

         setCart(producs => [...producs, data])
         totalResultCart([...cart, data])
         //console.log(...cart, data)

    }

    function removeItemCart(producs: ProductProps) {
        const indexItem = cart.findIndex(item => item.id === producs.id)

        // Conforme for clicando vai aumentado os produtos
        if(cart[indexItem]?.amount > 1) {
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;

            cartList[indexItem].total =  cartList[indexItem].total - cartList[indexItem].price;

            setCart(cartList);
            totalResultCart(cartList)
            return;
        }

        // Se for menor que 1 ele remove
        const removeItem = cart.filter(item => item.id !== producs.id);
        setCart(removeItem); // removendo o item
        totalResultCart(removeItem)

    }

    function totalResultCart(items: ProductProps[]) {
        let myCart = items;
        let result = myCart.reduce( (acc, obj) => { return acc + obj.total }, 0) // pegando o total de cada item e colocando aqui dentro

        setTotal(result);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;