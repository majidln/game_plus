import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Label, Icon} from './index';

export class Button extends Component {
  render() {
    const {label, onPress, iconName, style, labelStyle} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={[styles.wrapper, style || {}]}>
        <Label style={labelStyle || {}}>{label || ''}</Label>
        {this.renderIcon(iconName)}
      </TouchableOpacity>
    );
  }

  renderIcon = name => {
    if (name) {
      return <Icon name={name} />;
    }
    return null;
  };
}

const styles = {
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
