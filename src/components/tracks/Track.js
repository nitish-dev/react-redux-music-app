import React,{useEffect,Fragment} from 'react';
import Preloader from '../layouts/Preloader';
import TrackItem from './TrackItem';
import {connect} from 'react-redux';
import {getTrack} from '../../actions/trackAction';

const Track = ({track:{loading,tracks,heading},getTrack}) => {
   
useEffect(() =>  {
    getTrack();
},[])

    if(loading || tracks === null){
        return <Preloader />
    }else{
        return (
                <Fragment>
                <h4>{heading}</h4>
                <div className="row">
                {!loading && tracks.length === 0 ? (<p className="center">No tracks to show.</p>) : (
                tracks.map(item => <TrackItem id={item.track.track_id} track={item} />)
            )}
                
                </div>
                </Fragment>
        )
    }
   
}
const mapStateToProps = state => ({
    track:state.track
})
export default connect(mapStateToProps, {getTrack})(Track);