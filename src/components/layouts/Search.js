 import React,{useState} from 'react';
 import TrackItem from '../tracks/TrackItem';
 import {connect} from 'react-redux';
 import {searchTrack} from '../../actions/trackAction';

 const Search = ({searchTrack}) => {
    const [title, setTitle] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        searchTrack(title);
        setTitle('');
    }
   
    return (
        <div className="card">
            <div className="card-content">
        <span className="card-title">
          <i className="material-icons"></i> Search For A Song
        </span>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={onSubmit}>
          <div className="input-field col s12">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
              name="title"
              class="validate"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <button className="btn  btn-lg btn-block mb-5" type="submit">
            Get Track Lyrics
          </button>
        </form>
      </div>
      </div>
    )
 }


 export default connect(null, {searchTrack})(Search);