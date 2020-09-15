import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import theme from '../constants/theme';

const LoaderMessage = ({message}) => (
    <View style={styles.container}>
        <Text h4 style={styles.textPanel}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPanel: {
        color: theme.colors.primary
    }
});

export default LoaderMessage;
