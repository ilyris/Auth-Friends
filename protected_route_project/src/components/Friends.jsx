import React, {useState, useEffect} from 'react';
import axios from 'axios';
import S from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import FriendsForm from './FriendsForm';

const FriendsPage = () => {
    const dispatch = useDispatch();
    const friends = useSelector(state => state.friendsReducer.friends);

    const [friendInformation, setFriendInformation] = useState({
        name: '',
        age: '',
        email: '',
    })
    const handleChange = (event) => setFriendInformation({...friendInformation, [event.target.name]: event.target.value});

    useEffect(() => {
        console.log('I ran once!');
        const getFriends = () => {
            axios.get('http://localhost:5000/api/friends', {
                headers: { Authorization: localStorage.getItem("token") }
              })
            .then(response => {
                dispatch({type: 'SET_FRIENDS', payload: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
        }
        getFriends();
    },[])
    return(
        <>
        <h1>This is the Friends Page</h1>
        <StyledContainer>
            {friends.length >= 1 ? friends[0].map( friend =>  (
                <Card>
                    <h2>{friend.name}</h2>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </Card>
            )
            ) : null}
            <FriendsForm handleChange={handleChange} setFriendInformation={setFriendInformation} friendInformation={friendInformation}/>
        </StyledContainer>
        </>
    );
}
export default FriendsPage;



const StyledContainer = S.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

`;

const Card = S.div`
    display: flex;
    flex-direction: column;
    background-color: pink;
    box-shadow: 0px 2px 5px 5px #dedede;
    padding: 10px;
    margin: 10px;
`;

