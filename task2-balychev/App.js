import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import Circle from './components/Circle';
import Square from './components/Square';
import Rectangle from './components/Rectangle';
import Triangle from './components/Triangle';
import Ellipse from './components/Ellipse';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Circle />
      <Square/>
      <Rectangle/>
      <Triangle/>
      <Ellipse />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 10,
  },
});
