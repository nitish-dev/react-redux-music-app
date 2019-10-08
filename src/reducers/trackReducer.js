import {
    GET_TRACK,
    SEARCH_TRACKS,
    SET_ERROR,
    SET_LOADING
} from '../actions/type';

const initalState = {
    tracks:null,
    heading:'',
    loading:false,
    error:null
}

export default (state = initalState, action) => {
    switch(action.type){
        case GET_TRACK:
        return{
            ...state,
            tracks:action.payload,
            heading:'Top 10 Tracks',
            loading:false
        }
        case SEARCH_TRACKS:
        return {
            ...state,
            tracks:action.payload,
            heading:'Search Results',
            loading:false
        }
        case SET_LOADING:
        return {
            ...state,
            loading:true
        }
        case SET_ERROR:
        console.log(action.payload);
        return {
            ...state,
            error:action.payload
        }
        default:
        return state;
    }
}
