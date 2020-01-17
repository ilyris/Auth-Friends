export const initalState = {
    friends: [],
};


export const friendsReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_FRIENDS': 
            return {...state, friends: [...state.friends, action.payload]};
        default:
            return state;
    }
};