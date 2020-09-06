import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  containerWrap: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },

  containerHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },

  containerSubHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  circleBox: {
    marginTop: 12,
  },

  investBox: {
    marginTop: 12,
  },

  subtitleContainer: {
    flexDirection: 'row',
  },

  title: {
    textAlign: 'left',
    marginTop: 15,
    fontWeight: '700',
    fontSize: windowHeight * 0.03,
  },

  subtitle: {
    textAlign: 'left',
    marginTop: 7,
    marginLeft: 6,
    fontSize: windowHeight * 0.025,
    color: '#ff5050',
  },

  investSubtitle: {
    textAlign: 'center',
    marginTop: 7,
    fontSize: windowHeight * 0.025,
  },

  investValue: {
    textAlign: 'center',
    fontSize: windowHeight * 0.025,
  },

  icon: {
    display: 'flex',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 7,
    marginLeft: 6,
    fontSize: windowHeight * 0.02,
    color: '#ff5050',
  },

  divider: {
    backgroundColor: '#b1a9ef',
    height: 1,
    width: windowWidth * 0.9,
    alignSelf: 'center',
  },

  infoActivity: {
    // backgroundColor: '#ff5050',
  },

  engageChart: {
    justifyContent: 'center',
  },

  label: {
    color: '#404040',
  },

  disabledText: {
    color: '#000000',
    fontWeight: '700',
  },
});
