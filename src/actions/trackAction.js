import {
    GET_TRACK,
    SEARCH_TRACKS,
    SET_ERROR,
    SET_LOADING
} from './type';


//Top 10 Track list
export const getTrack = () => async dispatch => {
    try{
        setLoading();
        const res = await fetch ('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=b017a9a767382aeb13124554229c643a');
        const data = await res.json();

        dispatch({
            type:GET_TRACK,
            payload:data.message.body.track_list
        })
    }catch(err) {
        dispatch({
            type:SET_ERROR,
            payload:err.response.data
        })
    }
}

//Search Track
export const searchTrack = (title) => async dispatch => {
    try{
        setLoading();
        const res = await fetch (`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=10&page=1&s_track_rating=desc&apikey=b017a9a767382aeb13124554229c643a`);
        const data = await res.json();

        dispatch({
            type:SEARCH_TRACKS,
            payload:data.message.body.track_list
        })
    }catch(err) {
        dispatch({
            type:SEARCH_TRACKS,
            payload:err.response.data
        })
    }
}

// set loading
export const setLoading = () => {
    return {
        type:SET_LOADING
    }
}