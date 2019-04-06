// State argument is not the entire application state.
// It is just the state that this reducer is responsible for
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    };
}