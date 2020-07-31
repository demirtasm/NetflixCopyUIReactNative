import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Input} from './Input';
const {width, height} = Dimensions.get('window');

const Form = (props) => (
  <View style={{flex: 0.4, alignItems: 'center', marginTop: 40}}>
    <Input placeholder="Email or phone number" />
    <Input placeholder="Password" style={{marginTop: 20}} />
    <View style={{justifyContent: 'flex-end', width: '100%', flex: 1}}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={[styles.textStyle, {fontSize: 20}]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = {
  buttonStyle: {
    backgroundColor: 'red',
    width: '100%',
    height: '55%',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#333333',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
};
export {Form};
