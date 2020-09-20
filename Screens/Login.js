import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../Components/Button';
import {Input} from '../Components/Input';
export class Login extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/loginbages.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <View
          style={{
            top: '15%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <Image
            style={{width: 79.33, height: 79.33, marginBottom: 40}}
            source={require('../images/login.png')}
          />
          <View>
            <Input
              type="email-address"
              placeholder="Email address"
              viewstyle={{marginBottom: 20}}
            />
            <Input secure={true} placeholder="password" />
          </View>
        </View>
        <View style={{top: '45%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '50%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Access')}
              title="Login"
              buttonstyle={{
                backgroundColor: '#fff',
                width: 176,
                height: 40,
                borderColor: '#fff',
              }}
              textColor={{color: '#000'}}
            />
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Forget')}
            >
              <Text style={{color: '#55C3FF'}}>Forget password</Text>
            </TouchableOpacity>
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={{color: '#fff'}}>Don't have an account?</Text>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}
              >
                <Text style={{color: '#55C3FF'}}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
