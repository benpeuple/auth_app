import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Header extends React.Component {
    render() {

        return (
            <Text style={styles.text}>{this.props.title}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#5f0ce6',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20,
    }

})

export default Header;