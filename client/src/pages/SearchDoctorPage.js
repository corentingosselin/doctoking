import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/global/ProfileCard'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
    faSearch,
)

const SearchDoctorPage = () => {
    return (
        <Style>

            <div className="search">
                <h1>Rechercher votre médecin</h1>
                <form className="search-bar">
                    <input className="input" id="search-doctor" placeholder="Nom, prénom médecin">
                    </input>
                    <input className="input" id="search-location" placeholder="Ville"></input>
                    <button>Rechercher</button>
                </form>
            </div>

            <div className="results">

                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
        



            </div>
        </Style>

    )
}



const Style = styled.div`
        .search {
            padding-top: 4%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

      .search-bar {
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          height: 30px;
          width: 40%;
          min-width: 600px;
      }

    .input {
        border: none;
        width: 50%;
        height: 30px;
        padding: 30px;
        border: 1px solid;
        outline: none;
        border-color: #38b6b2

    }

    #search-doctor {
        border-right: none;
        width: 50%

    }

    #search-location {
        border-right: none;
        width: 30%

    }

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


        form {
            display: flex;
        }

        h1 {
            margin: 50px;
        }
      

      .results {
          margin-left: 50px;
          margin-right: 50px;
          margin-top: 150px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
      }
`;

export default SearchDoctorPage;