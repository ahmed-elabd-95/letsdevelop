import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
export const AccessButton = (props) => {
  const {add} = styles;
  const {title, onPress, buttonstyle, textColor, iconstyle, icon} = props;

  return (
    <TouchableOpacity style={[add, buttonstyle]} onPress={onPress}>
      <Image style={iconstyle} source={icon} />
      <Text style={textColor}> {title} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  add: {
    alignItems: 'center',
    width: 263,
    height: 40,
    justifyContent: 'center',
    borderRadius: 22,
    shadowColor: '#676767',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 5,
    backgroundColor: '#fff',
  },
});
