import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import theme from './constants/theme';
import activitiesReducer from './store/reducers/activities';
import reportsReducer from './store/reducers/reports';
import loaderReducer from './store/reducers/loader';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  loader: loaderReducer,
  reports: reportsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
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
