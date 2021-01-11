import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';

const AppNavigator=createStackNavigator(
        {
        Login : LoginScreen,
        Chat : ChatScreen,
        },
        {
          headerMode:'none',
        }

);
export default createAppContainer(AppNavigator);