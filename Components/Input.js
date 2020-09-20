import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export const Input = props => {
  const {userInput} = styles;
  const {
    placeholder,
    type,
    secure,
    inputStyle,
    viewstyle
  } = props;
  return (
    <View style={[userInput, viewstyle]}>
      <TextInput
        style={[{paddingHorizontal: 10, flex: 1, height: 60}, inputStyle]}
        secureTextEntry={secure}
        keyboardType={type}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userInput: {
    paddingHorizontal: 15,
    width: 330,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#676767',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 35,
    elevation: 3,
    backgroundColor: '#fff',

  },
});
