import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      marginTop: 30,
      padding: 10,
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
  });

  return (
    <>
      <View>
        <AnimatedGaugeProgress
          size={size}
          width={width}
          fill={89} // passar via props
          cropDegree={cropDegree}
          tintColor="#5F5FD4"
          delay={0}
          backgroundColor="#b0c4de"
          stroke={[2, 2]} //For a equaly dashed line
          strokeCap="circle">
          <View style={style.chartTxtPosition}>
            <Text style={style.chartText}>89,5%</Text>
          </View>
        </AnimatedGaugeProgress>
        <Text style={style.chartLabel}>Engajamento</Text>
      </View>
    </>
  );
};

export default EngageChart;
