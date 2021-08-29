import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import pilesReducer from './store/Reducers';
import Dashboard from './containers/Dashboard';
import WizardPages from './containers/addPileWizard/WizardPages/WizardPages';
import PileCard from './components/PileCard/PileCard';
import PileDetail from './components/PileDetail/PileDetail';
import Favorites from './components/favorites';
import AddUpdate from './containers/AddUpdate/AddUpdate';

// --------Redux setup-----------
const mainReducer = combineReducers({
  piles: pilesReducer,
  // will add more reducers here
});

const store = createStore(mainReducer, applyMiddleware(thunk));

// ---------Navigation setup----------
const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="PileDetail" component={PileDetail} />
    <Stack.Screen name="PileCard" component={PileCard} />
    <Stack.Screen name="WizardPages" component={WizardPages} />
    <Stack.Screen name="AddUpdate" component={AddUpdate} />
  </Stack.Navigator>
);

// to reset Dashboard stack  ---- solution from https://www.reactnativeschool.com/reset-stack-inside-tab-after-leaving-tab
// apparently this is a navigator issue, still open on github
const resetDashboardStack = ({ navigation }) => ({
  tabPress: (e) => {
    const state = navigation.dangerouslyGetState();

    if (state) {
      // Grab all the tabs that are NOT the one we just pressed
      const nonTargetTabs = state.routes.filter((r) => r.key !== e.target);

      nonTargetTabs.forEach((tab) => {
        // Find the tab we want to reset and grab the key of the nested stack
        const tabName = tab?.name;
        const stackKey = tab?.state?.key;

        if (stackKey && tabName === 'Dashboard') {
          // Pass the stack key that we want to reset and use popToTop to reset it
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: stackKey,
          });
        }
      });
    }
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab.Navigator
          labeled={false}
          barStyle={{ backgroundColor: '#323333' }}
        >

          <BottomTab.Screen
            name="Dashboard"
            component={DashboardStack}
            options={{
              tabBarIcon: () => (
                <Icon style={[{ color: 'white' }]} size={26} name="home" />
              ),
            }}
          />
          <BottomTab.Screen
            name="AddPileForm"
            component={WizardPages}
            listeners={resetDashboardStack}
            options={{
              tabBarIcon: () => (
                <Icon style={[{ color: 'white' }]} size={26} name="plus-circle" />
              ),
            }}
          />
          <BottomTab.Screen
            name="Favorites"
            component={Favorites}
            listeners={resetDashboardStack}
            options={{
              tabBarIcon: () => (
                <Icon style={[{ color: 'white' }]} size={26} name="heart" />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
