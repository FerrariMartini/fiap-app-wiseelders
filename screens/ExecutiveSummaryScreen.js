import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Text } from 'react-native-elements';
import * as actions from '../store/actions';
import Screen from '../components/Screen';
import Theme from '../constants/theme';

const ExecutiveSummaryScreen = () => {
    // const navigation = useNavigation();
    // const dispatch = useDispatch();
    // const {value} = useSelector(state => state.reports);
    //
    // useEffect(() => {
    //     const load = () => dispatch(actions.getExecutiveSummary());
    //     const unsubscribe = navigation.addListener('focus', load);
    //     return () => unsubscribe();
    // }, [dispatch]);

    return (
        <Screen title="Relatório executivo">
            <Header label="Investimento total das atividades">
            </Header>
        </Screen>
    );
};

const Header = ({ label, children }) => (
  <>
    <View style={styles.heading}>
      <View style={styles.headingLabel}>
        <Text h5>{label}</Text>
      </View>
      <View>
        <Text h3>{children}</Text>
      </View>
    </View>
    <Divider style={styles.divider} />
  </>
);

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingLabel: {
    flex: 0.6,
  },
  headingValue: {
    flex: 0.6,
  },
  divider: {
    marginVertical: 10,
    color: Theme.colors.divider,
  },
});

export default ExecutiveSummaryScreen;
