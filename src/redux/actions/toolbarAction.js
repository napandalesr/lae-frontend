import { types } from "../types";

export const _notificationsSum=(count)=> {
  return { type:  types.notification, payload: count+1 };
};

export const _notificationsRest=(count)=> {
  return { type:  types.notification, payload: count-1 };
};

export const _notifications=(count)=> {
  return { type:  types.notification, payload: count };
};