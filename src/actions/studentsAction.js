import axios from "../axios"
import { STUDENTS_DETAIL_FAIL, STUDENTS_DETAIL_REQUEST, STUDENTS_DETAIL_SUCCESS, STUDENTS_LIST_FAIL, STUDENTS_LIST_REQUEST, STUDENTS_LIST_SUCCESS, STUDENT_DELETE_FAIL, STUDENT_DELETE_REQUEST, STUDENT_DELETE_SUCCESS, STUDENT_UPDATE_FAIL, STUDENT_UPDATE_REQUEST, STUDENT_UPDATE_SUCCESS } from "../constants/studentConstant"

const studentListAction = () => async(dispatch) => {
    try{
        dispatch({type: STUDENTS_LIST_REQUEST})
        const {data} = await axios.get('/api/register')
        dispatch({type: STUDENTS_LIST_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: STUDENTS_LIST_FAIL, payload: error.message})
    }
}

export const studentDetailAction = (studentId) => async(dispatch) => {
    try{
        dispatch({type: STUDENTS_DETAIL_REQUEST})
        const {data} = await axios.get(`api/register/${studentId}`)
        dispatch({type: STUDENTS_DETAIL_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: STUDENTS_DETAIL_FAIL, payload: error.message})
    }
}

export const studentUpdateAction = (id) => async(dispatch) => {
    try{
        dispatch({type: STUDENT_UPDATE_REQUEST })
        const {data} = await axios.put(`api/register/update/${id}`)
        dispatch({type: STUDENT_UPDATE_SUCCESS, payload: data})
    } catch(error){
        dispatch({type: STUDENT_UPDATE_FAIL, payload: error.message})
    }
}



export default studentListAction;