import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rsasign from 'jsrsasign';

import reducers from './reducers';
import * as types from './components/Auth/actionType';

// middlewares
let middlewares = [thunkMiddleware];

const enhancer = compose(applyMiddleware(...middlewares));

const stores = createStore(reducers, enhancer);

// 更新token
/*
(async () => {
  const token = await AsyncStorage.getItem('@Demo:token');
  if (token !== null) {
    const jws = rsasign.jws.JWS.parse(token);

    stores.dispatch({
      type: types.LOGIN,
      id: jws.payloadObj.sub,
      name: jws.payloadObj.name,
      token: token,
    });
  } else {
    stores.dispatch({
      type: types.LOGOUT,
    });
  }
})();
*/

// 假token登入
stores.dispatch({
  type: types.LOGIN,
  id: 'id',
  name: 'name',
  token: null,
});

export default stores;
