import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authSelectors } from 'redux/auth/auth-selector';

export const contactsApi = createApi({
  reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = authSelectors.getToken(getState())
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
      },
    }),
    
  tagTypes:['Contacts'],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
        query: () => 'contacts',
        keepUnusedDataFor: 5,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),  
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation, useUpdateContactMutation  } = contactsApi;