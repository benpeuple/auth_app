import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

class Input extends React.Component {
      
    render() {
        return (
            <TextInput 
                secureTextEntry={this.props.secure} 
                placeholder={this.props.text} 
                placeholderTextColor={this.props.textColor}  
                style={styles.input}
                value={this.props.value}
                returnKeyType={this.props.returnKeyType}
                onChangeText={this.props.onChangeText}
                error={this.props.error}
                errorText={this.props.errorText}
            />

        );
    }
}

const styles = StyleSheet.create({
      input: {
        borderColor: '#9a9a9a', 
        borderWidth: 1.5,
        borderRadius: 5,
        height: 50,
        width: 280,
        marginVertical: 5,
        marginHorizontal: 50,
        padding: 10,
        fontWeight: 'bold'
      }
})

export default Input;