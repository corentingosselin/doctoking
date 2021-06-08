import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileCard from '../components/global/ProfileCard'
import { useDispatch, useSelector } from "react-redux";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loadDoctors } from 'redux/actions/DoctorSearchAction';
library.add(
    faSearch,
)



const SearchDoctorPage = () => {

    //FETCH DOCTORS
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState({ title: "", city: "" });
    const data = useSelector(state => state.doctors) || {};

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        setDoctors(data.doctors);
    }, [data]);

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(loadDoctors(textInput));
        setTextInput({ title: "", city: "" });
    };

    return (
        <Style>

            <div className="search">
                <h1>Rechercher votre médecin</h1>
                <form className="search-bar">
                    <input className="input-search" value={textInput.title} type="text" id="search-doctor" placeholder="Profession médecin" onChange={(event) => {
                        const title = event.target.value;
                        setTextInput({ ...textInput, ...{ title } });
                    }} >
                    </input>
                    <input className="input-search" value={textInput.city} type="text" id="search-location" placeholder="Ville" onChange={(event) => {
                        const city = event.target.value;
                        setTextInput({ ...textInput, ...{ city } });
                    }} >

                    </input>
                    <button onClick={submitSearch} type="submit">Rechercher</button>
                </form>
            </div>

   

            {doctors.length ? (
                <Results>
                    {doctors.map((doctor) => (
                        <ProfileCard
                            doctor={doctor}
                            key={doctor.id}
                        />
                    ))}
                </Results>

            ) : (
                ""
            )}

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

    .input-search {
        border: none;
        width: 50%;
        height: 30px;
        padding: 30px;
        border: 1px solid;
        border-radius: 0;
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
      
`;

const Results = styled.div`
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export default SearchDoctorPage;