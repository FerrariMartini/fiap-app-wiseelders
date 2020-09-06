import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const LifeAspectCircle = (props) => {
  const windowHeight = Dimensions.get('window').height;

  const circleSize = windowHeight * 0.09;

  const styles = StyleSheet.create({
    circle: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize,
      backgroundColor: '#ff5050',
    },

    innerTitle: {
      display: 'flex',
      flexDirection: 'column',
      textAlignVertical: 'center',
      height: circleSize,
      color: '#ffffff',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: windowHeight * 0.02,
    },
  });

  const innerText = 'Social e Lazer';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.innerTitle}>{innerText}</Text>
        </View>
      </View>
    </>
  );
};

export default LifeAspectCircle;
