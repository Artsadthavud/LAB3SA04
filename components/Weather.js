import React,{useState,useEffect} from 'react';
import Forecast from './Forecast'
import { Text, StyleSheet,ImageBackground } from 'react-native';



export default function Weather(props) {
 
    const [forecastInfo, setForecastInfo] = useState({
        main: 'No data',
        description: 'No data',
        temp: 0
        })
        
        useEffect(() => {
            console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1d6303b53480c6aab9afc1341f3b4fe8`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
            console.warn(error);
            });
            }
            }, [props.zipCode])
 
    
    return (
        
        
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            
         <Text style = {styles.title}>Zip code is  {props.zipCode}.</Text>
      
        <Forecast {...forecastInfo}/>
        </ImageBackground>
      
        )
}
       const styles = StyleSheet.create({
        backdrop: {
            flexDirection : 'column',
            width : '100%',
            height : '100%',
        },
        title:{
            textAlign : 'center',
            textAlignVertical: 'center',
            color: "red",
            fontSize: 30,
            fontWeight: "bold"
        },
       });