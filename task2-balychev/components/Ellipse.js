import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import styles from '../assets/styles';

export default function Ellipse() {
  const [verticalR, setVerticalR] = useState(50);
  const [horizontalR, setHorizontalR] = useState(120);

  return (
    <View>
      <Text style={styles.name}>{'Еліпс'}</Text>

      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text>{'R (верт): '}</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(R) => setVerticalR(parseInt(R))}
              value={verticalR}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{'R (гор): '}</Text>
            <TextInput
              style={[styles.textInput]}
              onChangeText={(R) => setHorizontalR(parseInt(R))}
              value={horizontalR}
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
                height: verticalR * 2,
                width: verticalR * 2,
                borderRadius: verticalR * 2,
                transform: [{ scaleX: horizontalR / verticalR }],
                marginLeft: (horizontalR / verticalR) * verticalR - verticalR,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );
}
