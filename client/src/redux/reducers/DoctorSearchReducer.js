const initState = {
    doctors: []
};

const doctorSearchReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_DOCTORS":
          return {
            ...state,
            doctors: action.payload.doctors
          };
          default:
            return { ...state };
    }
};

export default doctorSearchReducer;
