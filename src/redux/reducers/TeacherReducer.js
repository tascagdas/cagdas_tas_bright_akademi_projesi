import { GET_TEACHERS, SELECTED_TEACHER } from "../actions/ActionTypes";
const initialState = {
    teachers:[],
    teacher_index:"1"
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
                teacher_index: action.payload
            };
        default:
            return state;
    }
}
export default TeacherReducer