import axios from "axios";
import { GET_TEACHERS, SELECTED_TEACHER } from "./ActionTypes";

export const getTeachers = () => (dispatch) => {
    console.log("getteachers")
    axios.get("https://random-data-api.com/api/v2/users?size=5")
        .then((response) =>
            dispatch({
                type: GET_TEACHERS,
                payload: response.data,
            })
        );
}

export const selectedTeacher = (index) => (dispatch) => {
    dispatch({
        type: SELECTED_TEACHER,
        payload: index,
    })

}