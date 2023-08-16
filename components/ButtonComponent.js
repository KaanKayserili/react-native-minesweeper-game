import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import { useTheme } from '../utils/ThemeProvider';

const ButtonComponent = ({ onPress, text, width }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: theme.Background, borderColor: theme.Border, width: width }]}>
            <Text style={[styles.buttonText, { color: theme.ButtonText }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 7.5,
        borderRadius: 27.5,
        borderWidth: 2,
        marginTop: 20,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 22,
    },
})