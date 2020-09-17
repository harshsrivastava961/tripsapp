import { Navigation } from 'react-native-navigation';
import MyTrips from './MyTrips';
import Offers from './Offers';
import TripIdeas from './TripIdeas';
import Wallet from './Wallet';
import DashBoard from './DashBoard'

Navigation.registerComponent(`MyTrips`, () => MyTrips);
Navigation.registerComponent(`Offers`, () => Offers);
Navigation.registerComponent(`TripIdeas`, () => TripIdeas);
Navigation.registerComponent(`Wallet`, () => Wallet);
Navigation.registerComponent(`DashBoard`, () => DashBoard);


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
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'SideMenuMain',
        children: [
          {
            component: {
              name: "Profile",
              options: {
                sideMenu: {
                  fontSize: 11,
                  text: 'Profile',
                }
              },
            }
          },
        ]
      }
    }
  })
}
