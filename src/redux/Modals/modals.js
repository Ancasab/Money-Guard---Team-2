import { combineReducers } from '@reduxjs/toolkit';
import { modalsReducer } from './slice'; // Importă reducer-ul corect

const rootReducer = combineReducers({
    modals: modalsReducer, // Adaugă reducer-ul `modals`
    dummy: (state = {}, action) => state, // Poți păstra un dummyReducer dacă este necesar
});

export default rootReducer;
