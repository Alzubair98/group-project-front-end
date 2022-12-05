//actions 
const ADD_RESERVATION = 'ADD_RESERVATION'


//action creators
const addFormReservation = (payload) => ({
    type: ADD_RESERVATION,
    payload,
})


//send data to the api for reservation 
export const addReservation = (data) => async (dispatch) => {
    const response = await fetch(apiurl, {
        method: 'POST',
        heaers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
    });
    dispatch(addFormReservation(response));
};


//initialize the state 
const initialState = {
    reservations: [],
};

// reducers
export const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_RESERVATION:
        return {
            ...state,
            reservations: [...state.reservations, action.payload],
        };
      default:
        return state;
    }
};
