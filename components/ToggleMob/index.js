import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const ToggleMob = ({isMobbing, toggleMob}) => (
  <TouchableHighlight style={styles.container} onPress={toggleMob}>
    <Text style={styles.button}>{isMobbing ? "End Mob!" : "Being Mob!"}</Text>
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
