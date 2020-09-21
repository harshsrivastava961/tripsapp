const React = require('react');
const { View, Text, StyleSheet } = require('react-native');

const Profile = () => {
    return (
      <View style={styles.root}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
  
  export default Profile;
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });