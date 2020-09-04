import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActivityCard from '../Components/ActivityCard/ActivityCard';
import { Card } from 'react-native-elements';

const ActivityDashboards = (props) => {
  const localStyles = StyleSheet.create({
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
      margin: 10,
      padding: 0,
      shadowColor: '#330000',
      elevation: 10,
    },
  });

  return (
    <>
      <SafeAreaView style={localStyles.safeAreaView}>
        <ScrollView>
          <Text style={localStyles.pageTitle}>Lista das Atividades</Text>
          <Card containerStyle={localStyles.card}>
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ActivityDashboards;
