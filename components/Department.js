import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import { SearchBar } from 'react-native-elements';
//import Buttons from './Buttons';
import CE from './CE';
// import IT from './IT';
// import CL from './CL';
// import MEC from './MEC';

class Department extends React.Component{
    constructor()
    {
        super();
        this.state={
            search:"",

            //data:data
        }
        
        this.updateSearch=this.updateSearch.bind(this);
        this.CEdetails=this.CEdetails.bind(this);
        // this.ITdetails=this.ITdetails.bind(this);
        // this.CLdetails=this.CLdetails.bind(this);
        // this.MECdetails=this.MECdetails.bind(this);
    }
    updateSearch = search => {
        //console.log(this.state.data);
        this.setState({ search:search });
        console.log(this.state.search);
      };
      CEdetails=()=>{this.props.navigation.navigate("CE")};
      // ITdetails=()=>{this.props.navigation.navigate("IT")};
      // CLdetails=()=>{this.props.navigation.navigate("CL")};
      // MECdetails=()=>{this.props.navigation.navigate("MEC")};
      
    
      render(){
        
        
       return (
        
          <View>
          <ScrollView>
          <SearchBar
            placeholder="Type Here..."
            round
            onChangeText={search =>this.updateSearch(search)}
            value={this.state.search}
          />
          

<View style = {styles.container}>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text} onPress={this.CEdetails}>
      CE
   </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      IT
   </Text>
</TouchableOpacity>

</View>
<View style = {styles.container}>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      CL
   </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      MEC
   </Text>
</TouchableOpacity>

</View>
<View style = {styles.container}>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      EE
   </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      EC
   </Text>
</TouchableOpacity>

</View>
<View style = {styles.container}>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      MBA
   </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
    BBA
   </Text>
</TouchableOpacity>

</View>
<View style = {styles.container}>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      MSC
   </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      BSC
   </Text>
</TouchableOpacity>

</View>
<View style = {styles.container}>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
    NOVEL
   </Text>
</TouchableOpacity>
<TouchableOpacity style={styles.box}>
   <Text style = {styles.text}>
      MOTIVATIONAL
   </Text>
</TouchableOpacity>

</View>
</ScrollView>
</View>

        );
      }
    }
   

export default Department;
const styles = StyleSheet.create ({
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