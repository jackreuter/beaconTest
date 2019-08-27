import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from 'expo-constants';

// phone calls
import call from 'react-native-phone-call'

// You can import from local files
import ContactList from '../components/ContactList';
import BeaconLevel from '../components/BeaconLevel';

// or any pure javascript modules available in npm
import { MonoText } from '../components/StyledText';
import { Card } from 'react-native-paper';

export default class HomeScreen extends React.Component {
  state = { clicked: false, beaconLevel: false };

  setBeaconLevel = (value) => {
    this.setState({beaconLevel: value})
    if (value == true) {
 
      const args = {
        number: '+19143642232', // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
      }
 
      call(args).catch(console.error)
    }
  }

  render() {
    return (
        <View
      style={[
               styles.container,
               styles['beaconLevel' + this.state.beaconLevel],
             ]}>
        <Text style={styles.heading}>Beacon</Text>
        <BeaconLevel
      setBeaconLevel={this.setBeaconLevel}
      currentBeaconLevel={this.state.beaconLevel}
        />
        </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  heading: {
    marginTop: 32,
    marginBottom: 16,
    fontSize: 36,
  },             
  beaconLevelfalse: {
    backgroundColor: '#ddd',
  },
  beaconLeveltrue: {
    backgroundColor: '#fcdb03',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
