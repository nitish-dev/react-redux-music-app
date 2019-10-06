import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../layouts/Preloader';

const ViewLyrics = ({ match }) => {
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLyrics();
    }, []);

    const getLyrics = async () => {
        setLoading(true);
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=b017a9a767382aeb13124554229c643a`);
        const data = await res.json();
        setLyrics(data.message.body.lyrics);

        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=b017a9a767382aeb13124554229c643a`);
        const result = await response.json();
        setTrack(result.message.body.track)
        setLoading(false);
    }

    if (loading) {
        return <Preloader />
    } else {
        return (

            <Fragment>
                <Link to="/" className="btn blue "><i className="material-icons left">chevron_left</i> Back</Link>
                <div className="card" style={{ boxShadow: 'none' }}>
                    <h5 className="card-header">
                        {track.track_name} by  <span className="text-secondary">{track.artist_name}</span>
                    </h5>
                    <div className="card-content">
                        <p className="card-text">{lyrics.lyrics_body}</p>
                    </div>
                    <ul className="collection">
                        <li className="collection-item"><strong>Album Name:</strong> {track.album_name}</li>
                        <li className="collection-item"><strong>Song Genre:</strong> {track.primary_genres === undefined ? "NO GENRE AVAILABLE"
                            : track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                        }
                        </li>
                        <li className="collection-item"><strong>Track Rating:</strong> {track.track_rating}</li>
                        <li className="collection-item"><strong>Explicit Words:</strong> {track.explicit === 0 ? "No" : "Yes"}</li>
                        <li className="collection-item"><strong>Release Date</strong>: {track.updated_time}</li>

                    </ul>
                </div>
            </Fragment>

        )
    }

}

export default ViewLyrics;