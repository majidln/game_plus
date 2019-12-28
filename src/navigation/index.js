import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './../screen/home';
import SettingScreen from './../screen/setting';
import ShopScreen from './../screen/shop';
import SupportScreen from './../screen/support';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Shop: {
    screen: ShopScreen,
  },
  Support: {
    screen: SupportScreen,
  },
  setting: {
    screen: SettingScreen,
  },
});

export default createAppContainer(AppNavigator);
