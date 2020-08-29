import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
    <View >
           
    <Text style={styles.base} >{props.main}</Text>
    
    <Text style={styles.title}>{props.description}</Text>
    <View>
    <Text style={styles.tempp} >{props.temp} °C</Text>
    </View>
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
}
  });