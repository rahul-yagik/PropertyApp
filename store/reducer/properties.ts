import {
  FETCH_PROPERTIES_FAILED,
  FETCH_PROPERTIES_SUCCESS,
} from '../action/constant';

export interface properties {
  id: number;
  type: string;
  society: string;
  location: string;
  posted_by: string;
  bedrooms: string;
  price: string;
  city: string;
  photos: 'image1.jpg, image2.jpg';
  floor: string;
  nearby_places: string;
  state: string;
  construction_status: string;
  area: number;
  status: number;
  is_deleted: number;
  created_at: string;
  updated_at: string;
}

interface state {
  loading: boolean;
  properties: Array<properties>;
  error: string;
}

const initialState: state = {
  loading: true,
  properties: [],
  error: '',
};

export const PropertiesReducer = (
  state = initialState,
  {type, payload}: {type: string; payload: properties[] | string},
): typeof initialState => {
  switch (type) {
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: payload as Array<properties>,
      };

    case FETCH_PROPERTIES_FAILED:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    default:
      return state;
  }
};
