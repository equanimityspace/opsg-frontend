import qbApi from "../App/qbApi";

const quickbooksApi = qbApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerObject: build.query({
      query: ({ id }) => ({
        url: `/qbauth/customer/${id}`,
        method: "GET",
      }),
    }),

    disconnect: build.query({
      query: () => ({
        url: "/qbauth/disconnect",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCustomerObjectQuery, useDisconnectQuery } = quickbooksApi;
