import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Animated, Alert, TextInput ,TouchableOpacity} from 'react-native';

import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import Constants from 'expo-constants';

import { BarCodeScanner } from 'expo-barcode-scanner';

import * as Permissions from 'expo-permissions';
import bgImage from './assets/loginimage.jpg';
import { SearchBar } from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome';
import CE from './CE';
// import IT from './IT';
// import CL from './CL';
// import MEC from './MEC';
import Department from './Department';


searchbar_height=80,
searchbar_height1=50,
 header_max_height = 200,
 header_min_height = 70,
 profile_image_max_height = 70,
 profile_image_min_height = 40,
 rectangle_max_height = 240,
 rectangle_min_height = 120

export default class App extends Component {
  render(){
  return (
     <AppContainer/>
   );
  }
}
class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      scrollY: new Animated.Value(0)
    }
    this.updateSearch=this.updateSearch.bind(this);
    this.CEdetails=this.CEdetails.bind(this);
    this.ITdetails=this.ITdetails.bind(this);
    this.CLdetails=this.CLdetails.bind(this);
    this.MECdetails=this.MECdetails.bind(this);

  }
  updateSearch = search => {
    //console.log(this.state.data);
    this.setState({ search:search });
    console.log(this.state.search);
  };
  CEdetails=()=>{
   console.log("ce", this.props.navigation);
   this.props.navigation.navigate("CE")};
  ITdetails=()=>{this.props.navigation.navigate("IT")};
  CLdetails=()=>{this.props.navigation.navigate("CL")};
  MECdetails=()=>{this.props.navigation.navigate("MEC")};
   

  static navigationOptions = {
    tabBarLabel:'Home',
    tabBarIcon:({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      ),
    headerStyle: {
      backgroundColor: 'blue'
    }
  };
  

 
  render(){
    const headerHeight  = this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height],
      outputRange:[header_max_height,header_min_height],
      extrapolate:'clamp'
    })

    const profileImageHeight  = this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height],
      outputRange:[profile_image_max_height,profile_image_min_height],
      extrapolate:'clamp'
    })
    const profileImageMarginTop  = this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height],
      outputRange:[40,header_max_height+5],
      extrapolate:'clamp'
    })

    const headerZindex  = this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height],
      outputRange:[0,1],
      extrapolate:'clamp'
    })

    const headerTitleBottom  = this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height,
      header_max_height-header_min_height+5+profile_image_min_height,
      header_max_height-header_min_height+5+profile_image_min_height+18
    ],
      outputRange:[-100,-100,-100,0],
      extrapolate:'clamp'
    })

    const searchBarBottom  = this.state.scrollY.interpolate({
      inputRange:[0,header_max_height-header_min_height,
      header_max_height-header_min_height+10+profile_image_min_height,
      header_max_height-header_min_height+10+profile_image_min_height+18
    ],
      outputRange:[-300,-300,-300,0],
      extrapolate:'clamp'
    })

    const rectangleBox  = this.state.scrollY.interpolate({
      inputRange:[0,rectangle_max_height-rectangle_min_height,
      rectangle_max_height-rectangle_min_height+5+profile_image_min_height,
      rectangle_max_height-rectangle_min_height+5+profile_image_min_height+18
    ],
      outputRange:[-80,-80,-80,0],
      extrapolate:'clamp'
    })

    
    
  return ( 

    <View style = {{flex: 1 }}>
      
      <Animated.View style={{
        position: 'absolute',
        top:0,
        left:0,
        right:0,
       backgroundColor:'lightskyblue',
        height:headerHeight,
        zIndex: headerZindex,
        alignItems:'center'
       
      }}>
        
        
       
        <Animated.View style={{marginTop: 10,
                width: rectangle_max_height,
                height:rectangle_min_height,
                backgroundColor: '#FFC107',
                alignItems:'center',
                position:'absolute',
                bottom: rectangleBox,
                borderRadius:15,
                justifyContent:'center',
                padding: 15
                
                }}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Department</Text>
            </Animated.View>
          
            <Animated.View style={{ position:'absolute',bottom:headerTitleBottom }}>
              <Text style={{ color:'white', fontSize:14, fontWeight:'bold',paddingLeft:5, textAlign:'left' }}>Dharan's Library</Text>
            </Animated.View>
             
             
        </Animated.View> 
        <ScrollView style={{ flex:1 }}
          scrollEventThrottle={16}

          onScroll = {Animated.event(
            [{nativeEvent : {contentOffset : {y: this.state.scrollY}}}]
          )} 
        >
          <Animated.View style={{
            height:profileImageHeight,
            width:profileImageHeight,
            borderRadius:profile_image_max_height/2,
            borderColor:'white',
            borderWidth:3,
            overflow:'hidden',
            marginLeft:290,
            marginTop:profileImageMarginTop


          }}>
            
              <Image source={bgImage}
                style={{ flex:1,width:null,height:null }}
                
            ></Image>
                </Animated.View>
                <View style={{marginTop:5}}>
                  <Text style={{fontSize:23, fontWeight:'bold',paddingLeft:10,marginTop:2}}>Dharan's Library</Text>
                </View>
              
            <View style={{ height:150 }}></View>   
        
       
        
            {/* <Animated.View style={{flex:1}}>
                <Animated.View  style={{height:searchbar_height , backgroundColor: 'white',justifyContent: 'center',paddingHorizontal: 5,borderRadius: 10}}>
                  <Animated.View style= {{height:searchbar_height1, backgroundColor: '#decccc',borderRadius:20,flexDirection: 'row',padding:5, alignItems: 'center' }}>
                      <Icon name={this.state.searchBarFocused ? "arrow-back" : 'search' } style={{ fontSize:20,color:'grey',paddingLeft:10}} />
                        <TextInput placeholder= 'Search' style = {{fontSize:20,marginLeft:15}} />
                  </Animated.View>

               </Animated.View>
        </Animated.View> */}
        
        <View>
        
          <SearchBar
            placeholder="Type Here..."
            round
            onChangeText={search =>this.updateSearch(search)}
            value={this.state.search}
          />
          

<View style = {stylee.container}>
<TouchableOpacity style={stylee.box} onPress={this.CEdetails}>
   <Text style = {stylee.text}>
      CE
   </Text>
</TouchableOpacity>
<TouchableOpacity style={stylee.box} onPress={this.ITdetails}>
   <Text style = {stylee.text}>
      IT
   </Text>
</TouchableOpacity>

</View>
<View style = {stylee.container}>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text} onPress={this.CLdetails}>
      CL
   </Text>
