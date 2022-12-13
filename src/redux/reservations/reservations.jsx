//actions 
const ADD_RESERVATION = 'ADD_RESERVATION'


//action creators
const addFormReservation = (payload) => ({
    type: ADD_RESERVATION,
    payload,
})

// const apiurl = 'http:/127.0.0.1:3000/reservations';
//send data to the api for reservation 
export const addReservation = (user_id, bike_id, location) => async(dispatch) => {
    fetch('http:/127.0.0.1:3000/reservations', {
        method: 'POST',
        headers: {
            Accept:'application/json', 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: { user_id },
          bike_id: { bike_id },
          location: { location },
        }),
    })
    .then(response => response.json())
    dispatch(addFormReservation(response));
    console.log(response);
};

// initialize the state 
const initialState = {
    reservations: [],
};

// reducers
export const storeSlice = createSlice({
    name: "bikers",
    initialState: [],
    reducers: {},
    extraReducers: {
      [loadReservations.fulfilled]: (state, action) => action.payload,
    },
    [loadReservations.fulfilled]: (state, action) => action.payload,
  });
  export default storeSlice.reducer;
