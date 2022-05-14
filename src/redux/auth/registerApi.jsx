// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const userApi = createApi({
//   reducerPath: 'user',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/' }),
//   tagTypes:['user'],
//   endpoints: (builder) => ({
//     fetchUsers: builder.query({
//       query: () => 'users/current',
//       providesTags: ['user'],
//     }),
    // createUser: builder.mutation({
    //   query: newContact => ({
    //     url: 'contacts',
    //     method: 'POST',
    //     body: newContact,
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),  
    // deleteContact: builder.mutation({
    //   query: id => ({
    //     url: `contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // })
//   }),
// });

// export const { useFetchUsersQuery, useDeleteContactMutation, useCreateContactMutation } = userApi; 
// export const { useFetchUsersQuery } = userApi; 