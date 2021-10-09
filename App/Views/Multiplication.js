import React from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Separator from "../Components/Separator";
import ButtonStyle from "../styles/ButtonStyle";

const Multiplication = ({ navigation }) => {
    return (
        <ScrollView>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    decription: {
        textAlign: "center",
        fontSize: 16
    }
});

export default Multiplication;