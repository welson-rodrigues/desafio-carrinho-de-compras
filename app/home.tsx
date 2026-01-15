import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { CartContext } from "./context/cartContext";
import Produtos from "@/components/produtos";
import { Feather } from "@expo/vector-icons"
import { router } from "expo-router"; 


export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);

  const [products, setProducts] = useState( [

  {
    id: "1",
    name: "Coca-cola",
    price: 19.9,
    quatity:1
  },
  {
    id: "2",
    name: "Chocolate",
    price: 6.5,
    quatity:1
  },
  {
    id: "3",
    name: "Queijo",
    price: 15,
    quatity:1
  },
  {
    id: "4",
    name: "Batata frita",
    price: 23.9,
    quatity:1
  },
  {
    id: "5",
    name: "Guarana lata",
    price: 6.0,
    quatity:1
  },
]);

  function addCart(item: any) {
    addItemCart(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity style={styles.cartButtom} onPress={ () => router.push("/cart")}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>{cart?.length}</Text>
          </View>
          <Feather name="shopping-cart" size={30} color={"#000000"}/>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Produtos data={item} addToCart={ () => addCart(item)} />} // aqui passa o item, pois tudo ja esta dentro do useState
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingEnd: 14,
    paddingStart: 14
  },

  cartContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24
  },

  dot: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: "absolute",
    zIndex: 99,
    bottom: -2,
    left: -4
  },

  dotText: {
    fontSize: 12,
  },

  cartButtom: {

  },

  title: {
    fontSize: 24,
    fontWeight: "bold"
  },

  list: {

  }
})