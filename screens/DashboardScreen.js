import React from 'react';
import { View, Text } from 'react-native';

// Components
import Header from '../components/Header'
import Button from '../components/Button'

// Importation du theme
import { BUTTON } from '../constants/theme'


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
        };
      }    
    
    render() {
        
        const { props } = this;
        const { name } = props.navigation.state.params;
    
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Header title="Vous êtes connecté" />

                <Text>Bonjour{' '}{name}, bienvenue sur notre application mobile.</Text>

                <Button screen="Home" text="DÉCONNEXION" ui={[BUTTON.white, BUTTON.noRepeat]}/>
            </View>

        );
    }
}

export default LoginScreen;