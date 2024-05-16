import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getShelf() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/shelf', config);
    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    console.log('In GET saga, here is shelf:', response.data);
    yield put({ type: 'SET_SHELF', payload: response.data });
  } catch (error) {
    console.log('Shelf GET failed', error);
  }
}

function* addShelfItem(action) {
    try {
        const config = {
          data: action.payload,
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        };
        // the config includes credentials which
        // allow the server session to recognize the user
        // If a user is logged in, this will return their information
        // from the server session (req.user)
        const response = yield axios.post('/api/shelf', config);
        // now that the session has given us a user object
        // with an id and username set the client-side user object to let
        // the client-side code know the user is logged in
        console.log('In POST saga, response: ', response.data);
        yield put({ type: 'GET_SHELF', payload: response.data });
      } catch (error) {
        console.log('Shelf POST failed', error);
      }
}

function* shelfSaga() {
    yield takeLatest('GET_SHELF', getShelf);
    yield takeLatest('ADD_SHELF_ITEM', addShelfItem);
  }
  

export default shelfSaga;