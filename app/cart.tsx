import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text>PÁGINA CARRINHO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
    }
})