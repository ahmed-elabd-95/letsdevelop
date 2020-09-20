import React from 'react';
import { Text,  TouchableOpacity, StyleSheet} from 'react-native';
export const Button = props => {
  const {add} = styles;
  const {title,   onPress,  buttonstyle, textColor} = props;

  return (
    <TouchableOpacity style={[add, buttonstyle]} onPress={onPress}>
        <Text style={textColor}> {title} </Text>

    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  add: {
    alignItems: 'center',
    width: 176,
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
    borderWidth: 1,
  },
});
