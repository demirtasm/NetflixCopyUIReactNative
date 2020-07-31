import React from 'react';
import {Text, View, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = (props) => (
  <TextInput
    placeholder={props.placeholder}
    placeholderTextColor="grey"
    style={[styles.inputTextStyle, props.style]}
  />
);
const styles = {
  inputTextStyle: {
    backgroundColor: '#333333',
    color: 'white',
    width: '99%',
    height: '25%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#333333',
    textDecorationColor: 'white',
    paddingLeft: 20,
    fontSize: 15,
  },
};
export {Input};
