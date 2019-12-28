import React from 'react';
import {View, Text} from 'react-native';

class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Setting Screen</Text>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default SettingScreen;
