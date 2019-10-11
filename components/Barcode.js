// import React from 'react';
// import { View, TouchableHighlight,StyleSheet, Text,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import * as Permissions from 'expo-permissions';
// import Constants from 'expo-constants';
// import firebase from 'firebase';
// export default class Barcode extends React.Component{
//     static navigationOptions = {
//         tabBarLabel:'Scanner',
//         tabBarIcon:({ tintColor }) => (
//             <Icon name="barcode" color={tintColor} size={24} />
//           ),
//         headerStyle: {
//           backgroundColor: 'orange'
//         }
//       };
//       state = {
//         hasCameraPermission: null,
//         scanned: false,
//         book: [],
//       };
    
//       componentDidMount() {
//         this._requestCameraPermission();
//       }
    
//       _requestCameraPermission = async () => {
//         const { status } = await Permissions.askAsync(Permissions.CAMERA);
//         this.setState({
//           hasCameraPermission: status === 'granted',
//         });
//       };
    
//       // _handleBarCodeRead = data => {
//       //   Alert.alert(
//       //     'Scan successful!',
//       //     JSON.stringify(data)
//       //   );
//       // };

//       handleBarCodeScanned = ({ type, data }) => {
//         this.setState({ scanned: true });
//         const { navigation } = this.props;
//         let barcode = JSON.stringify(navigation.getParam('barcode'));
//         let book1 = JSON.stringify(navigation.getParam('stock'));
//         if(barcode==data){
//             book1 = book1-1;
//             alert(`Your book is issued.Now stock is ${book1}`);
//             const b = this.props.navigation.getParam('b');
//             const m = this.props.navigation.getParam('m');
//             firebase.database().ref().child("Department/"+b+"/Books/"+m).update({stock:book1});
//         }else{
//             alert('This is not right book');
//         }
        
//       };
     
//     render()
//     {
        
//         return(
//             <View style={styles.barcodecontainer}>
//             {this.state.hasCameraPermission === null ?
//               <Text>Requesting for camera permission</Text> :
//               this.state.hasCameraPermission === false ?
//                 <Text>Camera permission is not granted</Text> :
//                 <BarCodeScanner
//                   onBarCodeRead={this.handleBarCodeScanned}
//                   style={{ height: 200, width: 200 }}
//                 />
//             }
//           </View>

//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     barcodecontainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//        paddingTop: Constants.statusBarHeight,
//         backgroundColor: '#ecf0f1',
//       },
//   });


import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';

import { BarCodeScanner } from 'expo-barcode-scanner';

// const { navigation } = this.props;

export default class BarcodeScannerExample extends React.Component {
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
    hasCameraPermission: null,
    scanned: false,
    book: [],
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;
    const { navigation } = this.props;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
        <View>
            {
                <Text>Book Name:{JSON.stringify(navigation.getParam('m'))}</Text>
            }
        </View>
      </View>
    );
  }

    
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    const { navigation } = this.props;
    let barcode = JSON.stringify(navigation.getParam('barcode'));
    let book1 = JSON.stringify(navigation.getParam('stock'));
    if(barcode==data){
        book1 = book1-1;
        alert(`Your book is issued.Now stock is ${book1}`);
        const b = this.props.navigation.getParam('b');
        const m = this.props.navigation.getParam('m');
        firebase.database().ref().child("Department/"+b+"/Books/"+m).update({stock:book1});
    }else{
        alert('This is not right book');
    }
    
  };
}
