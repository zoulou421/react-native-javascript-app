import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import icedCoffeeImage from "@/assets/images/learn.jpg"
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
       source={icedCoffeeImage}
       resizeMode="cover"
       style={styles.image}
      >
         <Text style={styles.text}>Formation applications Mobile</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
  }
})