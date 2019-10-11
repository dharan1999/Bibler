import React,{ Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import firebase from 'firebase';
import { StyleSheet, Text, View, Image,SafeAreaView,ScrollView,Button,TouchableOpacity,Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
// import { Paragraph } from 'react-native-paper';
import { Avatar,  Card, Title, Paragraph, Badge } from 'react-native-paper';
const { width: WIDTH } = Dimensions.get('window')
export default class BookDetails extends Component {
    ratingCompleted(rating) {
        alert("Rating is: " + rating)
      }

    state = {
        books: [],
        data: [],
    }
  
    componentDidMount() {
      const b = this.props.navigation.getParam('k');
      const m = this.props.navigation.getParam('items');
      firebase.database().ref('/Department/'+b+'/Books/'+m).on('value', (snapshot) => {
            let data = snapshot.val();
            let books = Object.values(data);
            // this.setState({books}); 
            console.log(data);
            this.setState({books});
          });   
         
    }

    render() {
        const { navigation } = this.props;
        const barcode = this.state.books[0];
        const stock = this.state.books[3];
        const b = this.props.navigation.getParam('k');
        const m = this.props.navigation.getParam('items');
        return(
        <React.Fragment>
            <ScrollView>
            <View style={styles.container}>
                {
                     <Card style={{marginTop:75, justifyContent:'center', shadowOpacity: 10}}>
        
                     <Card.Cover  source={ {uri : this.state.books[2]} }  />
                     
                     <Card.Content>
                       <Title style={{fontSize:22, alignItems:'center', justifyContent:'center'}}>{JSON.stringify(navigation.getParam('items'))}</Title>
                     
                    
                     </Card.Content>
                     
                   </Card>
               
                    // <Text style={styles.itemtext}>Book Name:{JSON.stringify(navigation.getParam('items'))}</Text>
                }
            </View>
            <View >
                {
                 
                             <AirbnbRating
                             count={5}
                             reviews={["Terrible :(", "Bad :\\ ", "OK :| ", "Good :)", "Wonderful! :))"]}
                             defaultRating={0}
                             size={40}
                             onFinishRating={this.ratingCompleted}
                             isDisabled = {false}
                             showRating = {true}
                             />
                }
              
            </View>
            <View style={styles.container}>
                
                    <Text style={{fontWeight:'bold',color:'red',fontSize:20,alignItems:'center',paddingBottom:2,paddingTop:5}}>Description</Text>
                    <Text>{'\n'}This seventh edition is thoroughly updated with outcome based learning approach as per standard Bloom’s Taxonomy.{"\n"} The new additions are important contents like Graphic programming using C. 
                                    {"\n"}{'\n'}
                                    Salient features:{"\n"}{'\n'}
                                    • Digital Supplements/ Virtual Exercise's embedded through QR Codes{"\n"}
                                    • The text content updated with ‘outcome based learning approach’ based on “Bloom’s Taxonomy”{"\n"}
                                    • Ample programming codes with comments throughout the book</Text>
            
                
            </View>
            {/* <View style={styles.container}>
                {

                    // <Text style={styles.itemtext}>Photo:{this.state.books[2]}</Text>
                }
            </View> */}
            {/* <View style={styles.container}>
                {
                    <Text style={styles.itemtext}>Discription:{this.state.books[1]}</Text>
                }
            </View> */}
            <View style={styles.container}>
                {
                    <Text style={styles.itemtext}>Stock:{this.state.books[3]}</Text>
                }
            </View>
            <View style={styles.container}>
            <View style={styles.btnLogin}>
                <Button   color='red'  title="I want to Issue" onPress={() =>{this.props.navigation.navigate('Barcode',{barcode,stock,b,m});}} />
            </View>
            </View>
            </ScrollView>
        </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      marginBottom:20
      },
      btnLogin: {
        width: 370,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#0085fa',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        alignItems:'center',
        
        paddingLeft:50

      },
    
  });