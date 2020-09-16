const React = require('react');
const { View, Text, StyleSheet } = require('react-native');


const Wallet = () => {
    return (
      <View style={styles.root}>
        <Text>Wallet Screen</Text>
      </View>
    );
  }

  export default Wallet;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });