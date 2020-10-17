import {
  SUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_SUCCESS,
  GET_SUBSCRIPTIONS,
  GET_SHOWS_BY_IDS,
  UPDATE_SUBSCRIBED_SHOWS_SUBS_COUNT,
  GET_TRENDING_SHOWS,
  GET_SHOWS_BY_IDS_FOR_TRENDING,
} from "../actions/types";

const initialState = {
  isLoaded: false,
  showsLoaded: false,
  subscriptions: [],
  detailedSubscriptions: [],
  subscribedShowSubCounts: [],
  trendingShows: [],
  detailedTrending: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        subscriptions: !state.subscriptions.includes(action.payload)
          ? state.subscriptions.concat([action.payload])
          : state.subscriptions,
        isLoaded: true,
      };
    case UNSUBSCRIBE_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        subscriptions: state.subscriptions.filter(
          (subs) => subs !== action.payload
        ),
      };
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        isLoaded: true,
        subscriptions: action.payload.map((result) => result.showId),
      };
    case GET_SHOWS_BY_IDS:
      return {
        ...state,
        isLoaded: true,
        showsLoaded: true,
        detailedSubscriptions: action.payload.shows,
      };
    case UPDATE_SUBSCRIBED_SHOWS_SUBS_COUNT:
      return {
        ...state,
        isLoaded: true,
        subscribedShowSubCounts: action.payload,
      };
    case GET_TRENDING_SHOWS:
      return {
        ...state,
        isLoaded: true,
        trendingShows: action.payload
          .map((item) => ({
            showId: item.data[0].showId,
            count: item.count,
          }))
          .sort((a, b) => b.count - a.count),
      };
    case GET_SHOWS_BY_IDS_FOR_TRENDING:
      return {
        ...state,
        isLoaded: true,
        detailedTrending: action.payload.shows,
      };
    default:
      return state;
  }
}
