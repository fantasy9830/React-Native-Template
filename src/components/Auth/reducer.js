import states from './states';
import * as types from './actionType';

export default (state = states, action) => {
  switch (action.type) {
    // 登入
    case types.LOGIN:
      return {
        ...state,
        id: action.id,
        login: true,
        name: action.name,
        token: action.token,
      };
    // 登出
    case types.LOGOUT:
      return {
        ...state,
        id: '',
        login: false,
        name: '',
        token: null,
      };

    default:
      return state;
  }
};
