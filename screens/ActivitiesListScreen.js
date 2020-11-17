import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import * as actions from '../store/actions';
import { Card } from 'react-native-elements';
import Screen from '../components/Screen';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import { Button } from 'react-native-elements';

const ActivitiesListScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { entries } = useSelector((state) => state.activities);
  const listRef = useRef(null);

  useEffect(() => {
    const load = () => dispatch(actions.getActivities());
    const unsubscribe = navigation.addListener('focus', load);
    return () => unsubscribe();
  }, [dispatch, navigation]);

  const renderActivityEntry = ({ item }) => (
    <Card containerStyle={styles.card}>
      <ActivityCard
        title={item.name}
        subtitle={item.kalacheCapital}
        lifeAspectTitle={item.lifeAspect}
        totalInvestValue={parseFloat(item.totalInvest).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
        dateStart={moment(item.start).format('DD/MM/YYYY')}
        dateEnd={moment(item.end).format('DD/MM/YYYY')}
        qtyCycle={item.cycleQuantity.toString()}
        qtyEnroll={item.enrollQuantity.toString()}
        qtyAttendant={item.attendantQuantity.toString()}
        // eslint-disable-next-line radix
        percentage={parseInt(item.allActivityEngaje)}
        chartInnerText={`${item.allActivityEngaje.toFixed(1)}%`}
        chartLabelText={'Engajamento\nTotal'}
        labelChartBackgroundColor={false}
      />
      <Button
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('ActivityDashboard', item)}
        title="Ver Detalhes"
      />
    </Card>
  );

  return (
    <Screen title="Lista de atividades">
      <FlatList ref={listRef} data={entries} renderItem={renderActivityEntry} />
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
    borderWidth: 0,
    margin: 10,
    padding: 0,
    shadowColor: '#330000',
    elevation: 10,
  },
});

export default ActivitiesListScreen;
