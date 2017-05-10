import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const ToggleMob = ({ isMobbing }) => (
  <TouchableHighlight style={styles.container}>
    <Text style={styles.button}>Begin Mob!</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    padding: 10,
  },
})

export default ToggleMob;
