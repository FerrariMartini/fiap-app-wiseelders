import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CycleCard from '../Components/CycleCard';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import dividerStyle from '../Components/ActivityCard/CardStyle';
import { Divider } from 'react-native-elements';
import ActivityCard from '../Components/ActivityCard/ActivityCard';

const ActivityDashboards = (props) => {
  const localStyles = StyleSheet.create({
    safeAreaView: {
      flexGrow: 1,
      backgroundColor: '#ffffff',
    },

    pageTitle: {
      fontSize: 25,
      marginLeft: 15,
      marginBottom: 10,
      marginTop: 10,
      fontWeight: '700',
    },
  });

  return (
    <>
      <SafeAreaView style={localStyles.safeAreaView}>
        <ScrollView>
          <Text style={localStyles.pageTitle}>Dashboard das Atividades</Text>
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
          <Divider style={dividerStyle.divider} />
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ActivityDashboards;
