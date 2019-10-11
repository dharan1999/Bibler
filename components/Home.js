import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Animated, Alert, TextInput ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SearchBar, Button } from 'react-native-elements';
import bgImage from './assets/loginimage.jpg';
import Books from './Books';
import ItemComponent from './ItemComponent';
import * as firebase from "firebase";
import { Avatar,  Card, Title, Paragraph, Badge } from 'react-native-paper';
// import HomeLayout from './HomeLayout';
// import { createStackNavigator } from 'react-navigation-stack';
import PropTypes from 'prop-types';
// import FirebaseConfig from '../constants/ApiKeys.demo';
searchbar_height=80,
searchbar_height1=50,
 header_max_height = 200,
 header_min_height = 70,
 profile_image_max_height = 70,
 profile_image_min_height = 40,
 rectangle_max_height = 240,
 rectangle_min_height = 120

 var firebaseConfig = {
  apiKey: "AIzaSyA-sw3qKM28LBGcIwCTxgG0K2emuTun3Ys",
  authDomain: "bibler-761d6.firebaseapp.com",
  databaseURL: "https://bibler-761d6.firebaseio.com",
  projectId: "bibler-761d6",
  storageBucket: "bibler-761d6.appspot.com",
  messagingSenderId: "46150380547",
  appId: "1:46150380547:web:5e32c2defe176ebe283236"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Home extends React.Component{
    constructor(props){
        super(props);
        // firebase.initializeApp(FirebaseConfig.firebase);
        this.state = {
          scrollY:new Animated.Value(0),
          search:"",
          // is_fetch:false,
          // array:[]
          items: [],
        }
        this.booksdetails=this.booksdetails.bind(this);
        this.updateSearch=this.updateSearch.bind(this);
    }
    // componentDidMount()
    // {
    // //   const firebaseConfig = {
    // //     apiKey: "AIzaSyA-sw3qKM28LBGcIwCTxgG0K2emuTun3Ys",
    // //    authDomain: "bibler-761d6.firebaseapp.com",
    // //     databaseURL: "https://bibler-761d6.firebaseio.com",
    // //     projectId: "bibler-761d6",
    // //     storageBucket: "bibler-761d6.appspot.com",   
    // //     messagingSenderId: "46150380547",
    // //     appId: "1:46150380547:web:5e32c2defe176ebe283236"
    // //   };
    // //   if(!firebase.apps.length){
    // //     firebase.initializeApp(firebaseConfig);
    // //   }
   
    // firebase.database().ref("Department/").on("value",async function(snapshot){
    //     let snap=JSON.stringify(snapshot)
    //     let data=JSON.parse(snap)
    //    console.log(data);
    //    var temp=[
    //      dep=""
    //    ];
    //    for (const key in data) {
    //      temp.push({
    //        dep: key
    //      })

    //     //  if (data.hasOwnProperty(key)) {
    //     //    const element = data[key];
    //     //    console.log(key);
    //     //    temp.push({
    //     //      dep:key
    //     //    });
           
    //     //   }
    //     }
    //     var l=[];
    //  for (const key in temp) {
    //   if(temp[key]!=""){
    //     l.push(temp[key]);
    //   }
       
    //  }
    //    this.setState({
    //      array:l,
    //      is_fetch:true
    //    })
    //   //  console.log(temp)
    //   }.bind(this)
    // );
    // }

    componentDidMount() {
      firebase.database().ref('/Department/').on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.keys(data);
            this.setState({items});          
         });
    }

    updateSearch = search => {
        //console.log(this.state.data);
       // var arr=["sarika","viduu","nandu","vishva"];
        var data=this.state.array;
        console.log(data);
        // var result=data.filter(word=>word.dep.match(search) || word.dep.match(search.toLowerCase()));
        // console.log(result);

        // this.setState({ array:result });
        //console.log(this.state.search);
      };
    booksdetails=()=>{
        console.log("books");
        this.props.navigation.navigate("Books")};
    static navigationOptions = {
        tabBarLabel:'Home',
        tabBarIcon:({ tintColor }) => (
            <Icon name="home" color={tintColor} size={24} />
          ),
        headerStyle: {
          backgroundColor: 'blue'
        }
      };
    render()
    {
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
      
          
        
        return(
         
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
              
            <View style={{ height:130 }}></View>   
                                    
                                    <View>
                                      <SearchBar
                                      placeholder="Type Here..."
                                      round
                                      onChangeText={search =>this.updateSearch(search)}
                                      value={this.state.search}
                                      />
                                      { this.state.items.map((item, index) => {
                                        return (
                                            <View key={index}>
                                              <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Books',{item});
                                              }}> 
                                              <Card style={{marginTop:100, justifyContent:'center', shadowOpacity: 10}}>
        
                                                      <Card.Cover source = {{ uri:'https://picsum.photos/700' }} />
                                                      
                                                      <Card.Content>
                                                        <Title style={{fontSize:25, alignItems:'center', justifyContent:'center'}}>{item}</Title>
                                                      </Card.Content>
                                                    </Card>

                                                {/* <Text style={styles.text}>{item}</Text> */}
                                              </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                {/* {this.state.is_fetch ? <HomeLayout array={this.state.array}/> : <Text>""</Text>} */}
                                    </View>           
            </ScrollView>
            </View>
          

        )
    }
}
// const Nav=createStackNavigator(
//     {
//       Books:{screen:Books}    }
//   )
// const AppContainer = createAppContainer(Nav);
const stylee = StyleSheet.create ({
    container: {
    //  marginTop:'10%',
     flexDirection:"row"
    },
  box:{
    
    height:hp('10%'),
    width:wp('100%'),
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
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      },
      box:{
    
        height:hp('10%'),
        width:wp('40%'),
        justifyContent:'center',
        marginTop:50,
        marginHorizontal:20,
        alignItems: 'center'
        
    
      },
      text: {
         borderWidth: 3,
         borderRadius:10,
         justifyContent:'center',
         padding: 20,
         borderColor: 'black',
         backgroundColor: 'white',
         alignItems: 'center'
      }
  });
  