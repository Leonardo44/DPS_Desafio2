import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import ButtonStyle from "../styles/ButtonStyle";
import FormStyle from "../styles/FormStyle";
import Separator from "../Components/Separator";

const Factorial = ({ navigation }) => {
    const [nOne, onChangeNOne] = useState();
    const [nResult, setNResult] = useState();

    const calculate = e => {
        if (isNaN(nOne) || nOne === undefined || nOne < 0) {
            Alert.alert('Ingrese valores enteros positivos');
        } else {
            if (Number.isInteger(parseFloat(nOne))) {
                let result = factorialize(nOne)
                setNResult(`Respuesta: ${result}`);
            } else {
                Alert.alert('Ingrese valores enteros positivos');
            }
        }
    };

    const factorialize = num => {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
    };
    
    return (
        <ScrollView>
            <View style={FormStyle.container}>
                <Text></Text>
                <View>
                    <Text style={FormStyle.textInput}>Número</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeNOne}
                        value={nOne}
                        keyboardType="numbers-and-punctuation"
                    ></TextInput>
                </View>
                <Separator />
                <TouchableOpacity
                    style={ButtonStyle.appButtonContainer}
                    onPress={() => calculate()}
                >
                    <Text style={ButtonStyle.appButtonText}>Calcular</Text>
                </TouchableOpacity>

                <View style={FormStyle.responseView}>
                    <Text style={FormStyle.responseText}>{nResult}</Text>
                </View>
            </View>
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

export default Factorial;