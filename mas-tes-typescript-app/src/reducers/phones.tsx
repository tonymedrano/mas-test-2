import {
  PHONE_INDEX_FETCH_SUCCESS,
  PHONE_SINGLE_FETCH_SUCCESS
} from "../actions/phones";

export default function(state:any = {}, action: any) {
  switch (action.type) {
    case PHONE_INDEX_FETCH_SUCCESS: {
      const { data } = action;

      return data.reduce((acc: any, phone: any) => {
        acc[phone._id] = phone;

        return acc;
      }, {});
    }
    case PHONE_SINGLE_FETCH_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        [data.id]: data
      };
    }
    default:
      return state;
  }
}
