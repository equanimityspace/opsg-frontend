import api from "../App/api";

const qbApi = api.injectEndpoints({
  endpoints: (build) => ({
    connect: build.query({
      query: () => ({
        url: "/qbauth/connect",
        method: "GET",
      }),
    }),

    disconnect: build.query({
      query: () => ({
        url: "/qbauth/disconnect",
        method: "GET",
      }),
    }),

    getCustomerObject: build.query({
      query: ({ id }) => ({
        url: `/qbauth/customer/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useConnectQuery,
  useDisconnectQuery,
  useGetCustomerObjectQuery,
} = qbApi;
