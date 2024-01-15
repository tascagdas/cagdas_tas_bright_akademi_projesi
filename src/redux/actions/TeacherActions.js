import axios from "axios";
import { GET_TEACHERS } from "./ActionTypes";

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