import * as api from './constant';
import * as types from './actionType';
import { AsyncStorage } from 'react-native';
// import auth from './../../requests/auth';
// import rsasign from 'jsrsasign';

/**
 * action creators
 */
/*
export const login = (username, password) => {
  return async dispatch => {
    try {
      const res = await auth.post(api.SIGN, {
        username: username,
        password: password,
      });

      const jws = rsasign.jws.JWS.parse(res.data.token);

      dispatch({
        type: types.LOGIN,
        id: jws.payloadObj.sub,
        name: jws.payloadObj.name,
        token: res.data.token,
      });

      await AsyncStorage.setItem('@Demo:token', res.data.token);

      return {
        status: res.status,
        statusText: res.statusText,
      };
    } catch (error) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
      };
    }
  };
};
*/

/**
 * 假資料登入
 * @param {string} username - 帳號
 * @param {string} password - 密碼
 */
export const login = (username, password) => {
  return async dispatch => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    dispatch({
      type: types.LOGIN,
      id: 'id',
      name: 'name',
      token: null,
    });

    await AsyncStorage.setItem('@Demo:token', null);

    return {
      status: 200,
      statusText: 'success',
    };
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOGOUT,
      });

      await AsyncStorage.removeItem('@Demo:token');
    } catch (error) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
      };
    }
  };
};
