import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
    <View >
           <br/>
           <br/>
           <br/>
           <br/>
    <Text style={styles.baseText} >{props.main}</Text>
    <br/>
    <br/>
    <br/>
    <Text style={styles.titleText}>{props.description}</Text>
    <View>
    <br/>
    <br/>
    <br/>
    <Text style={styles.baseText} >{props.temp} °C</Text>
    </View>
    </View>
    );
   }

   const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });