import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../assets/styles';

export default function Circle() {
  const [R, setR] = useState(50);

  return (
    <View>
      <Text style={styles.name}>{'Коло'}</Text>

      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text>{'R: '}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(R) => setR(parseInt(R))}
              value={R}
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
              styles.figure,
              {
                height: R * 2,
                width: R * 2,
                borderRadius: R,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );
}
