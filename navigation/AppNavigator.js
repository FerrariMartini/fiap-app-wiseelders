import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExecutiveSummaryScreen from '../screens/ExecutiveSummaryScreen';
import ActivityDashboardScreen from '../screens/ActivityDashboardScreen';
import ActivitiesListScreen from '../screens/ActivitiesListScreen';
import { Icon } from 'react-native-elements';
import theme from '../constants/theme';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const currentColor = focused
              ? theme.colors.primary
              : theme.colors.grey2;
            let iconName;
            switch (route.name) {
              case 'ExecutiveSummary':
                iconName = 'show-chart';
                break;
              case 'ActivityDashboard':
                iconName = 'donut-large';
                break;
              case 'Activities':
                iconName = 'list';
                break;
            }
            return (
              <Icon name={iconName} type="material" color={currentColor} />
            );
          },
        })}
        tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="ExecutiveSummary"
          component={ExecutiveSummaryScreen}
        />
        <Tab.Screen
          name="ActivityDashboard"
          component={ActivityDashboardScreen}
        />
        <Tab.Screen name="Activities" component={ActivitiesListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
