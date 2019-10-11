import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
// import { View } from 'react-native-animatable';
import Home from './Home';
import Barcode from './Barcode';
import Dashboard from './Dashboardpage';
import Settings from './Settings';
//import authen from '../authen';

class BottomNavigator extends React.Component {
    constructor()
    {
        super();
        this.homedetail = this.homedetail.bind(this);
        this.bardetail = this.bardetail.bind(this);
        this.dashdetail = this.dashdetail.bind(this);
        this.setdetail = this.setdetail.bind(this);
    }
    homedetail=()=>{this.props.navigation.navigate("Home")};
    bardetail=()=>{this.props.navigation.navigate("Barcode")};
    dashdetail=()=>{this.props.navigation.navigate("Dashboard")};
    setdetail=()=>{this.props.navigation.navigate("Settings")};
    render(){
        return(
                        <View style = {styles.container}>
            <TouchableOpacity style={styles.box}>
            <Text style = {styles.text} onPress={this.homedetail}>
                Home
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style = {styles.text} onPress={this.bardetail}>
                Barcode
            </Text>
            </TouchableOpacity>



            <TouchableOpacity style={styles.box}>
            <Text style = {styles.text} onPress={this.dashdetail}>
                Dashboard
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style = {styles.text} onPress={this.setdetail}>
                Settings
            </Text>
            </TouchableOpacity>
            </View>

        );
    }
}

const AppBottomTabNavigator = createBottomTabNavigator(
    {
    Home: Home,
   // Analytics: Analytics,
    Barcode: Barcode,
    Dashboard: Dashboard,
    Settings: Settings,
  })

  const AppContainer = createAppContainer(AppBottomTabNavigator);
  export default AppContainer;

const styles = StyleSheet.create ({
    container: {
    //  marginTop:'10%',
     flexDirection:"row"
  },
  box:{
    
    height:hp('2%'),
    width:wp('5%'),
    justifyContent:'center',
   backgroundColor:'black'
    

  },
  text: {
     borderWidth: 3,
     borderRadius:10,
     justifyContent:'center',
     padding: 20,
     borderColor: 'black',
     backgroundColor: 'white'
  }
})
