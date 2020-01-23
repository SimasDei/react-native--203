import React from 'react';
import { View, Text, Image } from 'react-native';

export const ImageDetail = ({ image: { title, image } }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={image} />
    </View>
  );
};

export default ImageDetail;
