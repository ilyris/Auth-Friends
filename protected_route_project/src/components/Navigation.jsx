import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import S from 'styled-components';

const Navigation = () => {
    const dispatch = useDispatch();

    const handleLogOut = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        dispatch({type: 'SET_LOGGED_IN_USER', payload: false})
    }
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/login">Login</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/friends">Friends</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink onClick={handleLogOut} to="/">Log Out</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

export default Navigation;

const StyledNav = S.nav`
    width: 100%;
    justifty-content: flex-end;
    background-color: #35b2a0; 
`;

const StyledUl = S.ul`
    display: flex;
    justify-content: space-between;
    width: 40%;
`;

const StyledLi = S.li`
    padding: 10px 20px;
    list-style: none;
`;
const StyledLink = S(Link)`
    color: #fff;
    text-decoration: none;
`;
