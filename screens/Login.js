import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginBox from '../components/LoginBox'

export default function Login() {

  return (
    <View style={styles.view}>
      <LoginBox />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})