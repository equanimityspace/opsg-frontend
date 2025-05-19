import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "/src/utils/tokenService.js";

const BASE_URL = "https://opsg-backend.onrender.com";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const LOCAL_TOKEN = getToken();
      if (LOCAL_TOKEN) {
        headers.set("authorization", `Bearer ${LOCAL_TOKEN}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});

export default api;
