import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import firebase from '../database/firebase';
import {goToDrawer} from './Navigation';
import Header from '../components/Header'

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
        <Header/>
                <Text style = {styles.textStyle}>Hello, {this.state.displayName}
        </Text>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => Navigation.push(this.signOut())}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 10
  }
});