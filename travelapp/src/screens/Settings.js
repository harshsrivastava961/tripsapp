import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import stringsoflanguages from './languageStrings';

export default class Settings extends React.Component {
  constructor(props) {
    const lang = [
      { shortform: 'hi', longform: 'Hindi' },
      { shortform: 'en', longform: 'English' },
    ];
    global.lang = lang;
  }
  settext(value) {
    stringsoflanguages.setLanguage(value);
    this.props.navigation.navigate('ContentScreen' , {JSON_Clicked_Item:value,});
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginTop: 60 }}>
          <Text style={styles.headingText}>
            Please Select Preferred Language
          </Text>
        </View>
        <Image
          source={{
           image: require('../assets/logo.jpg')
          }}
          style={styles.img}
        />
        <ScrollView style={{ marginTop: 30, width: '80%' }}>
          {global.lang.map((item, key) => (
            <View style={styles.elementContainer} key={key}>
              <Text
                ref={item.shortform}
                onPress={() => this.settext(item.shortform)}
                style={styles.text}>
                {item.longform}
              </Text>
              <View style={styles.saparatorStyle} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: { 
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  headingText: {
    color: '#191919',
    fontSize: 30,
    textAlign: 'center'
  },
  img: { 
    width: 64,
    height: 64,
    marginTop: 30 
  },
  elementContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  text: {
    color: '#191919',
    fontSize: 25
  },
  saparatorStyle: {
    height: 0.5,
    width: '60%',
    backgroundColor: '#C2C2C2',
    marginTop: 10,
  },
});