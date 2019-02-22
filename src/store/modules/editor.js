import {teams} from "../../constants/data.js";

//액션 타입 정의
const CHANGE_NOTES = "counter/CHANGE_NOTES";
const CHANGE_STATUS = "counter/CHANGE_STATUS";
//액션 함수 정의
export const changeNotes = (notes) => ({type: CHANGE_NOTES, notes});
export const changeStatus = (status) => ({type: CHANGE_STATUS, status});
//초기 state
const initialState = {
  notes: teams
};