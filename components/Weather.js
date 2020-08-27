import React,{useState} from 'react';
import Forecast from './Forecast'
import { Text, StyleSheet,ImageBackground } from 'react-native';


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
    })
    return (
        
        <ImageBackground source={require('../sxz.jpg')} style={styles.backdrop}>
             <br/>
             <br/>
             <br/>
         <Text>Zip Code is {props.zipCode}.</Text>
      
        <Forecast {...forecastInfo}/>
        </ImageBackground>
      
        )
}
       const styles = StyleSheet.create({
        backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
        },
       });