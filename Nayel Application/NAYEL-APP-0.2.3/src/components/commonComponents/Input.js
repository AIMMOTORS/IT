import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { useTheme } from '@react-navigation/native';
function Input({
  title,
  placeholder,
  titleStyle,
  inputStyle,
  onChangeText,
  value,
  maxLength,
  textprops,
  numberOfLines,
  inputprops,
  onBlur,
  onFocus,
  inputType,
  autoFocus,
  Descriptioninput,
  SearchHomeTab,
  placeholde,
  description,
  errorText,
  secureTextEntry,
  keyboardType
}) {
  const { colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: { width: '100%' },
        title_style: {
          width: '100%',
          fontSize: SF(12),
          color: colors.tundora,
          fontWeight: '400',
          marginBottom: SH(5),
          ...titleStyle,
        },
        placeholde: {
          color: Colors.gray_text_color,
          ...placeholde,
        },
        input_style: {
          paddingHorizontal: SH(12),
          width: '100%',
          paddingTop: SH(12),
          paddingBottom: SH(7),
          marginBottom: SH(5),
          height: SH(47),
          color: Colors.black_text_color,
          fontSize: SF(17),
          fontFamily: Fonts.Poppins_Medium,
          borderRadius: 7,
          backgroundColor: Colors.bgWhite,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
          },
          shadowOpacity: 0.58,
          shadowRadius: Platform.OS === 'ios' ? 2 : 25,
          elevation: Platform.OS === 'ios' ? 1 : 2,
          ...Descriptioninput,
          ...SearchHomeTab,
          ...inputStyle,

        },
        description: {
          fontSize: 13,
          color: Colors.black_text_color,
          paddingTop: 8,
        },
        error: {
          fontSize: 12,
          color: Colors.red,
          textAlign:'left',
          alignSelf:'flex-start',
        },

      }),
    [title, titleStyle, inputStyle, placeholde, colors],
  );
  return (
    < >
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={styles.placeholde}
        style={styles.input_style}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        selectionColor={colors.red}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        {...inputprops}
        keyboardType={keyboardType || 'default'}  
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      </View>
    </>
  );
}

Input.defaultProps = {
  title: '',
  placeholder: '',
  titleStyle: {},
  inputStyle: {},
  onChangeText: () => { },
  onFocus: () => { },
  onBlur: () => { },
  value: '',
  textprops: {},
  inputprops: {},
  inputType: null,
};

Input.propTypes = {
  title: propTypes.string,
  placeholder: propTypes.string,
  titleStyle: propTypes.shape({}),
  inputStyle: propTypes.shape({}),
  placeholde:  propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  textprops: propTypes.object,
  inputprops: propTypes.object,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  inputType: propTypes.any,
};

export default Input;
