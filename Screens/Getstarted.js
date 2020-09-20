import React from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import {Button} from '../Components/Button';
export class Getstarted extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/Getstarted.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <View style={{top: '70%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '50%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              title="Login"
              buttonstyle={{
                backgroundColor: '#fff',
                width: 176,
                height: 40,
                borderColor: '#fff',
              }}
              textColor={{color: '#000'}}
            />
            <Button
              onPress={() => this.props.navigation.navigate('Signup')}
              title="Create account"
              buttonstyle={{
                backgroundColor: '#4D59DE',
                width: 176,
                height: 40,
                borderColor: '#fff',
              }}
              textColor={{color: '#fff'}}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
