import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ScreenHeader from './ScreenHeader';
import theme from '../constants/theme';

const Screen = ({ title, children }) => {
  return (
    <View style={styles.container}>
      {title && <ScreenHeader>{title}</ScreenHeader>}
      <ScrollView style={styles.scrollContainer}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 0,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
  },
  scrollContainer: {},
});

export default Screen;
