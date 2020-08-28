import React from 'react';
import { Text, View, StyleSheet, ColorPropType } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
           
    <Text style={styles.baseText} >{props.main}</Text>
    
    <Text style={styles.titleText}>{props.description}</Text>
    <View>
    
    <Text style={styles.baseText} >{props.temp} °C</Text>
    </View>
    </View>
    );
   }

   const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
      color: 'red'
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'red'
    }
  });