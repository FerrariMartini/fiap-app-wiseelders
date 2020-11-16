import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Screen from '../components/Screen';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import { Divider } from 'react-native-elements';
import CycleCard from '../components/CycleCard';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';

const ActivityDashboardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { entries } = useSelector((state) => state.activities);
  const scrollRef = useRef(null);

  useEffect(() => {
    const load = () => dispatch(actions.getActivities());
    const unsubscribe = navigation.addListener('focus', load);
    return () => unsubscribe();
  }, [dispatch, navigation]);

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
  });

  return (
    <Screen title="Dashboard de Atividades">
      {entries.length >= 0 ? (
        <>
          <View>
            <Text h5>Nenhuma Atividade cadastrada foi encontrada</Text>
          </View>
        </>
      ) : (
        entries.map((activity) => {
          <>
            <ActivityCard
              title={activity[0].name}
              subtitle={activity[0].kalacheCapital}
              lifeAspectTitle={activity[0].lifeAspect}
              totalInvestValue={activity[0].totalInvest}
              dateStart={moment(activity[0].start).format('DD/MM/YYYY')}
              dateEnd={moment(activity[0].end).format('DD/MM/YYYY')}
              qtyCycle={activity[0].cycleQuantity.toString()}
              qtyEnroll={activity[0].enrollQuantity.toString()}
              qtyAttendant={activity[0].attendantQuantity.toString()}
              // eslint-disable-next-line radix
              percentage={parseInt(activity[0].allActivityEngaje)}
              chartInnerText={`${activity[0].allActivityEngaje.toFixed(1)}%`}
              chartLabelText={'Engajamento\nTotal'}
              labelChartBackgroundColor={false}
            />
            <Divider style={styles.divider} />
            <ScrollView ref={scrollRef} horizontal={true}>
              {activity &&
                activity.cycles.map((item) => (
                  <View>
                    <CycleCard
                      key={item.cycleNumber}
                      cycleNumber={item.cycleNumber}
                      qtyAttendant={item.attendantQuantity.toString()}
                      investValue={item.unitaryInvest}
                      // eslint-disable-next-line radix
                      percentage={parseInt(item.cycleEngaje)}
                      // eslint-disable-next-line radix
                      chartInnerText={`${parseInt(
                        item.percentage,
                      ).toString()}%`}
                      chartLabelText={'Engajamento'}
                      labelChartBackgroundColor={true}
                    />
                  </View>
                ))}
            </ScrollView>
          </>;
        })
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
});

export default ActivityDashboardScreen;
