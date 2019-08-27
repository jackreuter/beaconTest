import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Switch } from 'react-native';

function BeaconLevel({ currentBeaconLevel, setBeaconLevel }) {
  return (
    <View>
      <Switch
    value={currentBeaconLevel}
    onValueChange={setBeaconLevel}
      />
      {currentBeaconLevel === false ? (
        <Text>
           Your beacon is OFF. Slide toggle to start catching up!
        </Text>
      ) : 
       <Text>
       Your beacon is ON. You will be connected with a friend shortly!
       </Text>
}
    </View>
  );
}

export default BeaconLevel;
