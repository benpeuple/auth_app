import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Submit extends React.Component {

    render() {
        return (
                <TouchableOpacity onPress={this.props.onPress}  style={this.props.ui}>
                    <Text style={this.props.ui}>{this.props.text}</Text>
                </TouchableOpacity>
        );
    }

}

export default Submit;