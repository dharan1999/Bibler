import React from 'react';
import { View,ScrollView, TouchableHighlight,StyleSheet, Text,Image} from 'react-native';
import Logo from './assets/Logo.png';
//import bgImage from './assets/Library.PNG';

export default class  Aboutus extends React.Component{
    render()
    {
        
        return(
            <React.Fragment>
                <ScrollView>
            <View style={styles.container}>
                 
                 <Image source={Logo} style={styles.Logo}/>
            <Text style={{fontSize:17}}>
            Bibler is a Cross-Platform app based on React-Native platform which renders users to navigate the entire library by a click of a button,{'\n'}seek their desired book and provides the accessibility to borrow it directly without involving Librarian for borrowing books.{'\n'}{'\n'} It even tells it’s users whether the book is available in the library or not and if it is available where to find it exactly making it extremely simple and incredibly easy for the users.
            {'\n'}
            </Text>
          
            <View>
            <Text style={{alignItems:'center',justifyContent:'center',fontSize:18,fontWeight:'bold', color:'red'}}>“Carry Library in your Pocket with Bibler”</Text>
            </View>
            {/* <View>
            <Image source={bgImage} style={styles.Logo}/>
            </View> */}
            </View>
            </ScrollView>
            </React.Fragment>

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
    Logo: {
        width: 180,
        height: 180,
        marginTop: 5,
        marginBottom: 50,
      },
  });
  