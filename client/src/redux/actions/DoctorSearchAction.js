import axios from 'axios';


export const loadDoctors = (params) => async (dispatch) => {
    //FETCH AXIOS
    const doctorData = await axios.get("/patient/search/1", {params});
    dispatch({
      type: "FETCH_DOCTORS",
      payload: {
        doctors: doctorData.data,
      },
    });
  };