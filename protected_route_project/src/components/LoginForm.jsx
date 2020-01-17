import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import S from 'styled-components';

const LoginForm = (props) => {

    const dispatch = useDispatch();
    const [userInformation, setUserInformation] = useState({
        username: '',
        password: '',
    })
    const isLoading = useSelector(state => state.root.isLoading);
    const handleChange = (event) => setUserInformation({...userInformation, [event.target.name]: event.target.value});
    const {username, password} = userInformation;

    const handleSubmit = (event) => {
        dispatch({type: 'SET_IS_LOADING', payload: true});
        event.preventDefault();
        axios.post('http://localhost:5000/api/login', {username, password})
        .then( (response) => {
            console.log(response);
            localStorage.setItem('token', response.data.payload);
            dispatch({type: 'SET_LOGGED_IN_USER', payload: true})
            dispatch({type: 'SET_AUTH_TOKEN', payload: response.data.payload});
            dispatch({type: 'SET_IS_LOADING', payload: false});
            props.history.push('/friends');
        })
        .catch( error =>  {
            console.log(error);
            dispatch({type: 'SET_LOGGED_IN_USER', payload: false})
            dispatch({type: 'SET_IS_LOADING', payload: false});
        });
    }
    return(
        
        <StyledForm onSubmit={handleSubmit}>
        <StyledTitle>The Form</StyledTitle>
            <StyledLabel secondary="true">
            Username
            <StyledInput
            onChange={handleChange}
                label="Username"
                type="text"
                name="username"
            />
            </StyledLabel>
            <StyledLabel secondary="true">
            Password
            <StyledInput
                onChange={handleChange}
                label="Password"
                type="password"
                name="password"
            />
            </StyledLabel>
            <Styledbutton>{ isLoading ? 'Sending' : 'Send'}</Styledbutton>
        </StyledForm>
    );
}
export default LoginForm;

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
    margin-top: 300px;
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