import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {Icon} from '../Components/Icon';
export class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/home.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            top: '10%',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{fontSize: 40, color: '#fff', alignSelf: 'center'}}></Text>

          <Text style={{fontSize: 40, color: '#fff', alignSelf: 'center'}}>
            22.56
          </Text>

          <Image
            style={{width: 24, height: 24, marginTop: 10}}
            source={require('../images/alert.png')}
          />
        </View>
        <View style={{top: '10%', alignItems: 'center'}}>
          <Image
            style={{width: 220, height: 220}}
            source={require('../images/clock.png')}
          />
        </View>
        <View
          style={{
            height: '50%',
            backgroundColor: '#EFEFEF',
            top: '20%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: '5%',
            }}>
            <Icon
              title="1400"
              symbol="Steps"
              image={require('../images/step.png')}
            />
            <Icon
              title="98"
              symbol="Tap"
              image={require('../images/tap.png')}
            />
            <Icon
              title="20"
              symbol="Shake"
              image={require('../images/shake.png')}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: '10%',
            }}>
            <Icon
              title="560"
              symbol="Distance"
              image={require('../images/Path.png')}
            />
            <Icon
              title="140"
              symbol="Calories"
              image={require('../images/fire.png')}
            />
            <Icon
              title="0/5"
              symbol="Daily Rewards"
              image={require('../images/cup.png')}
            />
          </View>
          <View
            style={{
              width: 343,
              height: 80,
              borderRadius: 10,
              backgroundColor: '#fff',
              marginLeft: 35,
              marginTop:70,
              paddingLeft:10,
              paddingTop: 10
            }}>
                <Text style={{fontSize:24}}>LEVEL 2!</Text>
                <Text style={{fontSize:12, color:'#4D59DE'}}>Reach 10 points today to upgrade to level 3!
Redeem more coins to buy more products.</Text>

            </View>
        </View>
      </ImageBackground>
    );
  }
}
