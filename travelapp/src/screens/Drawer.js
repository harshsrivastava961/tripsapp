const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');
import {goToDrawerScreen} from './Navigation';

const Drawer = (props) => {
    return (
      goToDrawerScreen(),
      <View style={styles.root}>
       <Text style={styles.Header}>Welcome,</Text>
       <Button
        title='Setting'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings',
            options: {
              topBar: {
                title: {
                  text: 'Settings'
                }
              }
            }
          }
        })}/>
        <Button
        title='Profile'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Profile',
            options: {
              topBar: {
                title: {
                  text: 'Profile'
                }
              }
            }
          }
        })}/>
      </View>
    );
  }

  Navigation.setDefaultOptions({
    topBar: {
      title: {
        color: 'white'
      },
      backButton: {
        color: 'black'
      },
      background: {
        color: 'orange'
      }
    }
  });

  export default Drawer;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
     textStyle: {
          fontSize: 20,
          paddingTop: 20
      },
      Header: {
        fontSize: 20,
        backgroundColor: 'orange'
    }
  });


