import { Event } from "../../entities/Event";
import { FETCHALL } from "../actions/event.actions";

interface ReduxState {
    events: Array<Event> | null
}

const initialState: ReduxState = {
    events: []
}

const eventReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case FETCHALL:
            return { ...state, events: action.payload.events };
        default:
            return state;
    }
}

export default eventReducer;