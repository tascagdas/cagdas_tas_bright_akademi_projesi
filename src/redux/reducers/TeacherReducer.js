import { GET_TEACHERS, SELECTED_TEACHER } from "../actions/ActionTypes";
const initialState = {
    teachers:[],
    teacherIndex:""
};

const TeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEACHERS:
            return {
                ...state,
                teachers:action.payload
            };
        case SELECTED_TEACHER:
            return {
                ...state,
                teacherIndex: action.payload
            };
        default:
            return state;
    }
}
export default TeacherReducer