import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';

const FriendsForm = (props) => {
    const {friendInformation} = props;
    const dispatch = useDispatch();
    // const [friendInformation, setFriendInformation] = useState({
    //     name: '',
    //     age: '',
    //     email: '',
    // })
    const isLoading = useSelector(state => state.root.isLoading);
    // const handleChange = (event) => setFriendInformation({...friendInformation, [event.target.name]: event.target.value});

    const handleSubmit = (event) => {
        dispatch({type: 'SET_IS_LOADING', payload: true});
        axios.post('http://localhost:5000/api/friends', friendInformation , {
            headers: { Authorization: localStorage.getItem("token") }
          })
        .then( (response) => {
            console.log(response);
            dispatch({type: 'SET_IS_LOADING', payload: false});
        })
        .catch( error =>  {
            console.log(error);
            dispatch({type: 'SET_IS_LOADING', payload: false});
        });
    }
    return(
        
        <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>Add a Friend you Lonely Bastard</StyledTitle>
            <StyledLabel secondary="true">
            Username
            <StyledInput
            onChange={props.handleChange}
                label="name"
                type="text"
                name="name"
                value={friendInformation.name}
            />
            </StyledLabel>
            <StyledLabel secondary="true">
            Age
            <StyledInput
                onChange={props.handleChange}
                label="age"
                type="text"
                name="age"
                value={friendInformation.age}
            />
            </StyledLabel>
            <StyledLabel secondary="true">
            Email
            <StyledInput
                onChange={props.handleChange}
                label="email"
                type="text"
                name="email"
                value={friendInformation.email}
            />
            </StyledLabel>
            <Styledbutton>{ isLoading ? 'Sending' : 'Send'}</Styledbutton>
        </StyledForm>
    );
}
export default FriendsForm;

const StyledTitle = S.h1`
    font-size: 34px;
    widtrh: 100%;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    color: #fff;
=`;
const StyledForm = S.form`
    width: 500px;
    margin: 0 auto;
    background-color: #35b2a0;
    border: 1px solid #000;
    display: flex;
    flex-flow: row wrap;
    padding: 20px;
    justify-content: center;
`;

const StyledInput = S.input`
    width: 100%;
    border-radius: 5px;
    border: 1px solid #fff;
    font-size: 20px;
`;
const StyledLabel = S.label`
    font-size: 24px;
    font-weight: bold;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    letter-spacing: 2px;
`;

const Styledbutton = S.button`
    color: #fff;
    border: none;
    outline: none;
    background-color: #000;
    border-radius: 5px;
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 30px;
`;