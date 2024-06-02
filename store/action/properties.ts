import axios from 'axios';
import {FETCH_PROPERTIES_FAILED, FETCH_PROPERTIES_SUCCESS} from './constant';
import {AnyAction, Dispatch} from 'redux';

export const propertiesAction = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const response = await axios.get(
      'http://172.16.73.20:5000/api/v1/properties',
    );

    return dispatch({
      type: FETCH_PROPERTIES_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    return dispatch({
      type: FETCH_PROPERTIES_FAILED,
      payload: 'Fetch failed',
    });
  }
};
