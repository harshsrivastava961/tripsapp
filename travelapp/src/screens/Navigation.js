import { Navigation } from 'react-native-navigation';
import { RNNDrawer } from "react-native-navigation-drawer-extension";

import MyTrips from './MyTrips';
import Offers from './Offers';
import TripIdeas from './TripIdeas';
import Wallet from './Wallet';
import DashBoard from './DashBoard';
import Drawer from './Drawer';
import Settings from './Settings';
import Profile from './Profile'

Navigation.registerComponent(`MyTrips`, () => MyTrips);
Navigation.registerComponent(`Offers`, () => Offers);
Navigation.registerComponent(`TripIdeas`, () => TripIdeas);
Navigation.registerComponent(`Wallet`, () => Wallet);
Navigation.registerComponent(`DashBoard`, () => DashBoard);
Navigation.registerComponent(`Drawer`, () => RNNDrawer.create(Drawer));
Navigation.registerComponent('Settings', () => Settings);
Navigation.registerComponent('Profile', () => Profile);


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
                  text: 'Offer',
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
                  text: 'Trip Idea',
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
        fadeOpacity: 0.7,
        drawerScreenWidth: "61%" || 444, 
        drawerScreenHeight: "100%" || 700,
        style: { 
          backgroundColor: "white",
        },
      },
    }
  });
  RNNDrawer.dismissDrawer();
}

export const goToDrawerScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Drawer',
        children: [
          {
            component: {
              name: "Settings",
            }
          },
          {
            component: {
              name: "Profile",
            }
          },
        ]
      }
    }
  })
}