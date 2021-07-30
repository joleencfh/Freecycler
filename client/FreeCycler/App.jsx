import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import pilesReducer from './store/Reducers';
import Dashboard from './containers/Dashboard';
import AddPileForm from './components/addPileForm';
import PileDetail from './components/pileDetail';
import Favorites from './components/favorites';

// --------Redux setup-----------
const mainReducer = combineReducers({
  piles: pilesReducer,
});

const store = createStore(mainReducer);

// ---------Navigation setup----------
const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="PileDetail" component={PileDetail} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab.Navigator>
          <Stack.Screen name="Dashboard" component={DashboardStack} />
          <Stack.Screen name="AddPileForm" component={AddPileForm} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
