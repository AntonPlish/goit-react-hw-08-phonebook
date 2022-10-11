import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['filter'],
};

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
});

const rootPersistReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: rootPersistReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default persistReducer(rootPersistConfig, rootReducer);
export const persistor = persistStore(store);