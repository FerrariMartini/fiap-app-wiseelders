import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const LifeAspectCircle = (props) => {
  const windowHeight = Dimensions.get('window').height;

  const squareSize = windowHeight * 0.08;

  const styles = StyleSheet.create({
    square: {
      width: squareSize,
      height: squareSize,
      borderRadius: 5,
      backgroundColor: '#ff5050',
      padding: 2,
    },

    innerTitle: {
      display: 'flex',
      flexDirection: 'column',
      textAlignVertical: 'center',
      height: squareSize,
      color: '#ffffff',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: windowHeight * 0.015,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={styles.innerTitle}>{props.lifeAspectTitle}</Text>
        </View>
      </View>
    </>
  );
};

export default LifeAspectCircle;
