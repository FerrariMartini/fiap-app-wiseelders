import React, { useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import { Divider } from 'react-native-elements';
import CycleCard from '../components/CycleCard';
import moment from 'moment';

const ActivityDashboardScreen = ({ route }) => {
  const scrollRef = useRef(null);

  const activity = route.params;

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
  });

  return (
    <Screen>
      <ActivityCard
        title={activity.name}
        subtitle={activity.kalacheCapital}
        lifeAspectTitle={activity.lifeAspect}
        totalInvestValue={activity.totalInvest}
        dateStart={moment(activity.start).format('DD/MM/YYYY')}
        dateEnd={moment(activity.end).format('DD/MM/YYYY')}
        qtyCycle={activity.cycleQuantity.toString()}
        qtyEnroll={activity.enrollQuantity.toString()}
        qtyAttendant={activity.attendantQuantity.toString()}
        // eslint-disable-next-line radix
        percentage={parseInt(activity.allActivityEngaje)}
        chartInnerText={`${activity.allActivityEngaje.toFixed(1)}%`}
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
                chartInnerText={`${item.cycleEngaje.toFixed(1)}%`}
                chartLabelText={'Engajamento'}
                labelChartBackgroundColor={true}
              />
            </View>
          ))}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 10,
  },
});

export default ActivityDashboardScreen;
