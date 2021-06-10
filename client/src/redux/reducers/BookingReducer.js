
const bookingReducer = (books = [], action) => {
    switch (action.type) {
        case "FETCH_BOOKS":
            return action.payload.books;
        case "ADD_BOOK":
            return [action.book, ...books];
        case "CANCEL_BOOKING":
            //toast here
            console.log(action);
            return books.filter((book) => book.id !== action.id);
        default:
            return books;
    }
};

export default bookingReducer;
