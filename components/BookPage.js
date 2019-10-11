import React, {Component}  from 'react';
import { StyleSheet, Text, View, Image,SafeAreaView,ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default class BookPage extends React.Component{
     ratingCompleted(rating) {
    alert("Rating is: " + rating)
  }
    render()
    {
        
        return(
            <View style={styles.container}>
              <ScrollView>
                <Text>--------------------------------------------------</Text>
                <Image source = {require('./assets/bala.jpg')} style = {{height:180,width:180,marginBottom:0}}/> 
                <Text>--------------------------------------------------</Text>
                <Text style={{ paddingTop:2,fontSize:20,color:'blue',alignItems:'center',fontWeight:'bold' }}>Review the book</Text>
                <AirbnbRating
                        count={5}
                        reviews={["Terrible :(", "Bad :\\ ", "OK :| ", "Good :)", "Wonderful! :))"]}
                        defaultRating={0}
                        size={60}
                        onFinishRating={this.ratingCompleted}
                        isDisabled = {false}
                        showRating = {true}
                        />
                        <Text style={{fontWeight:'bold',color:'red',fontSize:20,alignItems:'center',paddingBottom:2,paddingTop:5}}>Description</Text>
                        <Text>{'\n'}This seventh edition is thoroughly updated with outcome based learning approach as per standard Bloom’s Taxonomy.{"\n"} The new additions are important contents like Graphic programming using C. 
                                        {"\n"}{'\n'}
                                        Salient features:{"\n"}{'\n'}
                                        • Digital Supplements/ Virtual Exercise's embedded through QR Codes{"\n"}
                                        • The text content updated with ‘outcome based learning approach’ based on “Bloom’s Taxonomy”{"\n"}
                                        • Ample programming codes with comments throughout the book</Text>
                                        </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
       marginTop:50,
      },
      swipes:{
        marginVertical:1,
        paddingTop:3
      }
    
    
  });
  