</TouchableOpacity>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text} onPress={this.MECdetails}>
      MEC
   </Text>
</TouchableOpacity>

</View>
<View style = {stylee.container}>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
      EE
   </Text>
</TouchableOpacity>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
      EC
   </Text>
</TouchableOpacity>

</View>
<View style = {stylee.container}>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
      MBA
   </Text>
</TouchableOpacity>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
    BBA
   </Text>
</TouchableOpacity>

</View>
<View style = {stylee.container}>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
      MSC
   </Text>
</TouchableOpacity>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
      BSC
   </Text>
</TouchableOpacity>

</View>
<View style = {stylee.container}>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
    NOVEL
   </Text>
</TouchableOpacity>
<TouchableOpacity style={stylee.box}>
   <Text style = {stylee.text}>
      MOTIVATIONAL
   </Text>
</TouchableOpacity>

</View>
</View>

 </ScrollView>
 </View>
  );
  }
}
const stylee = StyleSheet.create ({
  container: {
  //  marginTop:'10%',
   flexDirection:"row"
  },
box:{
  
  height:hp('10%'),
  width:wp('40%'),
  justifyContent:'center',
  marginTop:50,
  marginHorizontal:20,
  

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

class Analytics extends Component {
  static navigationOptions = {
    tabBarLabel:'Analytics',
    tabBarIcon:({ tintColor }) => (
        <Icon name="line-chart" color={tintColor} size={24} />
      ),
    headerStyle: {
      backgroundColor: 'orange'
    }
  };
  render(){
    return (
      <View style={styles.container}>
        <Text>Analytics</Text>
      </View>
     );
    }
  }

  class Scanner extends Component {
    static navigationOptions = {
      tabBarLabel:'Scanner',
      tabBarIcon:({ tintColor }) => (
          <Icon name="barcode" color={tintColor} size={24} />
        ),
      headerStyle: {
        backgroundColor: 'orange'
      }
    };

    state = {
      hasCameraPermission: null
    };
  
    componentDidMount() {
      this._requestCameraPermission();
    }
  
    _requestCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermission: status === 'granted',
      });
    };
  
    _handleBarCodeRead = data => {
      Alert.alert(
        'Scan successful!',
        JSON.stringify(data)
      );
    };

   
  render() {
    return (
      <View style={styles.barcodecontainer}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
      </View>
    );
  }
}

  class Notifications extends Component {
    static navigationOptions = {
      tabBarLabel:'Notifications',
      tabBarIcon:({ tintColor }) => (
          <Icon name="bell" color={tintColor} size={24} />
        ),
      headerStyle: {
        backgroundColor: 'orange'
      }
    };
    render(){
      return (
        <View style={styles.container}>
          <Text>Notifications</Text>
        </View>
       );
      }
    }

class Settings extends Component {
  static navigationOptions = {
    tabBarLabel:'Settings',
    tabBarIcon:({ tintColor }) => (
        <Icon name="cog" color={tintColor} size={24} />
      ),
    headerStyle: {
      backgroundColor: 'orange'
    }
  };
  render(){
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
   );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home,

},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    }
  }
}
);

const AppBottomTabNavigator = createBottomTabNavigator(
  {
  Home: Home,
  CE: CE,
  Analytics: Analytics,
  Scanner: Scanner,
  Notifications: Notifications,
  Settings: Settings,
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange'
    },
    tabBarOptions:{
      activeTintColor:'red',
      inactiveTintColor:'grey'
    }
  }
}
);

 const AppContainer = createAppContainer(AppBottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

});
