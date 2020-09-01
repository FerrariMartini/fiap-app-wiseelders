import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AnimatedGaugeProgress,
  GaugeProgress,
} from 'react-native-simple-gauge';
// https://www.npmjs.com/package/react-native-simple-gauge

const EngageChart = (props) => {
  const size = 150;
  const width = 20;
  const cropDegree = 0;
  const textOffset = width;
  const textWidth = size - textOffset * 2;
  const textHeight = size * (1 - cropDegree / 360) - textOffset * 2;

  const style = StyleSheet.create({
    chartLabel: {
      marginTop: 8,
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      backgroundColor: '#5F5FD4',
      color: '#ffffff',
      fontWeight: '500',
    },

    chartTxtPosition: {
      position: 'absolute',
      top: textOffset,
      left: textOffset,
      width: textWidth,
      height: textHeight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    chartText: {
      fontSize: 30,
    },
    icon: {
      textAlign: 'center',
    },
  });

  return (
    <>
      <View>
        <AnimatedGaugeProgress
          size={size}
          width={width}
          fill={props.percentage}
          cropDegree={cropDegree}
          tintColor="#5F5FD4"
          delay={0}
          backgroundColor="#b0c4de"
          stroke={[2, 2]} //For a equaly dashed line
          strokeCap="circle">
          <View style={style.chartTxtPosition}>
            <Text style={style.chartText}>{props.chartInnerText}%</Text>
          </View>
        </AnimatedGaugeProgress>
        <Text style={style.icon}>
          <Icon name="chevron-down" size={20} color="#5F5FD4" />
        </Text>
        <Text style={style.icon}>
          <Icon name="chevron-down" size={20} color="#5F5FD4" />
        </Text>
        <Text style={style.icon}>
          <Icon name="chevron-down" size={20} color="#5F5FD4" />
        </Text>
        <Text style={style.chartLabel}>{props.chartLabelText}</Text>
      </View>
    </>
  );
};

export default EngageChart;
