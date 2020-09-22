import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import LoaderMessage from './LoaderMessage';

const Loader = ({ children }) => {
    const { loading } = useSelector(state => state.loader);
    const msgPanel = <LoaderMessage message="Aguarde..." />;
    return (
        <View style={styles.container}>
            {loading ? msgPanel : children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Loader;
