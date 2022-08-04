import { HOTELS_LIST_SUCCESS, HOTELS_LIST_FAIL } from "../constants/hotelsContants";

export const hotelListReducer = (state ={ hotels:[]}, action) => {

    switch (action.type) {
        case HOTELS_LIST_SUCCESS:
            return { hotels: action.payload}
            
        case HOTELS_LIST_FAIL:
            return { hotels:action.payload}

        default:
            return state;
    }
}