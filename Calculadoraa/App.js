import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>0</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>1/x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>x^2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalButton]}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  displayContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  display: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '20%',
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#e6e1e1',
  },
  equalButton: {
    backgroundColor: 'rgba(145, 161, 149, 0.473)',
  },
});