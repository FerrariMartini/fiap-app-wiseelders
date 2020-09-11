import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ScreenHeader from './ScreenHeader';
import theme from '../constants/theme';

const Screen = ({title, children}) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!scrollRef) {
            return;
        }
        scrollRef.current.scrollTo({x: 0, y: 0, animated: false});
    });

    return (
        <View style={styles.container}>
            {title && <ScreenHeader>{title}</ScreenHeader>}
            <ScrollView ref={scrollRef} style={styles.scrollContainer}>
                {children}
            </ScrollView>
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
