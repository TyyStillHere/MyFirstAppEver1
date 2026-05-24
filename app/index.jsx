import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import Logo from '../assets/adaptive-icon.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Tap the button below to learn more.</Text>
      <Link href="/about" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to About</Text>
        </TouchableOpacity>
      </Link>
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
  },
  text: {
    color: '#6C63FF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
})