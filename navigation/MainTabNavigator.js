import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import ComponentScreen from '../screens/ComponentScreen';
import ListScreen from '../screens/ListScreen';
import { ImageScreen } from '../screens/';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { headerTitle: 'Home' },
  },
  Components: {
    screen: ComponentScreen,
    navigationOptions: { headerTitle: 'Component' },
  },
  Image: {
    screen: ImageScreen,
    navigationOptions: { headerTitle: 'Image' },
  },
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

const ListStack = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: { headerTitle: 'List' },
  },
});

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ListStack,
});

tabNavigator.path = '';

export default tabNavigator;
