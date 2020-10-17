import {
  SET_URL,
  SET_PLAYING,
  SET_IMAGE,
  SET_ARTIST,
  SET_TITLE,
  SET_SEEKING,
  SET_PLAYED,
  SET_DURATION,
} from "../actions/types";

const initial_state = {
  url: "https://www.youtube.com/watch?v=rI6igzB6cXE",
  playing: false,
  title: null,
  artist: null,
  image: null,
  played: 0,
  seeking: false,
  duration: 0,
};

export default function player(state = initial_state, action) {
  switch (action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.url,
      };
    case SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case SET_ARTIST:
      return {
        ...state,
        artist: action.artist,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case SET_SEEKING:
      return {
        ...state,
        seeking: action.seeking,
      };
    case SET_PLAYED:
      return {
        ...state,
        played: action.played,
      };
    case SET_DURATION:
      return {
        ...state,
        duration: action.duration,
      };
    default:
      return state;
  }
}
