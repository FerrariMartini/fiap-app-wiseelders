import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedGaugeProgress } from 'react-native-simple-gauge';
// https://www.npmjs.com/package/react-native-simple-gauge

const EngageChart = (props) => {
    const windowHeight = Dimensions.get('window').height;

    const iconSize = windowHeight * 0.025;
    const size = windowHeight * 0.23;
    const width = windowHeight * 0.03;
    const cropDegree = 0;
    const textOffset = width;
    const textWidth = size - textOffset * 2;
    const textHeight = size * (1 - cropDegree / 360) - textOffset * 2;
    let fontColor = '#ffffff';
    let backgroundColor = '#5F5FD4';


    if (!props.labelChartBackgroundColor) {
        backgroundColor = '#ffffff';
        fontColor = '#000000';
    }

    const styles = StyleSheet.create({
        chartLabel: {
            marginTop: 8,
            padding: 10,
            textAlign: 'center',
            fontSize: windowHeight * 0.03,
            backgroundColor: backgroundColor,
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
                    tintColor="#5F5FD4"
                    delay={0}
                    backgroundColor="#b0c4de"
                    stroke={[2, 2]} //For a equaly dashed line
                    strokeCap="circle">
                    <View style={styles.chartTxtPosition}>
                        <Text style={styles.chartText}>{props.chartInnerText}</Text>
                    </View>
                </AnimatedGaugeProgress>
                <Text style={styles.icon}>
                    <Icon name="chevron-down" size={iconSize} color="#5F5FD4" />
                </Text>
                <Text style={styles.icon}>
                    <Icon name="chevron-down" size={iconSize} color="#5F5FD4" />
                </Text>
                <Text style={styles.icon}>
                    <Icon name="chevron-down" size={iconSize} color="#5F5FD4" />
                </Text>
                <Text style={styles.chartLabel}>{props.chartLabelText}</Text>
            </View>
        </>
    );
};

export default EngageChart;
