import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Estudantes({nome}){
  return (
    <View >
      <Text style={styles.innerText}>
        Meu nome e {nome}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'blue',
    fontSize: '25px',
    fontFamily: 'Arial',
    backgroundColor: 'white'

    
  }
});