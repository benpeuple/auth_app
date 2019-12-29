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


class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
          error: '',
          errorName: 'Le nom doit être composé d\'au moins 2 caractères.',
          errorEmail: 'Il y a un problème avec l\'adresse email renseigné.',
          errorPassword: 'Le mot de passe doit comporter au moins 8 caractères, 1 chiffre, 1 lettre en majuscule, 1 en minuscule.',
        };
    }

    static nameValidate(name) {
        return !(name.length > 2);
    }

    static emailValidate(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(String(email).toLowerCase());
    }

    static passwordValidate(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        return !re.test(String(password));
    }

    onRegisterPressed(state) {
        const { navigate } = this.props.navigation;
        this.setState((prevState, props) => ({
          error: '',
    }));

    const nameError = RegisterScreen.nameValidate(state.name);
    const emailError = RegisterScreen.emailValidate(state.email);
    const passwordError = RegisterScreen.passwordValidate(state.password);

    if (nameError || emailError || passwordError) {
        if (nameError) {
          this.setError(state.errorName);

          Alert.alert(
            'Erreur d\'inscription',
            state.errorName,
            [
                {text: 'J\'ai compris'}
            ],
            { cancelable: false }
          );
        }
        if (emailError) {
          this.setError(state.errorEmail);

          Alert.alert(
            'Erreur d\'inscription',
            state.errorEmail,
            [
                {text: 'J\'ai compris'}
            ],
            { cancelable: false }
          );
        }
        if (passwordError) {
          this.setError(state.errorPassword);

          Alert.alert(
            'Erreur d\'inscription',
            state.errorPassword,
            [
                {text: 'J\'ai compris'}
            ],
            { cancelable: false }
          );
        }
  
        navigate('Register', {});
      } else {
        listUsers.push({
          name: state.name,
          email: state.email,
          password: state.password,
        });
        navigate('Dashboard', { name: state.name });
      }
    }

    setName(text) {
        this.setState((prevState, props) => ({
          name: text,
        }));
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

                <Header title="Inscription" />

                <Input 
                    text="Nom" 
                    value={state.name} 
                    returnKeyType="next" 
                    textColor="#9a9a9a" 
                    onChangeText={(text) => this.setName(text)} 
                    error={!!state.errorName} 
                    errorText={state.errorName} 
                />

                <Input 
                    text="Email" 
                    value={state.email} 
                    returnKeyType="next" 
                    textColor="#9a9a9a" 
                    onChangeText={(text) => this.setEmail(text)} 
                    error={!!state.errorEmail} 
                    errorText={state.errorEmail} 
                />

                <Input 
                    text="Mot de passe"
                    secure={true}
                    value={state.password} 
                    returnKeyType="next" 
                    textColor="#9a9a9a" 
                    onChangeText={(text) => this.setPassword(text)} 
                    error={!!state.errorEmail} 
                    errorText={state.errorEmail} 
                />

                <Submit onPress={() => this.onRegisterPressed(this.state)} text="INSCRIPTION" ui={[BUTTON.purple, BUTTON.noRepeat]}/>

                <Text>Déjà inscrit ?</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>Connectez-vous</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default RegisterScreen;