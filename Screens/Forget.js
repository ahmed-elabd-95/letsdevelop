import React from 'react';
import {
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {Button} from '../Components/Button';
import {Input} from '../Components/Input';
export class Forget extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/loginbages.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <View
          style={{
            top: '20%',
            display: 'flex',
            justifyContent: 'space-around',
            paddingLeft: 20,
            
          }}>
          
          <Text style={{fontSize:24, marginBottom:20, color:'#fff',}}>Forget Password</Text>
          <Text style={{fontSize:14, marginBottom:20, color:'#fff'}}>Please enter your email address. You will
          receive a link to create a new password via email.</Text>
          <View>
            <Input
              type="email-address"
              placeholder="Email address"
              viewstyle={{marginBottom: 10, marginTop: 50,}}
            />
          </View>
        </View>
        <View style={{top: '50%'}}>
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
              title="Send"
              buttonstyle={{
                backgroundColor: '#fff',
                width: 176,
                height: 40,
                borderColor: '#fff',
              }}
              textColor={{color: '#000'}}
            />
            
          </View>
        </View>
      </ImageBackground>
    );
  }
}
