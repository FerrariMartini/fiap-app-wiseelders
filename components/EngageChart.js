import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge'; // https://www.npmjs.com/package/react-native-simple-gauge
import Theme from '../constants/theme';
import chartData from '../models/chartData';

const EngageChart = (props = chartData) => {
  const windowHeight = Dimensions.get('window').height;

  const iconSize = windowHeight * 0.025;
  const size = windowHeight * 0.23;
  const width = windowHeight * 0.03;
  const cropDegree = 0;
  const textOffset = width;
  const textWidth = size - textOffset * 2;
  const textHeight = size * (1 - cropDegree / 360) - textOffset * 2;
  let fontColor = Theme.colors.white;
  let chartColor = Theme.colors.primaryChartColor;
  let chartLabelBkgColor = Theme.colors.primaryChartColor;

  if (!props.isSecondaryChartColor) {
    chartColor = Theme.colors.secondary;
    chartLabelBkgColor = Theme.colors.secondary;
  }

  if (!props.haslabelChartBkgColor) {
    fontColor = '#000000';
    chartLabelBkgColor = Theme.colors.white;
  }

  const styles = StyleSheet.create({
    chartLabel: {
      marginTop: 8,
      padding: 4,
      textAlign: 'center',
      fontSize: windowHeight * 0.03,
      backgroundColor: chartLabelBkgColor,
      color: fontColor,
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
      fontSize: windowHeight * 0.045,
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
          tintColor={chartColor}
          delay={0}
          backgroundColor="#b0c4de"
          stroke={[2, 2]} //For a equaly dashed line
          strokeCap="circle">
          <View style={styles.chartTxtPosition}>
            <Text style={styles.chartText}>{props.chartInnerText}</Text>
          </View>
        </AnimatedGaugeProgress>
        <Text style={styles.icon}>
          <Icon name="chevron-down" size={iconSize} color={chartColor} />
        </Text>
        <Text style={styles.icon}>
          <Icon name="chevron-down" size={iconSize} color={chartColor} />
        </Text>
        <Text style={styles.icon}>
          <Icon name="chevron-down" size={iconSize} color={chartColor} />
        </Text>
        <Text style={styles.chartLabel}>{props.chartLabelText}</Text>
      </View>
    </>
  );
};

export default EngageChart;
