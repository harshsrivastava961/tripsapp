import { Navigation } from 'react-native-navigation';
import MyTrips from './MyTrips';
import Offers from './Offers';
import TripIdeas from './TripIdeas';
import Wallet from './Wallet';
import DashBoard from './DashBoard';
import Drawer from './Drawer';

Navigation.registerComponent(`MyTrips`, () => MyTrips);
Navigation.registerComponent(`Offers`, () => Offers);
Navigation.registerComponent(`TripIdeas`, () => TripIdeas);
Navigation.registerComponent(`Wallet`, () => Wallet);
Navigation.registerComponent(`DashBoard`, () => DashBoard);
Navigation.registerComponent(`Drawer`, () => Drawer);


export const goToTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabsMain',
        children: [
          {
            component: {
              name: "DashBoard",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'DashBoard',
                 icon: require('../assets/hometab.jpg'),
                }
              },
            }
          },
          {
            component: {
              name: "MyTrips",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'My Trip',
                  icon: require('../assets/mytrip.jpg'),                
                }
              }
            }
          },
          {
            component: {
              name: "Offers",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'Offers',
                  icon: require('../assets/offers.jpg'),                
                }
              }
            }
          },
          {
            component: {
              name: "TripIdeas",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'Trip Ideas',
                  icon: require('../assets/tripidea.jpg'),                
                }
              }
            }
          },
          {
            component: {
              name: "Wallet",
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: 'Wallet',
                  icon: require('../assets/wallet.jpg'),                
                }
              }
            }
          }
        ]
      }
    }
  })
}
export const goToDrawer = () => {
  RNNDrawer.showDrawer({
    component: {
      name: "Drawer",
      passProps: {
        direction: "left",
        dismissWhenTouchOutside: true,
        fadeOpacity: 0.5,
        drawerScreenWidth: "70%" || 450, 
        drawerScreenHeight: "100%" || 680,
        style: { 
          backgroundColor: "orange",
        },
      },
    }
  });
  RNNDrawer.dismissDrawer();
}