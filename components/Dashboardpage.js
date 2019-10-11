import React from 'react';
import { View, TouchableHighlight,StyleSheet, Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import file from './assets/profile.jpg';



 class Dashboardpage extends React.Component{
  constructor()
  {
    super();
    this.state={
      books : 2,
      Name : "Dharan Thaker",
      Id : "17CE126",
      Institute : "CSPIT-CE",
      Semester : "5th"

    }
  }
  
  static navigationOptions = {
    tabBarLabel:'Dashboard',
    tabBarIcon:({ tintColor }) => (
        <Icon name="dashboard" color={tintColor} size={24} />
      ),
    headerStyle: {
      backgroundColor: 'orange'
    }
  };
    render()
    {
        
        return(
           
            <View style={styles.main}>
               <Image source={file} style={styles.profileImg} /> 
               
            <TouchableHighlight style={styles.container}>
         
            <Text style={styles.name}>Name:    {this.state.Name}</Text> 
          </TouchableHighlight>   
          <TouchableHighlight style={styles.container}>
         
         <Text style={styles.name}>Id:           {this.state.Id}</Text> 
       </TouchableHighlight>   
       <TouchableHighlight style={styles.container}>
         
         <Text style={styles.name}>Institute:     {this.state.Institute}</Text> 
       </TouchableHighlight>   
       <TouchableHighlight style={styles.container}>
         
         <Text style={styles.name}>Semester:       {this.state.Semester}</Text> 
       </TouchableHighlight>  
      
          
          </View>
 )
}
}
export default Dashboardpage;

const styles = StyleSheet.create({
  // profileImgContainer: {
  //   marginLeft: 8,
  //   height: 80,
  //   width: 80,
  //   borderRadius: 40,
  
  // },
  main:{
    flex: 1,
   // flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
   // backgroundColor:'black'

  },
  name:{
    fontSize:20,
      color:'#000000',
  },
  profileImg: {
    height: 150,
    width: 150,
    borderRadius: 150/2,
    justifyContent: 'center',
  },
  container: {
        flex: 1,
          backgroundColor: 'white',
       
         
        },
});

       
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });