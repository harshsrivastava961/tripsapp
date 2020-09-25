const React = require('react');
const { View, Text, StyleSheet } = require('react-native');

class Profile extends Component{
  constructor(props){
      super(props);
      this.props = props;
  }

  componentDidMount(){
      getUserDetail = async () => {
          const email =await AsyncStorage.getItem('token');
          this.props.signIn.getUserFromDatabase(email);
      }
      getUserDetail();
  }

  render(){
      const {userDetails} = this.props.signIn;
      return(
          <View style={{flex :1}}>
              <Text style={styles.text}>{userDetails.username}</Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  headerButton :{
      height : 30,
      width : 30,
      marginRight : 10
  },   
  imagePicker :{
      height : 120,
      width : 120,
      borderRadius : 50,
      borderWidth :3,
      alignSelf : 'center',
  },
  text :{
      fontSize : 30,
      color : 'red'
  }
})

export default Profile;