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
  const { entries } = useSelector((state) => state.reports);

  useEffect(() => {
    const load = () => dispatch(actions.getReports());
    const unsubscribe = navigation.addListener('focus', load);
    return () => unsubscribe();
  }, [dispatch, navigation]);
  return (
    <Screen title="Relatório Executivo">
      {entries.length <= 0 ? (
        <>
          <Header
            label="Investimento Total das Atividades"
            children={'R$ 000.00'}
          />
          <View style={styles.chartContainer}>
            <EngageChart
              percentage={0}
              chartInnerText={'0'}
              chartLabelText={'Colaboradores \n Únicos'}
              haslabelChartBkgColor={true}
              isSecondaryChartColor={false}
            />
            <EngageChart
              percentage={0}
              chartInnerText={'0%'}
              chartLabelText={'Engajamento'}
              haslabelChartBkgColor={true}
              isSecondaryChartColor={true}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.chartContainer} />
        </>
      ) : (
        <>
          <Header
            label="Investimento Total das Atividades"
            children={parseFloat(
              entries.allActivitiesInvest,
            ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
          <View style={styles.chartContainer}>
            <EngageChart
              percentage={100}
              chartInnerText={entries.allCycleAttendant.toString()}
              chartLabelText={'Colaboradores \n Únicos'}
              haslabelChartBkgColor={true}
              isSecondaryChartColor={false}
            />
            <EngageChart
              percentage={entries.allEngaje.toFixed(2)}
              chartInnerText={`${entries.allEngaje.toFixed(1)}%`}
              chartLabelText={'Engajamento'}
              haslabelChartBkgColor={true}
              isSecondaryChartColor={true}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.chartContainer} />
        </>
      )}
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
        <Text h4>{children}</Text>
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
