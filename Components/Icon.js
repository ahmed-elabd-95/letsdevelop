import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export const Icon = (props) => {
  const {add, textColor, symbolColor} = styles;
  const {title, symbol, image} = props;

  return (
    <View style={add}>
      <Image style={{width: 20, height: 20}} source={image} />
      <Text style={textColor}> {title} </Text>
      <Text style={symbolColor}> {symbol} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  add: {
    width: 104,
    height: 116,
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
    backgroundColor: '#6475F0',
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
  textColor: {
    color: '#fff',
    fontSize: 32,
  },
  symbolColor: {
    color: '#fff',
    fontSize: 12,
  },
});
