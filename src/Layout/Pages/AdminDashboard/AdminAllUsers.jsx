import { useGetAllUsersQuery } from "../../../Slices/mainSlice";

export default function AdminAllUsers() {
  const { data: users, error, isLoading } = useGetAllUsersQuery();

  return <>{users?.map((user) => console.log(user))}</>;
}
