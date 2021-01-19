import { CHANGE_AUTH } from "actions/types";

const authReducer = (state = false, { type, payload }) => {
    switch (type) {
        case CHANGE_AUTH:
            return payload
        default:
            return state
    }
}

export default authReducer
