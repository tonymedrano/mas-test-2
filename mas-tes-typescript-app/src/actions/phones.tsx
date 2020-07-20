import { FETCH_REQUEST } from "../epics/fetch";

export const PHONE_INDEX_FETCH_SUCCESS = "PHONE_INDEX_FETCH_SUCCESS";
export const PHONE_SINGLE_FETCH_SUCCESS = "PHONE_SINGLE_FETCH_SUCCESS";

export const getPhones = () => {
  return {
    type: FETCH_REQUEST,
    method: "GET",
    resource: "/phones",
    nextType: PHONE_INDEX_FETCH_SUCCESS
  };
};

export const getPhone = (id: any) => {
  return {
    type: FETCH_REQUEST,
    method: "GET",
    resource: `/phones${id}`,
    nextType: PHONE_SINGLE_FETCH_SUCCESS
  };
};

export const createPhone = (data: any) => {
  console.log(data);
  return {
    type: FETCH_REQUEST,
    method: "POST",
    resource: "/phones",
    body: {
      ...data,
      userId: 1
    },
    nextType: PHONE_SINGLE_FETCH_SUCCESS
  };
};
