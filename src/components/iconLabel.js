import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Label} from './index';

export class IconLabel extends Component {
  render() {
    const {source, label, style} = this.props;
    return (
      <View style={[styles.wrapper, style]}>
        <Image style={styles.icon} source={source} />
        <Label style={styles.label}>{label}</Label>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: 'white',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
};
