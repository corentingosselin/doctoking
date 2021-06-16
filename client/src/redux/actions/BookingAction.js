import axios from 'axios';
import toast from 'react-hot-toast';

export const loadBooked = () => async (dispatch) => {
    //FETCH AXIOS

    const bookingsData = await axios.get("/patient/bookings");

    const fetchedBookings = bookingsData.data;
    const books = [];
    fetchedBookings.map(element => {

        const date = new Date(element.start + " " + element.Slot.Availability.time_start);
        let totalMinutes = date.getHours() * 60 + date.getMinutes();
        totalMinutes += (element.Slot.slot) * 30;
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        const time = (hours + ':' + minutes + ':00').slice(0, -3);


        books.push({
            id: element.id,
            doctor: {
                last_name: element.doctorBooking.last_name,
                first_name: element.doctorBooking.first_name,
                city: element.doctorBooking.city,
                address: element.doctorBooking.address,
                phone: element.doctorBooking.phone,
                gender: element.doctorBooking.gender,
                title: element.doctorBooking.titles[0].name
            },
            date: date.toLocaleDateString(),
            time: time
        });

    });

    dispatch({
        type: "FETCH_BOOKS",
        payload: {
            books: books,
        },
    });
};


export const loadDoctorBookings = () => async (dispatch) => {
    //FETCH AXIOS

    const bookingsData = await axios.get("/doctor/bookings");

    const fetchedBookings = bookingsData.data;
    const books = [];
    fetchedBookings.map(element => {

        const date = new Date(element.start + " " + element.Slot.Availability.time_start);
        let totalMinutes = date.getHours() * 60 + date.getMinutes();
        totalMinutes += (element.Slot.slot) * 30;
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        const time = (hours + ':' + minutes + ':00').slice(0, -3);


        books.push({
            id: element.id,
            patient: {
                last_name: element.patientBooking.last_name,
                first_name: element.patientBooking.first_name,
                city: element.patientBooking.city,
                address: element.patientBooking.address,
                phone: element.patientBooking.phone,
                gender: element.patientBooking.gender,
            },
            date: date.toLocaleDateString(),
            time: time
        });

    });

    dispatch({
        type: "FETCH_BOOKS",
        payload: {
            books: books,
        },
    });
};



export const createBook = (body) => {
    return (dispatch) => {
        axios
            .post(`/booking`, body)
            .then((book) => {
                const newBook = book.data;
                dispatch({
                    type: "ADD_BOOK",
                    newBook
                });
                toast.success('Votre rendez-vous est confirmé');
            })
            .catch((error) => {
                console.log(error.response);
                toast.error('Impossible de réserver');

            });
    };
};

export const deleteBooking = (id) => {
    return (dispatch) => {
        axios
            .delete(`/booking/${id}`)
            .then(() => {
                toast.success('Votre réservation est annulée');
                dispatch({
                    type: "CANCEL_BOOKING",
                    id,
                });
            })
            .catch((error) => {
                console.log(error);
                //toast here
                toast.error('Une erreur est survenue');

            });
    };
};

