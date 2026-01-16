import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CartContext } from "@/app/context/cartContext"
import CartItem from "@/components/cartItem";

export default function Cart() {
    const { cart, addItemCart, removeItemCart } = useContext(CartContext);
    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={ () => <Text>Nenhum item no carrinho....</Text>} // quando nao tem nada sendo exibido
                renderItem={({ item }) => (
                    <CartItem
                        data={item}
                        addAmount={ () => addItemCart(item)}
                        removeAmount={ () => removeItemCart(item) }
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingStart: 14,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 14,
    }
})