import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About</Text>
      <Text style={styles.body}>This is the app's about page. It explains the app and gives you a way back to the homepage.</Text>
      <Link href="../" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

  header: {
    fontSize : 76,
    textAlign : 'center'
  },
})