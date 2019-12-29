import React from 'react';
import { View } from 'react-native';

// Components
import Header from '../components/Header'
import Button from '../components/Button'

// Importation du theme
import { BUTTON } from '../constants/theme'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Header title="Connexion/Inscription" />
                
                <Button screen="Login" text="CONNEXION" ui={[BUTTON.purple, BUTTON.noRepeat]}/>
                <Button screen="Register" text="INSCRIPTION" ui={[BUTTON.white, BUTTON.noRepeat]} />
            </View>

        );
    }
}

export default HomeScreen;