
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//menü verilerini dosyadan yükledim.
import homeMenu from './homeMenu.json';

class HomeScreen extends React.Component {

 render() {
    return (

       <View style={styles.container}> 
          {
             //map metodu ile diziyi açtım.
             homeMenu.map((item, index) => (

              //onpress event için menüde touchableopacity kullandım.
                <TouchableOpacity
                   key = {index}
                   style = {styles.touchable}
                   onPress = {() => this.props.navigation.navigate(item.navigate)}>
                   
                     <Text style = {styles.text}>
                      {item.name}
                      </Text>

                </TouchableOpacity>

             )) 
          }
       </View>

    )
 }

}//end of class


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  touchable: {
     padding: 10,
     marginTop: 3,
     backgroundColor: 'grey',
     alignItems: 'center',
  },
  text: {
     color: '#4E342E',
     fontWeight: 'bold',
     fontSize: 14,
     fontFamily: 'Iowan Old Style',
  }
})



export default HomeScreen; 