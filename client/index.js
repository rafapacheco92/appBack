import React from 'react'
import axios from 'axios'
import Home from './src/pages/Home'
import { Text } from 'react-native'

export default function client() {
  const apiCall = () => {
    axios.get('http://localhost:3000').then(() => {
      console.log('working')
    })
  }

  return <Text>teste</Text>
}
