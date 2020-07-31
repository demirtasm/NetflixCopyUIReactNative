
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Input, Form} from './src/components';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{flex: 0.1}}>
          <Image
            source={require('./src/assets/logoNetflix.png')}
            style={styles.headerImage}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: 'center',
          }}>
          <Text style={[styles.textStyle, {fontSize: 35}]}>Sign In</Text>
        </View>
        <Form />
        <View style={styles.flexCenter}>
          <View style={{flex: 0.5}}>
            <View style={styles.flexCenter}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={styles.touchanbleButtonStyle}>
                  <Text style={{color: 'grey'}}></Text>
                </TouchableOpacity>
              </View>
              <Text style={{color: '#A4A4A4', marginLeft: 10}}>
                Remember me
              </Text>
            </View>
          </View>
          <View style={{flex: 0.5, alignItems: 'flex-end'}}>
            <Text style={{color: '#A4A4A4'}}>Need help?</Text>
          </View>
        </View>
        <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
          <View style={{flex: 0.1}}>
            <View style={styles.flexCenter}>
              <Image
                source={require('./src/assets/facebook.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={{color: '#A4A4A4', marginLeft: 10}}>
                Login with Facebook
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.1, justifyContent: 'center'}}>
          <View style={{flex: 0.1}}>
            <View style={styles.flexCenter}>
              <Text style={{color: 'grey', fontSize: 15, marginLeft: 10}}>
                New to Netflix?
              </Text>
              <Text style={[styles.textStyle, {marginLeft: 10}]}>
                Sign up now
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = {
  headerImage: {width: 110, height: 30, marginTop: 15},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  flexCenter: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchanbleButtonStyle: {
    width: 20,
    height: 20,
    borderColor: 'grey',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
