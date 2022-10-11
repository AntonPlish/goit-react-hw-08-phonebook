import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://6345398139ca915a69f900ca.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, Api) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return Api.rejectWithValue(error.message);
        }
    }
);

const isIncludes = (newName, stateContacts) => {
    return stateContacts.find(
        contact => contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    )
        ? true
        : false;
};

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, Api) => {
        const { name, number: phone } = newContact;

        const stateContacts = Api.getState().contacts.items;

        if (isIncludes(name, stateContacts)) {
            toast.warning(`${name} is already added`);
            return Api.rejectWithValue(`${name} is already added`);
        }

        try {
            const response = await axios.post(
                '/contacts',
                { name, phone }
            );
            return response.data;
        } catch (error) {
            return Api.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (Id, Api) => {
        try {
            const response = await axios.delete(`/contacts/${Id}`);
            return response.data;
        } catch (error) {
            return Api.rejectWithValue(error.message);
        }
    }
);