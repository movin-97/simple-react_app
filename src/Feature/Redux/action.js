import {ADD_STUDENT} from './actionTypes';

export const AddToStudent = (student) => ({
    type:ADD_STUDENT.ADD_STUDENT,
    payload:student
})