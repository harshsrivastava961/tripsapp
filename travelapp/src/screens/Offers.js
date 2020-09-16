const React = require('react');
const { View, Text, StyleSheet } = require('react-native');


const Offers = () => {
    return (
      <View style={styles.root}>
        <Text>Offers Screen</Text>
      </View>
    );
  }

  export default Offers;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });