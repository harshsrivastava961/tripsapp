const React = require('react');
const { View, Text, StyleSheet } = require('react-native');


const Drawer = () => {
    return (
      <View style={styles.root}>
        <Text>Hello</Text>
      </View>
    );
  }

  export default Drawer;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });