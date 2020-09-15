import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import { Divider } from 'react-native-elements';
import CycleCard from '../components/CycleCard';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import moment from 'moment';

const ActivityDashboardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { entries } = useSelector((state) => state.activities);
  const scrollRef = useRef(null);

  useEffect(() => {
    const load = () => dispatch(actions.getActivities());
    const unsubscribe = navigation.addListener('focus', load);
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
  });

  return (
    <Screen title="Dashboard de atividades">
      {entries[0] && (
        <>
          <ActivityCard
            title={entries[0].name}
            subtitle={entries[0].capital}
            totalInvestValue={entries[0].totalInvest}
            dateStart={moment(entries[0].cycleStartDate).format('DD/MM/YYYY')}
            dateEnd={moment(entries[0].cycleEndDate).format('DD/MM/YYYY')}
            qtyCycle={entries[0].cycleQuantity.toString()}
            qtyEnroll={entries[0].enrollQuantity.toString()}
            qtyAttendant={entries[0].attendantQuantity.toString()}
            percentage={parseInt(entries[0].percentage)}
            chartInnerText={entries[0].percentage.toFixed(1)}
            chartLabelText={'Engajamento\nTotal'}
            haslabelChartBkgColor={true}
            isSecondaryChartColor={true}
          />
          <Divider style={styles.divider} />
          <ScrollView ref={scrollRef} horizontal={true}>
            {entries[0] &&
              entries[0].cycles.map((item) => (
                <View>
                  <CycleCard
                    key={item.cycleNumber}
                    cycleNumber={item.cycleNumber}
                    qtyAttendant={item.attendantQuantity}
                    investValue={item.invest}
                    percentage={parseInt(item.percentage)}
                    chartInnerText={parseInt(item.percentage).toString()}
                    chartLabelText={'Engajamento'}
                    haslabelChartBkgColor={true}
                    isSecondaryChartColor={true}
                  />
                </View>
              ))}
          </ScrollView>
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
    color: Theme.colors.divider,
  },
});

export default ActivityDashboardScreen;
