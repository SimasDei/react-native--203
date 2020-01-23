import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const onPressOpacityHandler = () => {
    navigation.navigate('List');
  };

  const onPressBtnHandler = () => {
    navigation.navigate('Image');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.getStartedText}>Ahoy Sailor o/ ⛵</Text>
      </View>
      <Button title={'Go to Image 👉'} onPress={onPressBtnHandler} />
      <TouchableOpacity style={styles.btn} onPress={onPressOpacityHandler}>
        <Text>Go to list 👉</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  btn: {
    marginTop: 10,
  },
});
