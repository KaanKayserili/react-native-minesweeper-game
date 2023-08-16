import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Header from '../components/Header';

import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import english from '../assets/languages/english';
import turkish from '../assets/languages/turkish';

import ButtonComponent from '../components/ButtonComponent';
import CreateOptions from '../components/CreateOptions';
import { useLanguage } from '../utils/LanguageProvider';
import { useTheme } from '../utils/ThemeProvider';

const { width, height } = Dimensions.get("screen");

const MainPage = ({ navigation }) => {

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    const { language, setLanguage } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const [number, setNumber] = useState(5);
    const [bgColor, setBgColor] = useState("#FFF");
    const [openCreateOptions, setOpenCreateOptions] = useState(false);

    return (
        <View style={styles.container}>
            <Modal visible={openCreateOptions} transparent animationType='slide'>
                <TouchableWithoutFeedback onPress={() => setOpenCreateOptions(false)}>
                    <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
                </TouchableWithoutFeedback>

                <CreateOptions setOpenCreateOptions={setOpenCreateOptions} navigation={navigation} />
            </Modal>

            <Header text={lingo.AppHeader} />

            <View style={{ marginLeft: width * 0.25, marginTop: width * 0.1, }}>
                <ButtonComponent text={lingo.Start} onPress={() => { setOpenCreateOptions(true); }} width={width * 0.5} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end", width: width, flex: 0.95 }}>
                <ButtonComponent text={lingo.English} onPress={() => { language === "en" ? setLanguage("tr") : setLanguage("en") }} width={width * 0.35} />

                <ButtonComponent text={lingo.Turkish} onPress={() => { language === "tr" ? setLanguage("en") : setLanguage("tr") }} width={width * 0.35} />
            </View>
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        paddingTop: 50,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#414141",
    },
})