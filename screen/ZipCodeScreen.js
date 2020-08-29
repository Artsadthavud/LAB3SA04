import React from 'react'
import { FlatList, StyleSheet, View, Text, ImageBackground } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
 
]


const unavailableZipItems = [
    { place: 'Newyork' , code: '10001'},
    { place: 'Alaska' , code: '99501'},
    { place: 'Florida' , code: '33124 '},
]
   
const ZipItem = ({place,code,navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather' , {zipCode :code})
    }}>
    <View style = {styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    const image =  require('./b.jpg');
    return(
        <View style={styles.backdrop}>
             
        <ImageBackground source = {image} style={styles.backdrop}>
        <Text style = {styles.title}>Choose your Zip code </Text>
             <FlatList 
            data ={availableZipItems}
            keyExtractor ={item => item.code}
            renderItem = {({item}) => < ZipItem {...item} navigation={navigation}/>}
        />

        <Text style = {styles.title}>unavailable Zip code </Text>
             <FlatList 
            data ={unavailableZipItems}
            keyExtractor ={item => item.code}
            renderItem = {({item}) => < ZipItem {...item} navigation={navigation}/>}
        />

  </ImageBackground>
  </View>
       
    )
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection : 'column',
        width : '100%',
        height : '100%',
        
    },
    zipItem :{
        flex : 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems: 'flex-end',
        

        width : '100%',
        height : '100%',
    },
    zipPlace :{
        flex : 1,
    },
    zipCode :{
        flex : 1,
    },
    title:{
        textAlign : 'center',
        textAlignVertical: 'center',
        color: "blue",
        fontSize: 30,
        fontWeight: "bold"
    },
})