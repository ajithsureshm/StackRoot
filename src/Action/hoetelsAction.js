import { HOTELS_LIST_SUCCESS, HOTELS_LIST_FAIL } from "../constants/hotelsContants";
import axios from 'axios'

export const listHotels = () => async (dispatch) => {

    try {
        const {data} = await axios.get('/products.json')

        dispatch({
            type:HOTELS_LIST_SUCCESS,
            payload:data.products
        })
    } catch (error) {
        dispatch({
            type:HOTELS_LIST_FAIL,
            payload:error
        })
    }
}