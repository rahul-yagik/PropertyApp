import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from '../action/constant';

const initialState = {
  isLoggedIn: false,
  data: {},
  error: '',
};

export const LoginReducer = (
  state = initialState,
  {type, payload}: {type: string; payload: any},
): typeof initialState => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        data: payload,
        error: '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: 'Login Failed',
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        error: '',
      };
    default:
      return state;
  }
};
