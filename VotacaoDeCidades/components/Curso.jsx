import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Estudantes({nome}){
  return (
    <View >
      <Text style={styles.innerText}>
        Meu curso é {nome}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red',
    fontSize: '50px',
    fontFamily: 'arial',
    fontWeight: 'bold',
    backgroundColor: 'black'
    
  }
});