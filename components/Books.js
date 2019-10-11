import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Animated, Alert, TextInput ,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { SearchBar } from 'react-native-elements';
import bgImage from './assets/loginimage.jpg';
import BookPage from './BookPage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { Avatar,  Card, Title, Paragraph, Badge } from 'react-native-paper';
import BookDetails from './BookDetails';
searchbar_height=80,
searchbar_height1=50,
 header_max_height = 200,
 header_min_height = 70,
 profile_image_max_height = 70,
 profile_image_min_height = 40,
 rectangle_max_height = 240,
 rectangle_min_height = 120

export default class Books extends React.Component{
    constructor()
    {
        super();
        this.state={
            scrollY:new Animated.Value(0),
            search:"",
            books: [],
            book: [],
            boo: [],
        }
        this.updateSearch=this.updateSearch.bind(this);
        // this.description=this.description.bind(this);
    }
    updateSearch = search => {
        //console.log(this.state.data);
        this.setState({ search:search });
        console.log(this.state.search);
      };
    //   description=()=>{
    //     // console.log("books");
    //     this.props.navigation.navigate("BookPage")};

    componentDidMount() {
        const k = this.props.navigation.getParam('item');
        firebase.database().ref('/Department/'+k+'/Books/').on('value', (snapshot) => {
              let data = snapshot.val();
              let books = Object.keys(data);
            //   let book = Object.keys(books);
              this.setState({books}); 
            //   console.log(books);
            
              // this.state = {books};

              for(let i=0;i<books.length;i++){
                firebase.database().ref('/Department/'+k+'/Books/'+books[i]).on('value', (snapshot) => {
                  let data = snapshot.val();
                  let boo = Object.values(data);
                  this.setState({boo});
                  let book = boo[2];
                  console.log(book);
                });
              }
            });   
        
        
           
      }

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
      
        const k = this.props.navigation.getParam('item');
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
                  <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Books</Text>
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
                                    
            <View>
                <SearchBar
                        placeholder="Type Here..."
                        round
                        onChangeText={search =>this.updateSearch(search)}
                        value={this.state.search} />
                                    
                        {/* <ScrollView> */}
                        <View >
                            {
                                this.state.books.map((items, index) => {
                                    return (
                                        <View key={index}> 
                                            <TouchableOpacity onPress={() =>{this.props.navigation.navigate('BookDetails',{items,k});}}>
                                            <Card style={{marginTop:100, justifyContent:'center', shadowOpacity: 10}}>
        
                                                        <Card.Cover  source = {{ uri:'https://picsum.photos/700' }}  />
                                                        {/* <Card.Cover  source = {{ uri:book[index] }}  /> */}
                                                        
                                                        <Card.Content>
                                                        <Title style={{fontSize:25, alignItems:'center', justifyContent:'center'}}>{items}</Title>
                                                        </Card.Content>
                                                    </Card>
                                                {/* <Text>{"\n"}{items}</Text> */}
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        {/* <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book1
                        </Text>
                        </TouchableOpacity>

                        </View>

                        <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book2
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book3
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book4
                        </Text>
                        </TouchableOpacity>
                        </View>

                        <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book5
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                        <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book6
                        </Text>
                        </TouchableOpacity>
                        </View>

                        <View style = {styles.container}>
                        <TouchableOpacity style={styles.box} onPress={this.description}>
                        <Text style = {styles.text}>
                            Book7
                        </Text>
                        </TouchableOpacity>
                        </View> */}
                        </View>
                        </ScrollView>
        </View>
        
        
        )
    }
}
const styles = StyleSheet.create ({
    container: {
    //  marginTop:'10%',
     flexDirection:"row"
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    },
//   box:{
    
//     height:hp('10%'),
//     width:wp('40%'),
//     justifyContent:'center',
//     marginTop:50,
//     marginHorizontal:20,
    

//   },
  text: {
     borderWidth: 3,
     borderRadius:10,
     justifyContent:'center',
     padding: 20,
     borderColor: 'black',
     backgroundColor: 'white'
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
})
  