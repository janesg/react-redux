import { FETCH_WEATHER } from '../actions/index';

// Due to use of Redux Promise middleware, the promise that was placed
// into payload by the action creator has already been resolved into resulting object
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Add new item to front of the existing state array

            // Either use concat to create a copy of the state array...don't use array.push !
            // return [action.payload.data].concat(state);

            // Or use spread operator instead
            return [action.payload.data, ...state];
    }

    return state;
}