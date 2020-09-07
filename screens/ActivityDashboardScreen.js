import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import { Divider } from 'react-native-elements';
import CycleCard from '../components/CycleCard';
import Theme from '../constants/theme';

const ActivityDashboardScreen = () => {
  return (
    <Screen title="Dashboard de atividades">
      <ActivityCard
        title={'Happy Hour - FIAP'}
        subtitle={'Relacionamento'}
        totalInvestValue={'R$ 4.934,00'}
        dateInit={'12/08/2020'}
        dateEnd={'19/09/2020'}
        qtyCycle={'4'}
        qtyEnroll={'100'}
        qtyAttendant={'317'}
        percentage={89}
        chartInnerText={'89,5'}
        chartLabelText={'Engajamento\nTotal'}
        labelChartBackgroundColor={false}
      />
      <Divider style={styles.divider} />
      <View>
        <CycleCard
          cycleNumber={'1'}
          qtyAttendant={'317'}
          investValue={'R$ 934,00'}
          percentage={89}
          chartInnerText={'89'}
          chartLabelText={'Engajamento'}
          labelChartBackgroundColor={true}
        />
      </View>
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
