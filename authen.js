import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
//import AppNavigator from './components/AppNavigator';
import BottomNavigator from './components/BottomNavigator'
import Login from './components/Login';
import Home from './components/Home';
import Barcode from './components/Barcode';
import Dashboard from './components/Dashboardpage';
import Settings from './components/Settings';
import Books from './components/Books';
import BookPage from './components/BookPage';
import BookDetails from './components/BookDetails';
import Aboutus from './components/Aboutus';


// import IT from './components/IT';
// import CL from './components/CL';
// import MEC from './components/MEC';

// import extra from './components/extra';
//import tryagain from './components/tryagain'


// const Appcontainer1 = createAppContainer(AppNavigator);


 class App extends React.Component {
  render()
  {
  return (
    <View style={styles.container}
     />
  );
}
}


const Nav=createStackNavigator(
  {
    
    BottomNavigator:{screen:BottomNavigator},
    Books:{screen:Books},
    BookPage:{screen:BookPage},
    BookDetails:{screen:BookDetails},
    Aboutus:{screen:Aboutus}
  
   
  }
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(Nav);
 export default AppContainer;