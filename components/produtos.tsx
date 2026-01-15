import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface ProdutosProps {
  data: {
    id: string;
    name: string;
    price: number;
    quatity: number;
  }
}

export default function Produtos( { data }: ProdutosProps) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.price}>R$ {data.price}</Text>
                {/* <Text style={styles.quatity}>{data.quatity}</Text> */}
            </View>
            <TouchableOpacity style={styles.buttomAdd}>
                <Text style={styles.buttomText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#DFDFDF",
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    title: {
        fontWeight: "bold",

    },

    price: {

    },

    buttomAdd: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: "#168fff",
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 3
    },

    buttomText: {
        fontWeight: 'bold'
    }
})