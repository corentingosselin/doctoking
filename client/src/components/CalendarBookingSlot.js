import * as React from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import availabilities from '../tests/availabilities.json'

const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const day_converter = [1, 2, 3, 4, 5, 6, 0];
const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']


let weekIndex = 0;
const CalendarBookingSlot = () => {

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
                return (
                    <div className="column-day">
                        <a className="day">{day}</a>
                        <a className="date">{weekDays[index].getDate()} {months[weekDays[index].getMonth()]}</a>
                        <div className="slots">
                            {availabilities.filter(a => day_converter[a.Availability.day] === days.indexOf(day)).map(a => {
                                let dateObjects = a.Booking;
                                let dates = dateObjects.map(d => d.start);

                                let dateOfDay = weekDays[index];

                                let currentDate = dateOfDay.getFullYear() + '-' + (dateOfDay.getMonth() + 1) + '-' + dateOfDay.getDate();
                                const dateTime = dateOfDay;
                                const period = a.period.split(':');
                                dateTime.setHours(period[0]);
                                dateTime.setMinutes(period[1]);
                                dateTime.setSeconds(0);
                                const isPast = dateTime <= new Date();
                                if ((dates === undefined || !dates.includes(currentDate)) && !isPast) {
                                    return (<button className="slot">{a.period.slice(0, -3)}</button>);
                                } else {
                                    return (<a className="slot">-</a>);
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