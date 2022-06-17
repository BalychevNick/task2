import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../assets/styles'

export default function Triangle() {
  const [A, setA] = useState(100);
  const [C, setC] = useState(141.42);

  return (
    <View>
      <Text style={styles.name}>{'Рівнобедрений прямокутний трикутник'}</Text>

      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text>{'A: '}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(A) => {
                setA(parseInt(A));
                setC(Math.pow(2 * Math.pow(A, 2), 0.5));
              }}
              value={A}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'C: '}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(C) => {
                setC(parseInt(C));
                setA(Math.pow(Math.pow(C, 2) - Math.pow(A, 2), 0.5));
              }}
              value={C}
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
          <View
            style={[
              styles.triangle,
              {
                borderRightWidth: A,
                borderTopWidth: A,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );
}
