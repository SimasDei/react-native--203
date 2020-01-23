import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome Traveler o/ ✈</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
