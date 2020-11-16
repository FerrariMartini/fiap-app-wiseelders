import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import EngageChart from './EngageChart';

const CycleCard = (props) => {
  const windowHeight = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    title: {
      textAlign: 'left',
      fontSize: windowHeight * 0.03,
      marginTop: 5,
      marginBottom: 10,
      fontWeight: '700',
      marginLeft: 8,
    },

    disabledText: {
      color: '#000000',
      fontWeight: '700',
    },

    label: {
      color: '#404040',
    },

    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: '#b1a9ef',
      borderWidth: 2,
      borderRadius: 10,
      margin: 10,
    },

    box1: {
      flex: 1,
      margin: 10,
      // backgroundColor: '#666',
    },
    box2: {
      flex: 1,
      margin: 10,
      marginTop: 20,
      alignItems: 'center',
    },

    button: {
      // backgroundColor: ,
      width: 120,
      alignSelf: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={[styles.title]}>Ciclo-{props.cycleNumber}</Text>
        <Input
          disabled
          label={'Qtd. de Presentes'}
          labelStyle={styles.label}
          inputStyle={styles.disabledText}
          value={props.qtyAttendant}
        />
        <Input
          disabled
          label={'Invest. Unitário'}
          labelStyle={styles.label}
          inputStyle={styles.disabledText}
          value={`R$ ${props.investValue}`}
        />
        <Button buttonStyle={styles.button} title="Comparar" />
      </View>
      <View style={[styles.box2]}>
        <EngageChart
          percentage={props.percentage}
          chartInnerText={props.chartInnerText}
          chartLabelText={props.chartLabelText}
          labelChartBackgroundColor={props.labelChartBackgroundColor}
          isSecondaryChartColor={true}
        />
      </View>
    </View>
  );
};

export default CycleCard;
