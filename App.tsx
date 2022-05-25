import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './app/stores/reducers/user.reducers';
import { StackParamList } from './app/typings/navigations';
import ReduxThunk from 'redux-thunk';
import { Provider, useSelector } from 'react-redux';
import Main from "./app/Main";
import eventReducer from './app/stores/reducers/event.reducers';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));



export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export type RootState = ReturnType<typeof rootReducer>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
