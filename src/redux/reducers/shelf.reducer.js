import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const shelf = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELF':
        console.log('reducer returning shelf: ', action.payload);
      return action.payload;
    default:
      return state;
  }
};


// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
    shelf
});
