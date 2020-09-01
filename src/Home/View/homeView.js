import React from 'react';
import { View, Text } from 'react-native';
import customStyles from './homeStyles';

const homeView = (props) => {
  return (
    <View style={customStyles.container}>
      <Text style={customStyles.text}> Olá Ivan </Text>
      <Text style={customStyles.text}> {props.text} </Text>
    </View>
  );
};

export default homeView;
