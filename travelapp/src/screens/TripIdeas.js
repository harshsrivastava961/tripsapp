import React, { Component } from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const base_width = width / 1;

const images = [
  {
    id: 1,
    src: require('../assets/place1.jpg')
  },
  {
    id: 2,
    src: require('../assets/place2.jpg')
  },
  {
    id: 3,
    src: require('../assets/place3.jpg')
  },
  {
    id: 4,
    src: require('../assets/place4.jpg')
  },
];

export default class TripIdeas extends Component {

	render() {
		return (
			<View style={styles.container}>
        <FlatList
          data={images}
          keyExtractor={(item, index) => item.id.toString()}
          numColumns={1}
          renderItem={this.renderImage}
        />
			</View>
		);
	}
  

  renderImage = ({ item }) => {
    return (
      <Image
        source={item.src}
        style={{width: base_width, height: 250}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});