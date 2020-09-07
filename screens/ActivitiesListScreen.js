import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { Card } from 'react-native-elements';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import Theme from '../constants/theme';

const ActivitiesListScreen = () => {
  return (
    <Screen title="Lista de atividades">
      <Card containerStyle={styles.card}>
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
      </Card>
    </Screen>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },

  pageTitle: {
    fontSize: 25,
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '700',
  },

  card: {
    margin: 2,
    padding: 6,
    shadowColor: '#330000',
    borderColor: Theme.colors.grey1,
    elevation: 10,
  },
});

export default ActivitiesListScreen;
