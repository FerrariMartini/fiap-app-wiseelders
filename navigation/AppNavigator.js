import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AuthScreen from '../screens/AuthScreen';
import ExecutiveSummaryScreen from '../screens/ExecutiveSummaryScreen';
import ActivityDashboardScreen from '../screens/ActivityDashboardScreen';
import ActivitiesListScreen from '../screens/ActivitiesListScreen';
import {Icon} from 'react-native-elements';
import theme from '../constants/theme';


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            {/*<Stack.Navigator initialRouteName="Auth">
                <Stack.Screen
                    name="Auth"
                    component={AuthScreen}
                    options={{title: 'Login'}}
                />
                <Stack.Screen
                    name="ExecutiveSummary"
                    component={ExecutiveSummaryScreen}
                    options={{title: 'Relatório executivo'}}
                />
                <Stack.Screen
                    name="ActivityDashboard"
                    component={ActivityDashboardScreen}
                    options={{title: 'Dashboard de atividades'}}
                />
                <Stack.Screen
                    name="Activities"
                    component={ActivitiesListScreen}
                    options={{title: 'Lista de atividades'}}
                />
            </Stack.Navigator>*/}
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        const currentColor = focused ? theme.colors.primary : theme.colors.grey2;
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
                        return <Icon name={iconName} type="material" color={currentColor}/>;
                    },
                })}
                tabBarOptions={{showLabel: false}}>
                <Tab.Screen name="ExecutiveSummary" component={ExecutiveSummaryScreen}/>
                <Tab.Screen name="ActivityDashboard" component={ActivityDashboardScreen}/>
                <Tab.Screen name="Activities" component={ActivitiesListScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
