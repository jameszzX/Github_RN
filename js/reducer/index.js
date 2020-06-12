import {combineReducers} from 'redux';
import theme from './theme';
import popular from './popular';
import trending from './trending';
import favorite from './favorite';
import language from './language';
import {rootCom, RootNavigator} from '../navigator/AppNavigator';

const navState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

const index = combineReducers({
  nav: navReducer,
  theme: theme,
  popular: popular,
  trending: trending,
  favorite: favorite,
  language: language,
});

export default index;
