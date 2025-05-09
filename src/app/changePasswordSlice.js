import api from "../api/api";

export const changePasswordApi = api.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: ({ userid, currentPassword, newPassword }) => ({
        url: `/user/${userid}/changePassword`,
        method: "PATCH",
        body: { currentPassword, newPassword },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useChangePasswordMutation } = changePasswordApi;
