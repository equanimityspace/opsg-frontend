import { useEffect } from "react";
import { useGetAllUsersQuery } from "../../Slices/mainSlice";
import { useSelector } from "react-redux";

export default function adminDash() {

    useGetAllUsersQuery();
    const users = useSelector((state) => state.users);
    const userCount = users.length;

    useEffect(() => {
      if (Array.isArray(users)) {
        Set.userList(users);
      };
    }, [users])

    return (
        <div>
            <h2>Current users</h2>
            <ul>
                {userList.map((user) => {
                    return (
                        <li key={user.id}></li>
                    );
                })}
            </ul>
        </div>
    )
}