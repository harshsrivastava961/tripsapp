import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
const {textStyle, viewStyle} = styles;

return(
    <View style={viewStyle}>
    <Text style={textStyle}>DashBoard screen</Text>
    </View>
);
};

const styles = {
    viewStyle: {
        backbgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;