import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/adaptive-icon.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: 'purple'}]}>
        The Number One
      </Text>
      <Text style={{fontSize: 10, fontWeight: 'black',}}>
        People need to realise their potential
        Hello World
      </Text>

    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

  },
  img: {
    marginVertical: 20,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#fff'
  },
  button: {
    borderWidth: 1.5,
    borderColor: '#6C63FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#6C63FF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
})