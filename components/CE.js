import React from 'react';
import { View, TouchableHighlight,StyleSheet, Text} from 'react-native';

export default class CE extends React.Component{
    render()
    {
        
        return(
            <View style={styles.container}>
            <Text>
                CE Department
                </Text>
            </View>

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
  });
  