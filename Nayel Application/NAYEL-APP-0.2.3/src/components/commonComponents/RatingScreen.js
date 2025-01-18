import React, { useMemo } from 'react';
import { Rating } from 'react-native-ratings';
import { StyleSheet } from 'react-native';

function RatingScreen(props) {
 

  return (
    <Rating
      type='custom'
      ratingColor='#FFC000'
      ratingBackgroundColor='#c8c7c8'
      ratingCount={5}
      tintColor={'white'}
      imageSize={30}
      startingValue={4.5}
      isDisabled={false}
      
    />
  );
};
export default RatingScreen;