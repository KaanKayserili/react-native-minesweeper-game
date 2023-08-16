import React from 'react'
import { Dimensions, StyleSheet, TextInput } from 'react-native'
const { width } = Dimensions.get("screen")

const TextInputComponent = ({ set, get, keyboardType }) => {
    return (
        <TextInput keyboardType={keyboardType}
            value={get} onChangeText={(get) => { set(keyboardType === "numeric" ? parseInt(get) : get) }}
            style={[styles.input, { width: width * 0.7 }]} placeholderTextColor={"gray"} />
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        paddingVertical: 7.5,
        borderWidth: 2,
        borderColor: "#414141",
        fontSize: 20,
        fontWeight: "500",
        color: "#414141",
        borderRadius: 27.5,
        textAlign: "center",
    }
})