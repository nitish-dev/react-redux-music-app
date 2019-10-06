import React from 'react';
import {Link} from 'react-router-dom';

const TrackItem = ({track:{track:{track_name,artist_name,album_name,track_id}}}) => {
    return (
        <div className="col s12 m6">
      <div className="card">
        <div className="card-content ">
        <span className="card-title">{artist_name}</span>
        <p><i className="material-icons">headset</i> {track_name}</p>
        <p><i className="material-icons">album</i> {album_name}</p>
        </div>
        <div className="card-action">
        <Link to={`lyrics/track/${track_id}`} className="btn blue btn-block"><i className="material-icons">chevron_right</i>View Lyrics</Link>
        </div>
      </div>
    </div>
    )
}

export default TrackItem;