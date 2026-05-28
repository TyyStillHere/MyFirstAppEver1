import { StyleSheet, Image, View, useColorScheme } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/img/dark-logo.png'
import LightLogo from '../assets/img/light-logo.png'

const ThemedLogo = ({styles, ...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  return (
    <Image source={logo}
    {...props}
    />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})