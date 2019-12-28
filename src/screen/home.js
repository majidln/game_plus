import React from 'react';
import {View, Text, Image} from 'react-native';
import {Container, Label, IconLabel} from './../components';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        {this.renderTopBar()}
        <Text>Home Screen</Text>
      </Container>
    );
  }

  renderTopBar = () => {
    return (
      <View style={styles.topBarWrapper}>
        <View style={styles.topBar}>
          <View style={styles.topBarProfile}>
            <Image
              style={styles.profileImg}
              source={require('./../assets/profile.png')}
            />
            <Label style={styles.profileName}>Majid</Label>
          </View>
          <View style={styles.topBarGift}>
            <IconLabel
              source={require('./../assets/medal.png')}
              label="1"
              style={styles.topBadget}
            />
            <IconLabel
              source={require('./../assets/diamond.png')}
              label="2"
              style={styles.topBadget}
            />
          </View>
          <View style={styles.topBarCoin}>
            <Image
              style={styles.coinIcon}
              source={require('./../assets/treasure.png')}
            />
          </View>
        </View>
      </View>
    );
  };

  static navigationOptions = ({navigation}) => ({
    header: null,
  });
}

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: '#3446A2',
  },
  topBarWrapper: {
    padding: 20,
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#279453',
    borderRadius: 30,
    padding: 5,
  },
  topBarProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 50 / 2,
  },
  profileName: {
    paddingLeft: 5,
    color: 'white',
  },
  topBarGift: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBadget: {
    paddingLeft: 10,
  },
  topBarCoin: {
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    width: 30,
    height: 30,
  },
};

export default HomeScreen;
