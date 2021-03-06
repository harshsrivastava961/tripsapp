import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import {goToDrawer} from './Navigation';

const { Navigation } = require('react-native-navigation');
export default class Dashboard extends Component {
  
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
    
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
     this.props.navigation.navigate('Login')
     Navigation.push(this.props.componentId, {
      component: {
        name: 'Login',
        options: {
          topBar: {
            title: {
              text: 'Login'
            }
          }
        }
      }
    })
    
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  renderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
  }
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
    }    
    return (
      <View style={styles.container}>
      <Button style={styles.container}
          title='Drawer'
          color='orange'
          onPress={() => Navigation.push(this.props.componentId,
              goToDrawer()
          )}/>
       <Text style = {styles.textStyle}>Hello, {this.state.displayName}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 0,
    backgroundColor: 'White'
  },
  textStyle: {
    fontSize: 14,
    marginBottom: 11
  },
  drawersStyle: {
    padding: 0,
    backgroundColor: 'white'
  }
});