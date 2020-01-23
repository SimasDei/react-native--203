import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { images } from '../assets/data';

import { ImageDetail } from '../components/Image';

export const ImageScreen = () => {
  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={image => image.title}
        renderItem={({ item }) => <ImageDetail image={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
