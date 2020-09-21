import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
const { Navigation } = require('react-native-navigation');

const Drawer = () => {
    return (
      <View style={styles.root}>
        <Text style={styles.Header}>Welcome,</Text>
        <Text style={styles.textStyle}
          onPress={() => Navigation.push(this.props.componentId, {
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
          })}>
          Profile
        </Text>
        <Text
        style={styles.textStyle}
          onPress={() => Navigation.push(this.props.componentId, {
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
          })}>
          Settings
        </Text>
        <Text
        style={styles.textStyle}
         onPress={() => Navigation.push(this.signOut())}>
          LogOut
        </Text>
      </View>
    );
  }

  export default Drawer;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
     textStyle: {
          fontSize: 25,
          paddingTop: 20
      },
      Header: {
        fontSize: 30,
        backgroundColor: 'orange'
    }
  });


