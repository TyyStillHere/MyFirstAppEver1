import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack, useRouter } from 'expo-router'
import {Colors} from '../constants/Colors' 
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>

      <StatusBar value = "auto" />

      <View style={styles.container}>
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}>
          <Stack.Screen name="index" options={{title: 'Home'}} />
          <Stack.Screen name="about" options={{title: 'About'}} />
        </Stack>
      </View>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerSide: {
    minWidth: 60,
    alignItems: 'center',
  },
  headerButton: {
    color: '#6C63FF',
    fontWeight: '600',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerText: {
    color: '#666',
  },
})