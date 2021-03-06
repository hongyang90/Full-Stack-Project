import {PAUSE, PLAY, PLAYSONG} from '../actions/music_actions';
import {RECEIVE_ALL_SONGS} from '../actions/song_actions';
import { RECEIVE_USER } from '../actions/user_actions';


const initialState = {playState: false, songUrl: null, songId: null, tracklist: [] };

const musicReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case PLAYSONG:
            return Object.assign({}, oldState, {songUrl: action.songUrl }, {songId: action.songId}, {playState: true});
        case PAUSE:
            return Object.assign({}, oldState, { playState: false });
        case PLAY:
            return Object.assign({}, oldState, {playState: true} )
        case RECEIVE_ALL_SONGS:
            return Object.assign({}, oldState, {tracklist: Object.values(action.songs)});
        case RECEIVE_USER:
            return Object.assign({}, oldState, { tracklist: Object.values(action.payload.songs) })
        default:
            return oldState;
    }

};

export default musicReducer;