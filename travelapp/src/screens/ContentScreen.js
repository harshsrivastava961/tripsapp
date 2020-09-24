import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LanguageStrings from './LanguageStrings';

export default class second extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'Default Title'),
    };
  };
  componentDidMount() {
    var that = this;
    var heading = '';
    if (this.props.navigation.state.params.JSON_Clicked_Item == 'hi') {
      heading = 'Hindi is the selected Language';
    } else if (
      this.props.navigation.state.params.JSON_Clicked_Item == 'en'
    ) {
      heading = 'English is the selected Language';
    }
    that.props.navigation.setParams({
      Title: heading,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.style}> {LanguageStrings.first}</Text>
        <Text style={styles.style}> {LanguageStrings.second} </Text>
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
  style: {
    color: '#191919',
    fontSize: 25,
    marginTop: 15
  },
});