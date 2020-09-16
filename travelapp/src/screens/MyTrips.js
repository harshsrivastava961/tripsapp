const React = require('react');
const { View, Text, StyleSheet } = require('react-native');


const MyTrips = () => {
    return (
      <View style={styles.root}>
        <Text>MyTrips Screen</Text>
      </View>
    );
  }

  export default MyTrips;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });