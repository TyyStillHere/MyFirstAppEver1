import { StyleSheet, Text, View, SafeAreaView, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import {Colors} from '../constants/Colors' 
import {ThemedView} from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Link href={'/'} style={styles.header}>
        <ThemedText>Go to Home</ThemedText>
      </Link>
    </View>
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