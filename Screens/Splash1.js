import React from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import {Button} from '../Components/Button';
export class Splash1 extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/Splash1.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <View style={{top: '90%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Getstarted')}
              title="skip"
              buttonstyle={{
                backgroundColor: '#fff',
                width: 120,
                height: 36,
                borderColor: '#4D59DE',
              }}
              textColor={{color: '#000'}}
            />
            <Button
              onPress={() => this.props.navigation.navigate('Splash2')}
              title="next"
              buttonstyle={{
                backgroundColor: '#4D59DE',
                width: 120,
                height: 36,
                borderColor: '#4D59DE',
              }}
              textColor={{color: '#fff'}}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
