import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/NavigationService';


export default class App extends React.Component {

  render() {
    return (
      <AppNavigator
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
    );
  }
}