const { Navigation } = require('react-native-navigation');
const React = require('react');
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import DashBoard from './src/screens/DashBoard';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('DashBoard', () => DashBoard);
Navigation.registerComponent('Signup', () => Signup);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login'
            }
          }
        ]
      }
    }
  });
});
