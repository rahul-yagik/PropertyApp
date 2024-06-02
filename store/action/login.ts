import {AnyAction, Dispatch} from 'redux';
import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from './constant';

// Local data
// import USER_DATA from '../data/user.json';

interface userData {
  email: string;
  password: string;
}

export const loginAction =
  (enteredData: userData) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.post(
        'http://172.16.73.20:5000/api/v1/properties/login',
        enteredData,
      );

      return dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err, 'err');

      return dispatch({
        type: LOGIN_FAIL,
        payload: 'Login failed',
      });
    }
  };

export const logoutAction = () => (dispatch: Dispatch) => {
  return dispatch({
    type: LOGOUT,
  });
};

// FOR LOCAL DATA
// export const loginAction =
//   (enteredData: userData) => (dispatch: Dispatch<AnyAction>) => {
//     const {email, password} = enteredData;

//     const user = USER_DATA.find(data => data.email === email);

//     if (user && user.password === password) {
//       return dispatch({
//         type: 'LOGIN_SUCCESS',
//       });
//     } else {
//       return dispatch({
//         type: 'LOGIN_FAIL',
//       });
//     }
//   };
