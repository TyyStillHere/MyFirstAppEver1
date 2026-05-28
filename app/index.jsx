import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import Logo from '../assets/MainIcon.jpg'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'

//Themed Components

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />

      <ThemedText style={styles.title}>Welcome to StudentToDo</ThemedText>

      <Spacer />
      <Text style={styles.Subtitle}>
        Your Ultimate Study Companion
      </Text>
      <Link href="/about" style={styles.button}>
        <Text style={styles.text}>Learn More</Text>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  img: {
    marginVertical: 10,
    width: 300,
    height: 325,

  },
  title: {
    fontWeight: 700,
    fontSize: 25,
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
  },
  header: {
    fontSize : 76,
    textAlign : 'center'
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
    marginTop: 10,
  },
  text: {
    color: '#6C63FF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  Subtitle: {
    marginTop: 5,
    fontSize: 15,
    color: '#24242442',
  }
})