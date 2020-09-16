const React = require('react');
const { View, Text, StyleSheet } = require('react-native');


const TripIdeas = () => {
    return (
      <View style={styles.root}>
        <Text>TripIdeas Screen</Text>
      </View>
    );
  }

  export default TripIdeas;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });