import { GET_TEACHERS } from "../actions/ActionTypes";
const initialState = {
    teachers:[]
};


const TeacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEACHERS:
            return {
                ...state,
                teachers:action.payload
            };
        default:
            return state;
    }
}
export default TeacherReducer