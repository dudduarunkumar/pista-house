import {Image, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import React, {Component} from 'react';

interface IProps {
  navigation: {
    navigate: Function;
  };
}

export class Splash extends Component<IProps> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('BottomNav');
    }, 100);
  }
  render() {
    return (
      <ImageBackground
        // resizeMode="stretch"
        source={require('../assets/splash1.png')}
        style={styles.splashContainer}>
        <StatusBar hidden />
        <Image source={require('../assets/splashText.png')} />
      </ImageBackground>
    );
  }
}

export default Splash;

export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
