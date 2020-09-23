import React from 'react';
import { Text, View } from 'react-native';
import { Input, Divider, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './CardStyle';
import LifeAspectCircle from '../LifeAspectCircle';
import EngageChart from '../EngageChart';

const ActivityCard = (props) => {
  return (
    <View style={styles.containerWrap}>
      <View style={styles.containerHeader}>
        <View>
          <Text style={styles.title}> {props.title} </Text>
          <View style={styles.subtitleContainer}>
            <Icon style={styles.icon} name="users" />
            <Text style={styles.subtitle}>{props.subtitle}</Text>
          </View>
        </View>
        <View style={styles.circleBox}>
          <LifeAspectCircle />
        </View>
        <View style={styles.investBox}>
          <Text style={styles.investSubtitle}>Invest. Total </Text>
          <Text style={styles.investValue}>{`R$ ${props.totalInvestValue}`}</Text>
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.containerSubHeader}>
        <View style={styles.infoActivity}>
          <Input
            disabled
            labelStyle={styles.label}
            inputStyle={styles.disabledText}
            label={'Ciclos da Atividade'}
            value={`de: ${props.dateStart}`}
          />
          <Input
            disabled
            inputStyle={styles.disabledText}
            value={`até: ${props.dateEnd}`}
          />
          <Input
            disabled
            labelStyle={styles.label}
            inputStyle={styles.disabledText}
            label={'Quantidade de Ciclos(dias)'}
            value={props.qtyCycle}
          />
          <Input
            disabled
            labelStyle={styles.label}
            inputStyle={styles.disabledText}
            label={'Quantidade de Inscritos \n por ciclo'}
            value={props.qtyEnroll}
          />
          <Input
            disabled
            labelStyle={styles.label}
            inputStyle={styles.disabledText}
            label={'Quantidade Total \nde Presentes'}
            value={props.qtyAttendant}
          />
        </View>
        <View style={styles.engageChart}>
          <EngageChart
            percentage={props.percentage}
            chartInnerText={props.chartInnerText}
            chartLabelText={props.chartLabelText}
            labelChartBackgroundColor={props.labelChartBackgroundColor}
          />
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;
