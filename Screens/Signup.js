import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Button} from '../Components/Button';
import {Input} from '../Components/Input';
export class Signup extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/loginbages.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <View
          style={{
            top: '10%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          
          <Text style={{fontSize:24, marginBottom:20, color:'#fff'}}>Create account</Text>
          <View>
          <Input
              placeholder="Full name"
              viewstyle={{marginBottom: 10}}
            />
            <Input
              placeholder="Username"
              viewstyle={{marginBottom: 10}}
            />
            <Input
              type="email-address"
              placeholder="Email address"
              viewstyle={{marginBottom: 10}}
            />
            <Input secure={true} placeholder="password" />
          </View>
        </View>
        <View style={{top: '40%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '40%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Access')}
              title="Sign up"
              buttonstyle={{
                backgroundColor: '#fff',
                width: 176,
                height: 40,
                borderColor: '#fff',
              }}
              textColor={{color: '#000'}}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '20%',
              }}>
              <Image
                style={{width: 24, height: 24}}
                source={require('../images/facebook.png')}
              />
              <Image
                style={{width: 24, height: 24}}
                source={require('../images/google.png')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
