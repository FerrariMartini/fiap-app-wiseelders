import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import moment from 'moment';
import * as actions from '../store/actions';
import {Card} from 'react-native-elements';
import Screen from '../components/Screen';
import ActivityCard from '../components/ActivityCard/ActivityCard';

const ActivitiesScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {entries} = useSelector(state => state.activities);

    useEffect(() => {
        const load = () => dispatch(actions.getActivities());
        const unsubscribe = navigation.addListener('focus', load);
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <Screen title="Lista de atividades">
            {entries.length > 0 && entries.map(entry => (
                <Card key={entry.id} containerStyle={styles.card}>
                    <ActivityCard
                        title={entry.name}
                        subtitle={entry.capital}
                        totalInvestValue={entry.totalInvest}
                        dateStart={moment(entry.cycleStartDate).format('DD/MM/YYYY')}
                        dateEnd={moment(entry.cycleEndDate).format('DD/MM/YYYY')}
                        qtyCycle={entry.cycleQuantity.toString()}
                        qtyEnroll={entry.enrollQuantity.toString()}
                        qtyAttendant={entry.attendantQuantity.toString()}
                        percentage={parseInt(entry.percentage)}
                        chartInnerText={entry.percentage.toFixed(1)}
                        chartLabelText={'Engajamento\nTotal'}
                        labelChartBackgroundColor={false}
                    />
                </Card>
            ))}
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
        margin: 10,
        padding: 0,
        shadowColor: '#330000',
        elevation: 10,
    },
});

export default ActivitiesScreen;
