import React from "react";
import axios from "axios";
import Home from './src/pages/Home'

export default function client() {

  const apiCall = () => {
    axios.get('http://localhost:3000').then(() => {
      console.log('working');
    })
  }

  return (
    <Home />
  );
}