import { STUDENTS_DETAIL_FAIL, STUDENTS_DETAIL_REQUEST, STUDENTS_DETAIL_SUCCESS, STUDENTS_LIST_FAIL, STUDENTS_LIST_REQUEST, STUDENTS_LIST_SUCCESS, STUDENT_DELETE_FAIL, STUDENT_DELETE_REQUEST, STUDENT_DELETE_RESET, STUDENT_DELETE_SUCCESS, STUDENT_UPDATE_FAIL, STUDENT_UPDATE_REQUEST, STUDENT_UPDATE_RESET, STUDENT_UPDATE_SUCCESS } from "../constants/studentConstant";



export const studentListReducer = (state = {students : []}, action) => {
    switch(action.type){
        case STUDENTS_LIST_REQUEST:
            return {loading: true, students: []}
        case STUDENTS_LIST_SUCCESS:
            return {loading: false, students: action.payload}
        case STUDENTS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;      
    }
}

export const studentDetailReducer = (state = {students : []}, action) => {
    switch(action.type){
        case STUDENTS_DETAIL_REQUEST:
            return {loading: true, students: []}
        case STUDENTS_DETAIL_SUCCESS:
            return {loading: false, students: action.payload}
        case STUDENTS_DETAIL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;      
    }
}

export const studentUpdateReducer = (state = {}, action) => {
    switch(action.type){
        case STUDENT_UPDATE_REQUEST:
            return {loading: true}
        case STUDENT_UPDATE_SUCCESS:
            return {loading: false, studentEdit: action.payload}
        case STUDENT_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        
        default:
            return state;      
    }
}

