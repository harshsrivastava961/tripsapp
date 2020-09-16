import { Navigation } from 'react-native-navigation'

export const goToTab = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'DashBoard',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'DashBoard',
              }
            }
          },
        },
        {
          component: {
            name: 'MyTrips',
            options: {
              bottomTab: {
                text: 'My Trips',
                fontSize: 12,
              }
            }
          },
          component: {
            name: 'Offers',
            options: {
              bottomTab: {
                text: 'Offers',
                fontSize: 12,
              }
            }
          },
          component: {
            name: 'TripIdeas',
            options: {
              bottomTab: {
                text: 'Trip Ideas',
                fontSize: 12,
              }
            }
          },
          component: {
            name: 'Wallet',
            options: {
              bottomTab: {
                text: 'Wallet',
                fontSize: 12,
              }
            }
          },
        },
      ],
    }
  }
});