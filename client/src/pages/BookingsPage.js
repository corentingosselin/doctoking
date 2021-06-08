import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookCard from '../components/global/BookCard'
import toast, { Toaster } from 'react-hot-toast';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
library.add(
    faSearch,
);


const notify = () => toast.success('Here is your toast.');

const BookingsPage = (props) => {


    //fetch my bookings

    // <BookCard />

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        axios.get(`/patient/bookings/`)
            .then(response => {
                setBookings(response.data)
            })
    }, [])

    //doctor infos
    //date et heure
    // booking id (to cancel)


    return (
        <Style>


            <h1>Vos rendez-vous</h1>

            <div className="results">

                {bookings.length ? (
                 
                        {bookings.map((doctor) => (
                            <ProfileCard
                                doctor={doctor}
                                key={doctor.id}
                            />
                        ))}
                   

                ) : (
                    ""
                )}
                <Toaster />
            </div>
        </Style>

    )
}



const Style = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5%;


    button {
        background: #38b6b2;
        color: white;
        font-weight: bold;
        border: none;
        font-size: 20px;
        width: 20%;
        height: 63px;
        margin-bottom: 10px;
      }
      

      .results {
          padding-top: 100px;
          margin-left: 50px;
          margin-right: 50px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
      }
`;

export default BookingsPage;