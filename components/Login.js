import React, {Component} from 'react';
import {  Text, StyleSheet,View,ImageBackground,Image,TextInput,Dimensions,TouchableOpacity,Alert,KeyboardAvoidingView  } from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import Department from './Department';
// import tryagain from './tryagain';
// import asd from './asd';
import BottomNavigator from './BottomNavigator';
//import authen from '../authen';

//import extra from './extra';

//import * as theme from './theme';
//import { Block, Text } from './components';
import * as firebase from 'firebase';
import bgImage from './assets/loginimage.jpg'
import Logo from './assets/Logo.png'

const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     showPass: true,
  //     press: false
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
    };
  }
  onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          
        }, (error) => {
            Alert.alert(error.message);
        });
  }
  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true})
    } else {
      this.setState({showPass: true, press: false})
    }
  }
  tryagain=() =>{
      this.props.navigation.navigate('BottomNavigator');
  }
  render(){
  return (
    //<Block center middle color="white" style={styles.container}>
      //<Text h1 light color="tertiary "> </Text>
    //</Block>
    
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
    <KeyboardAvoidingView behavior='padding'>
        <View style= {styles.logoContainer}>
          <Image source={Logo} style={styles.Logo}/>
        </View>

        <View style={ styles.inputContainer }>
          <Ionicons name="ios-person" size={28} color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon} />
          <TextInput
            value={this.state.email}
            onChangeText={(text) => { this.setState({email: text}) }}
            style={styles.input}
            placeholder={'User ID'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={ styles.inputContainer }>
          <Ionicons name="ios-lock" size={28} color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon} />
          <TextInput
            value={this.state.password}
            onChangeText={(text) => { this.setState({password: text}) }}
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underLineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <Ionicons name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text} onPress={this.onLoginPress}>Login</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
    </ImageBackground>

    
  ); 
}
}

const styles = StyleSheet.create({
  backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 50,
      
  },
  Logo: {
    width: 180,
    height: 180,
    marginTop: 5,
    marginBottom: 50,
  },
  logoContainer: {
      alignItems: 'center',
      marginBottom: 2,
      paddingTop: 5,
  },
  inputContainer: {
    marginTop: 6,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor : 'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 4,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#0085fa',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  }
});