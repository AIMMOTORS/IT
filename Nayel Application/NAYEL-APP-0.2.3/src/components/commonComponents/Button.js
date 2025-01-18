import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View,ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, SF, SH, SW, Colors } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";

function Button(props) {
  const { title, onPress, buttonStyle, disabled, buttonTextStyle, imagesource, spacedImages,loading } = props;

  const { colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.star_color,
          alignItems: 'center',
          borderRadius: 7,
          justifyContent: 'center',
          width: '100%',
          height: SH(45),
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 2 : 25,
          elevation: Platform.OS === 'ios' ? 1 : 3,
        },
        buttonTextStyle: {
          color: Colors.white_text_color,
          fontFamily: Fonts.Poppins_Medium,
          fontSize: SF(19),
          fontWeight: '600',
          lineHeight: SH(24)
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%'
        },
        LeftImageViewStyle: {
          marginVertical: SW(5)
        }
      }),
    [disabled, spacedImages, colors],
  );
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[styles.buttonStyle, { ...buttonStyle }]}
      onPress={() => onPress()}>
      <View style={styles.buttonViewStyle}>
      {loading ? (
          <ActivityIndicator color={Colors.white_text_color} /> // Show the loading indicator when loading is true
        ) : (
          <>
        {imagesource ? <Image source={imagesource} style={styles.LeftImageViewStyle} resizeMode='cover' /> : null}
        <Text style={[styles.buttonTextStyle, { ...buttonTextStyle }]}>{title}</Text>
        {imagesource ? <View /> : null}
        </>)}
      </View>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disabled: false,
  imagesource: null,
  buttonTextStyle: {},
  spacedImages: false,
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disabled: PropTypes.bool,
  imagesource: PropTypes.any,
  buttonTextStyle: PropTypes.shape({}),
  spacedImages: PropTypes.bool
};

export default Button;
