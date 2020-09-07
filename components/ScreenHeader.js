import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import theme from '../constants/theme';

const ScreenHeader = ({ children }) => (
  <View style={styles.headerContainer}>
    <Text h3 style={styles.text}>
      {children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  text: {
    color: theme.colors.primary,
  },
});

export default ScreenHeader;
