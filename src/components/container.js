import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

export class Container extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.wrapper, this.props.style]}>
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
  },
};
