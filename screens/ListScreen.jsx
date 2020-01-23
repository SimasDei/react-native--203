import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import { friends } from '../assets/data';

const ListScreen = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={friend => friend.key}
      renderItem={({ item: { name, age } }) => (
        <Text style={styles.textStyle}>
          🧑{name} age of: 👕{age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
