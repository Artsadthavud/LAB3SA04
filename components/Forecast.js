import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Forecast(props) {

    return (
    <View >
           
    <Text style={styles.base} >{props.main}</Text>
    
    <Text style={styles.title}>{props.description}</Text>
    <View>
    </View>
    <Text style={styles.base} >humidity {props.humidity} </Text>
    <Text style={styles.tempMin} > tempMin {props.temp_min} °C </Text>
    <Text style={styles.tempp} > current {props.temp} °C</Text>
    <Text style={styles.tempMax} >tempMax {props.temp_min} °C </Text>
    </View>
    );
   }

   const styles = StyleSheet.create({
    
    title:{
      textAlign : 'center',
      textAlignVertical: 'center',
      color: "white",
      fontSize: 30,
      fontWeight: "bold"
  },
    base:{
      textAlign : 'center',
      textAlignVertical: 'auto',
      color: "white",
      fontSize: 15,
      fontWeight: "bold"
  },
    tempp:{
      textAlign : 'center',
      textAlignVertical: 'auto',
      color: "white",
      fontSize: 20,
      fontWeight: "bold"
},
tempMin:{
  textAlign : 'center',
  textAlignVertical: 'auto',
  color: "white",
  fontSize: 20,
  fontWeight: "bold"
},
tempMax:{
  textAlign : 'center',
  textAlignVertical: 'auto',
  color: "white",
  fontSize: 20,
  fontWeight: "bold"
}
  });