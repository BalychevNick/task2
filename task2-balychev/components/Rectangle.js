import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../assets/styles';

export default function Rectangle() {
  const [A, setA] = useState(50);
  const [B, setB] = useState(100);

  return (
    <View>
      <Text style={styles.name}>{'Прямокутник'}</Text>

      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text>{'A: '}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(A) => setA(parseInt(A))}
              value={A}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'B: '}</Text>
            <TextInput
              style={[styles.textInput]}
              onChangeText={(B) => setB(parseInt(B))}
              value={B}
            />
          </View>
        </View>
        <View
          style={{
            width: '70%',
            padding: 10,
            backgroundColor: 'white',
            height: '100%',
            overflow: 'scroll',
          }}>
          <View style={[styles.figure, { height: A, width: B }]}></View>{' '}
        </View>
      </View>
    </View>
  );
}
