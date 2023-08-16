import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Saving } from "../utils/Saving";

import DrawHeader from '../components/DrawHeader';
import Render from '../components/Render';

export const Game = ({ navigation, mode }) => {

  const [download, setDownload] = useState(false);

  const viewRef = useRef();

  useEffect(() => {
    if (download === true) {
      Saving({ viewRef });
      setDownload(false);
    }
  }, [download]);

  const handleSave = () => {
    setDownload(true);
  }

  return (
    <View style={styles.container}>

      <DrawHeader navigation={navigation} handleSave={handleSave} />

      <Render viewRef={viewRef} mode={mode} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
  },
})

