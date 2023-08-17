import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { useTheme } from '../utils/ThemeProvider';
import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';

const { width, height } = Dimensions.get("screen");

const Render = ({ viewRef, mode }) => {

  const { isDarkMode } = useTheme();
  const theme = isDarkMode === "true" ? darkColors : lightColors;

  useEffect(() => {
    console.log(mode)
  }, [])

  const renderCell = (row, col, text) => {
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.cell, { width: ((width / 5) - 2), height: ((width / 5) - 2), backgroundColor: isDarkMode === "true" ? "lightgray" : "darkgray" }]}
        onPress={() => { }}>
        <Text style={{ color: isDarkMode === "true" ? "lightgray" : "darkgray" }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const renderMatrix = () => {
    const matrixArray = [];
    for (let row = 0; row < 5; row++) {
      const rowCells = [];
      for (let col = 0; col < 5; col++) {
        var randomDecimal = Math.random();
        var text = Math.floor(randomDecimal * 4);
        rowCells.push(renderCell(row, col, text));
      }
      matrixArray.push(
        <View key={row} style={styles.row}>
          {rowCells}
        </View>
      );
    }
    return matrixArray;
  };


  return (
    <ViewShot style={{ marginTop: ((height / 2) - (width * 0.5) - (width * 0.14) - (height * 0.04)) - (height * 0.0075), }} ref={viewRef}>{renderMatrix()}</ViewShot>
  )
}

export default Render;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    margin: (10 / 6),
    justifyContent: 'center',
    alignItems: 'center',
  },
})