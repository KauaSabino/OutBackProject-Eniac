import { StyleSheet } from 'react-native';
import Routes from './src/routers';
import React, { useState, useEffect } from 'react';


export default function App() {


  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
