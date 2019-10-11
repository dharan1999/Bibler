import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeLayout =(props)=>{
    function Todo ({items}){
        return items.map(item=>(
            // <View>
            //     <Text></Text>
            // </View>
            <View style = {stylee.container}>
            <TouchableOpacity style={stylee.box}>
            <Text style = {stylee.text}>
            {item.dep}
            </Text>
            </TouchableOpacity>
            </View>
        ))
    }
    return (
        <View>
            <Todo items={props.array} />
        </View>
    )
}

export default HomeLayout;
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