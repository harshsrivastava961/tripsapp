import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const news_items = [
  {
    id: 1,
    title: 'Jaipur',
    summary: 'The city sits as the capital of Rajasthan and a window into India’s mesmerising history.',
    image: require('../assets/image1.jpg'),
  },
  {
    id: 2,
    title: 'Shillong',
    summary: "he hill station of Shillong also serves as the capital of the state of Meghalaya, and so can be rather busy tourist destination.",
    image: require('../assets/image2.jpg')
  },
  {
    id: 3,
    title: 'Goa',
    summary: 'With 51 beaches along its coastline, Goa is considered by many to be the party capital of India.',
    image: require('../assets/image3.jpg')
  },
];

export default class MyTrips extends Component {
	render() {
		return (
			<View style={styles.container}>

        <FlatList
          data={news_items}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={this.renderItem}
        />
			</View>
		);
	}
  //

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.goToNews}>
        <View style={styles.news_item}>
          <View style={styles.news_text}>
            <View style={styles.text_container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.summary}</Text>
            </View>
          </View>
          <View style={styles.news_photo}>
            <Image source={item.image} style={styles.photo} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  //


  goToNews = () => {

  }
}
//

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  news_item: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
  news_text: {
    flex: 2,
    flexDirection: 'row',
    padding: 15
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'georgia'
  },
  news_photo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width: 120,
    height: 120
  }
});