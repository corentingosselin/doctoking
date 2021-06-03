import React from 'react';
import styled from 'styled-components';
import BookCard from '../components/global/BookCard'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
    faSearch,
)

const BookingsPage = () => {
    return (
        <Style>


            <h1>Vos rendez-vous</h1>


            <div className="results">

                <BookCard />
                <BookCard />
                <BookCard />

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