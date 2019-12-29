import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../navigation/NavigationService';


class Button extends React.Component {

    render() {
        return (
                <TouchableOpacity onPress={() => NavigationService.navigate(this.props.screen)}  style={this.props.ui}>
                    <Text style={this.props.ui}>{this.props.text}</Text>
                </TouchableOpacity>
        );
    }

}

export default Button;