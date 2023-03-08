import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { IUser } from "./authSlice";

interface IAuthResponse {
  access_token: string;
  user: IUser;
}

interface IMyProfileResponse {
  profile: IUser;
}

export const backendApi = createApi({
  reducerPath: "backendapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Profile"],

  endpoints: (builder) => ({
   registerUser: builder.mutation<IAuthResponse, { data: Partial<IUser>}>({
    query: ({ data }) => ({
      url: "auth/register",
      method: "POST",
      body: data,
    }),
   }),
   loginUser: builder.mutation<IAuthResponse, { data: Partial<IUser>}>({
    query: ({ data }) => ({
      url: "auth/login",
      method: "POST",
      body: data,
    }),
   }),
   getMyProfile: builder.query<IMyProfileResponse, {}>({
    query: () => "auth/profile",
    providesTags: ["Profile"],
   }),
  }),
});
export const {
  
} = backendApi;

export default backendApi;
