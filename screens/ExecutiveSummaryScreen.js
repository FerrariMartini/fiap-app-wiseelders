import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Text } from 'react-native-elements';
import * as actions from '../store/actions';
import Screen from '../components/Screen';
import Theme from '../constants/theme';
import EngageChart from '../components/EngageChart';

const ExecutiveSummaryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.reports);

  useEffect(() => {
    const load = () => dispatch(actions.getExecutiveSummary());
    const unsubscribe = navigation.addListener('focus', load);
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Screen title="Relatório Executivo">
      <Header
        label="Investimento Total das Atividades"
        children={'R$ 22.345,00'}
      />
      <View style={styles.chartContainer}>
        <EngageChart
          percentage={76}
          chartInnerText={'1.843'}
          chartLabelText={'Colaboradores \n Únicos'}
          haslabelChartBkgColor={true}
          isSecondaryChartColor={false}
        />
        <EngageChart
          percentage={76}
          chartInnerText={`${'76,2'}%`}
          chartLabelText={'Engajamento'}
          haslabelChartBkgColor={true}
          isSecondaryChartColor={true}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.chartContainer}></View>
    </Screen>
  );
};

const Header = ({ label, children }) => (
  <>
    <View style={styles.heading}>
      <View style={styles.headingLabel}>
        <Text h5>{label}</Text>
      </View>
      <View style={styles.headingValue}>
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
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
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
