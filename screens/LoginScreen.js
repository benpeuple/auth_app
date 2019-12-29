import React from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Components
import Header from '../components/Header'
import Submit from '../components/Submit'
import Input from '../components/Input'

// Importation du theme
import { BUTTON, COLORS } from '../constants/theme'

// Helpers
import { listUsers } from '../helpers/Users';




class LoginScreen extends React.Component {

    static emailValidate(email) {
        return !listUsers.find((user) => user.email === email);
    }
    

    static passwordValidate(email, password) {
        return !(listUsers.find((user) => user.email === email).password === password);
    }
    
    static getNameByEmail(email) {
        return listUsers.find((user) => user.email === email).name;
    }

    constructor(props) {
        super(props);
        this.state = {
        email: '',
        password: '',
        error: '',
        errorEmail: 'L\'utilisateur renseigné n\'existe pas.',
        errorPassword: 'Le mot de passe est incorrect.',
        };
    }

    onLoginPressed(state) {
        const { navigate } = this.props.navigation;
        this.setState((prevState, props) => ({
          error: '',
        }));
        const emailError = LoginScreen.emailValidate(state.email);
    let passwordError = null;
    if (emailError) {
      this.setError(state.errorEmail);

      Alert.alert(
        'Erreur de connexion',
        state.errorEmail,
        [
            {text: 'J\'ai compris'}
        ],
        { cancelable: false }
      );

    } else {
      passwordError = LoginScreen.passwordValidate(state.email, state.password);
      if (passwordError) {
        this.setError(state.errorPassword);

        Alert.alert(
            'Erreur de connexion',
            state.errorPassword,
            [
                {text: 'J\'ai compris'}
            ],
            { cancelable: false }
          );
      }
    }

    if (emailError || passwordError) {
      navigate('Login', {});
    } else {
      navigate('Dashboard', { name: LoginScreen.getNameByEmail(state.email) });
    }
  }

    setEmail(text) {
        this.setState((prevState, props) => ({
        email: text,
        }));
    }

    setPassword(text) {
        this.setState((prevState, props) => ({
        password: text,
        }));
    }

    setError(error) {
        this.setState((prevState, props) => ({
        error: `${prevState.error}\n- ${error}`,
        }));
    }
    
    render() {

        const { state } = this;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Header title="Connexion" />

                <Input 
                    text="Email" 
                    textColor="#9a9a9a"
                    returnKeyType="next"
                    value={state.email}
                    onChangeText={(text) => this.setEmail(text)}
                    error={!!state.errorEmail}
                    errorText={state.errorEmail}
                />

                <Input 
                    text="Mot de passe" 
                    secure={true} 
                    textColor="#9a9a9a"
                    returnKeyType="next"
                    value={state.password}
                    onChangeText={(text) => this.setPassword(text)}
                    error={!!state.errorPassword}
                    errorText={state.errorPassword}      
                />

                <Submit onPress={() => this.onLoginPressed(state)} text="CONNEXION" ui={[BUTTON.purple, BUTTON.noRepeat]}/>

                <Text>Pas encore de compte ?</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>S'inscrire</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default LoginScreen;