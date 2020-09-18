import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, YellowBox } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import theme from './constants/theme';
import activitiesReducer from './store/reducers/activities';
import loaderReducer from './store/reducers/loader';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  loader: loaderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'forwardRef',
  'Unrecognized WebSocket',
  'Encountered an error loading page',
  'redux-persist: rehydrate for',
]);

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

export default App;
