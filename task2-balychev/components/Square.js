import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../assets/styles';

export default function Square() {
  const [A, setA] = useState(120);

  return (
    <View>
      <Text style={styles.name}>{'Квадрат'}</Text>

      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: 'row'}}>
            <Text>{'A: '}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(A) => setA(parseInt(A))}
              value={A}
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
          <View style={[styles.figure, { height: A, width: A }]}></View>
        </View>
      </View>
    </View>
  );
}
