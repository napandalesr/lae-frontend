import { types } from "../types";

export const _notifications=(count)=> {
  return { type:  types.notification, payload: count };
};