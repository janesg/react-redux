export function selectBookActionCreator(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}