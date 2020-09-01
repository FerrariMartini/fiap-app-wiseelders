import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardTitle: {
    textAlign: 'left',
    fontSize: 18,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fdedff',
  },

  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#df03fc',
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#2403fc',
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
    // backgroundColor: '#666',
    alignItems: 'center',
  },
});
