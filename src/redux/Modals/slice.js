import { combineReducers } from '@reduxjs/toolkit';

// Exemplu de reducer gol (temporar)
const dummyReducer = (state = {}, action) => {
    return state;
};

// Combinarea reducerilor
const rootReducer = combineReducers({
    dummy: dummyReducer, // Înlocuiește cu reducerii reali
});

export default rootReducer;
