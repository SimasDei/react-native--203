import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import ComponentScreen from '../screens/ComponentScreen';

const config = Platform.select({
  initialRouteName: 'Components',
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const ComponentStack = createStackNavigator({ Components: ComponentScreen }, config);

ComponentStack.navigationOptions = {
  tabBarLabel: 'Components',
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ComponentStack,
});

tabNavigator.path = '';

export default tabNavigator;
