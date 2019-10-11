import React, { Component } from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';



const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class ItemComponent extends Component {

  static propTypes = {
      items: PropTypes.array.isRequired
  };

    

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
            return (
                <View key={index}>
                  <TouchableOpacity> 
                    <Text style={styles.itemtext}>{item}</Text>
                  </TouchableOpacity>
                </View>
            )
        })}
      </View>
    );
  }
}

