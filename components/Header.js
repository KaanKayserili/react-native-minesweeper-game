import React from 'react';
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import { useTheme } from '../utils/ThemeProvider';
import turkish from "../assets/languages/turkish"
import english from "../assets/languages/english"
import { useLanguage } from '../utils/LanguageProvider';

const { width, height } = Dimensions.get("screen")

const Header = ({ text }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const openWebsite = async () => {
        const websiteURL = "https://www.github.com/KaanKayserili";
        Linking.canOpenURL(websiteURL).then((supported) => {
            if (supported) {
                return Linking.openURL(websiteURL);
            } else {
                console.log("error")
            }
        }).catch((error) => console.error("An error occurred: ", error))
    }

    return (
        <View style={styles.container}>
            <View style={{ width: width, alignItems: "center" }}>
                <TouchableOpacity onPress={openWebsite} style={{ alignItems: "center", alignSelf: "center" }}>
                    <Image source={isDarkMode === "true" ? require("../assets/darkModeLogo.png") : require("../assets/lightModeLogo.png")} style={styles.logo} />
                </TouchableOpacity>

                <Text style={[styles.title, { color: theme.Text }]}>{text}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
    },
    logo: {
        height: 114,
        aspectRatio: 1,
        resizeMode: "contain"
    }
})