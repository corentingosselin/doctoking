import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookCard from '../components/global/BookCard'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooked } from 'redux/actions/BookingAction';



const BookingsPage = (props) => {

    const  books = useSelector((state) => state.books);
    //fetch my bookings
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooked());
    }, [dispatch]);
    //Get that data back
   
    return (
        <Style>
            <h1>Vos rendez-vous</h1>
            <Results>
                {books.map(booking => <BookCard
                    key={booking.id}
                    doctor={booking.doctor}
                    time={booking.time}
                    date={booking.date}
                    id={booking.id}
                >{booking.id}</BookCard>)}
            </Results>
            <Toaster />

        </Style >

    )
}


const Results = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

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
    
`;

export default BookingsPage;