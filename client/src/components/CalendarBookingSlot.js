import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const day_converter = [1, 2, 3, 4, 5, 6, 0];
const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']


let weekIndex = 0;
const CalendarBookingSlot = (props) => {

    const [availabilities, setAvalabilities] = useState([])
    useEffect(() => {
        axios.get(`/patient/availabilities/` + props.doctor.id)
            .then(response => {
                setAvalabilities(response.data)
            })

    }, [])


    const getWeek = () => {
        const startDay = new Date().addDays(weekIndex * 7);
        const currentDateIndex = startDay.getDay();

        let listDays = [];
        let dayIndex = currentDateIndex;
        for (let i = 0; i < days.length; i++) {
            const currentDay = days[dayIndex];
            listDays.push(currentDay);
            dayIndex++;
            if (dayIndex >= 7) {
                dayIndex = 0;
            }
        }
        return listDays;
    };

    const [week, setWeek] = useState(getWeek());

    // -1 or 1
    const moveWeek = (direction) => {
        if (weekIndex + direction <= -1) return;
        weekIndex += direction;
        setWeek(getWeek());
    }




    const startDay = new Date().addDays(weekIndex * 7);
    let weekDays = getDates(startDay, new Date().addDays(7 + (weekIndex * 7)));
    return (
        <Style>

            <button className="move-week" onClick={() => moveWeek(-1)}> &lt;</button>

            {week.map(function (day, index) {
                let displayDay = weekDays[index].getDate() + " " + months[weekDays[index].getMonth()];
                return (
                    <div className="column-day" key={index}>
                        <a className="day">{day}</a>
                        <a className="date">{displayDay}</a>
                        <div className="slots">


                            {availabilities.filter(a => day_converter[a.Availability.day] === days.indexOf(day)).map(function (a) {
                                //fetch all availabilities in the right column-day

                                //get a list of dates booked
                                let dateObjects = a.Booking;
                                let dates = dateObjects.map(d => {
                                    const date = new Date(d.start);
                                    date.setHours(0);
                                    date.setMinutes(0);
                                    date.setSeconds(0);
                                    return date;
                                });

                                //get the current day object
                                let dateOfDay = weekDays[index];
                                //get the current date string
                                let currentDate = dateOfDay.getFullYear() + '-' + (dateOfDay.getMonth() + 1) + '-' + dateOfDay.getDate();

                                //cloning current day object
                                //and check if this date is past with correct hour
                                const dateTime = dateOfDay;
                                const period = a.period.split(':');
                                dateTime.setHours(period[0]);
                                dateTime.setMinutes(period[1]);
                                dateTime.setSeconds(0);
                                const time = a.period.slice(0, -3);
                                const isPast = dateTime <= new Date();

                                //check if the day is booked or not
                                const cur = new Date(currentDate);
                                const isBooked = dates.length > 0 && dates.find(item => {return item.getTime() == cur.getTime()});

                                if ((dates === undefined || !isBooked) && !isPast) {
                                    return (
                                        <Link key={a.id} to={{
                                            pathname: `/book`,
                                            state: { doctor: props.doctor, book: { id: a.id, date: currentDate, time: time, day: day + " " + displayDay } }
                                        }}>
                                            <button className="slot" id={a.id} >{time}</button>
                                        </Link>
                                    );
                                } else {
                                    return (<a className="slot" id={a.id} key={a.id}>-</a>);
                                }
                            })}
                        </div>
                    </div>
                );
            })}
            <button className="move-week" onClick={() => moveWeek(1)}> &gt;</button>

        </Style>
    )
}

const Style = styled.div`

    display: flex;
    .column-day {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .day {
        margin: 10px;
        font-weight: bold;
    }
    button.slot {
        background: #b0fff2;
        border-radius: 4px;
        border: none;
    }

    a.slot {
        color: gray;

    }
    .slot {
        margin: 10px;
        width: 80px;
        height: 30px;



    }

    .slots {
        display: flex;
        flex-direction: column;
    }

    .move-week {
        height:30px;
        width: 30px;
        background: #b0fff2;
        border-radius: 4px;
        border: none;
        font-size: 20px;
        font-weight: bold;

    }

`;

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

export default CalendarBookingSlot;