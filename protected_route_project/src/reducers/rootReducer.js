let token = localStorage.getItem('token');

export const initalState = {
    isLoggedIn: token ? true : false,
    isLoading: false,
    authorizedToken: '',
};


export const rootReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_LOGGED_IN_USER': 
            return {...state, isLoggedIn: action.payload};
        // case 'DELETE_LOGGED_IN_USER': 
        //     return {...state, isLoggedIn: action.payload};
        case 'SET_AUTH_TOKEN': 
            return {...state, authorizedToken: action.payload};
        case 'SET_IS_LOADING': 
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};