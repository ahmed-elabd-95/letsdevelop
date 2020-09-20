import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../Components/Button';
import {AccessButton} from '../Components/AccessButton';
export class Access extends React.Component {
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
            alignItems:'center'
          }}>
          <Text style={{fontSize: 24, marginBottom: 20, color: '#fff'}}>
            Access Required
          </Text>
          <View>
          <AccessButton 
          buttonstyle={{display:'flex', flexDirection:'row', marginBottom: 20}}
 iconstyle={{width: 16, height: 16}}
 icon={require('../images/google.png')}
 title="Google fit"/>
  <AccessButton 
          buttonstyle={{display:'flex', flexDirection:'row'}}
 iconstyle={{width: 16, height: 16}}
 icon={require('../images/location.png')}
 title="Location"/>
          </View>
          <View>
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
              onPress={() => this.props.navigation.navigate('Home')}
              title="Grand Permission"
              buttonstyle={{
                backgroundColor: '#fff',
                width: 176,
                height: 40,
                borderColor: '#fff',
              }}
              textColor={{color: '#000'}}
            />
            <TouchableOpacity>
              <Text style={{color: '#55C3FF'}}>More information</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
