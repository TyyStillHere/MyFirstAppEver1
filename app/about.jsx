import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href={'/'} style={styles.header}>Go to Home</Link>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  header: {
    fontSize : 50,
    textAlign : 'center'
    
  },
})