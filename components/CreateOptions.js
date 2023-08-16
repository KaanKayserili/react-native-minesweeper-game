import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';


import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import english from '../assets/languages/english';
import turkish from '../assets/languages/turkish';

import { RadioButton } from 'react-native-paper';
import { useLanguage } from '../utils/LanguageProvider';
import { useTheme } from '../utils/ThemeProvider';
import ButtonComponent from './ButtonComponent';

const { width, height } = Dimensions.get("screen")

const CreateOptions = ({ navigation, setOpenCreateOptions }) => {
  const [checked, setChecked] = useState('normal');
  let matrix = [];

  const { isDarkMode, setIsDarkMode } = useTheme();
  const theme = isDarkMode === "true" ? darkColors : lightColors;

  const { language, setLanguage } = useLanguage();
  const lingo = language === "tr" ? turkish : english;

  const goGame = () => {
    for (let i = 0; i < (checked === "easy" ? 5 : checked === "normal" ? 10 : 15); i++) {
      const row = [];
      for (let j = 0; j < (checked === "easy" ? 5 : checked === "normal" ? 10 : 15); j++) {
        const randomValue = Math.floor(Math.random() * 4); // 0, 1, 2, 3
        row.push(randomValue);
      }
      matrix.push(row);
    }
    setOpenCreateOptions(false);
    navigation.navigate("Game", { mode: checked })
  }

  return (
    <View style={{
      flexDirection: "column", backgroundColor: "white", height: height * 0.3, width: width * 0.8, marginTop: ((height * 0.35) - (width * 0.05) - 2),
      marginLeft: width * 0.1, alignItems: "center", justifyContent: "center", padding: width * 0.05, borderRadius: 20, borderWidth: 2, borderColor: "black"
    }}>
      <Text style={{ fontSize: height * 0.03, fontWeight: "bold" }}>{lingo.GameOptions}</Text>

      <View style={styles.radioButtonContainer}>
        <View style={styles.chooseWay}>
          <Text style={styles.text}>Kolay</Text>
          <RadioButton size={18} value='easy' status={checked === 'easy' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('easy')} color='#FF6101' />
        </View>

        <View style={styles.chooseWay}>
          <Text style={styles.text}>Orta</Text>
          <RadioButton size={18} value='normal' status={checked === 'normal' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('normal')} color='#FF6101' />
        </View>

        <View style={styles.chooseWay}>
          <Text style={styles.text}>Zor</Text>
          <RadioButton size={18} value='hard' status={checked === 'hard' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('hard')} color='#FF6101' />
        </View>
      </View>

      <View style={styles.radioButtonContainer}>
        <View style={styles.chooseWay}>
          <Text style={styles.text}>{lingo.light}</Text>
          <RadioButton size={18} value={"false"} status={isDarkMode === 'false' ? 'checked' : 'unchecked'}
            onPress={() => setIsDarkMode('false')} color='#FF6101' />
        </View>

        <View style={styles.chooseWay}>
          <Text style={styles.text}>{lingo.dark}</Text>
          <RadioButton size={18} value={"true"} status={isDarkMode === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setIsDarkMode('true')} color='#FF6101' />
        </View>
      </View>

      <ButtonComponent onPress={goGame} text={lingo.Okay} width={width * 0.35} />
    </View >
  )
}

export default CreateOptions

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    width: "100%",
    marginVertical: "5%",
  },
  text: {
    fontSize: 18,
  },
  chooseWay: {
    flexDirection: "row",
    alignItems: "center",
  },
})