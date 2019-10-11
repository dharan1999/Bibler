import React from 'react';
import { View, TouchableHighlight,StyleSheet, Text,Button } from 'react-native';
//import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';
import Aboutus from './Aboutus';
import call from 'react-native-phone-call';

export default class Settings extends React.Component{
  constructor()
  {
    super();
    this.onSignoutPress=this.onSignoutPress.bind(this);
    this.contactus=this.contactus.bind(this);
    this.biblerdetails=this.biblerdetails.bind(this);
   
   
  }
  static navigationOptions = {
    tabBarLabel:'Settings',
    tabBarIcon:({ tintColor }) => (
        <Icon name="cog" color={tintColor} size={24} />
      ),
    // headerStyle: {
    //   backgroundColor: 'orange'
    // },
      header : null,
  };
 
     
  onSignoutPress = () => {
    firebase.auth().signOut();
  }
contactus = () => {
  console.log("contact");
  const args = {
    number: '9093900003', 
    prompt: false
  }
  {call(args).catch(console.error);}
  }
  biblerdetails = () => {
    //console.log("bibler");
    this.props.navigation.navigate("Aboutus");
  }
    render()
    {
      
        
        return(
            
          <View style={{backgroundColor:'#f6f6f6',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'#263238',borderColor:'#c8c7cc'}}>
          <Text style={{color:'white',marginTop:15,marginBottom:15, marginLeft:15,fontWeight:'bold',fontSize:20}}>Settings</Text>
        </View>
        <Button title="About Us" onPress={this.biblerdetails} /> 

            
            <Button title="Contact Librarian" onPress={this.contactus} />

           <Button title="Sign out" onPress={this.onSignoutPress} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });