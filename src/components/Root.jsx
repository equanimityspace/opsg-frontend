import React from "react";
import { Link, Outlet } from "react-router-dom";

export default Root = () => {
    
    // sets the variable of user with a starting value of null, useState will be used to manage login and logout
    const [user, setUser] = useState(null)

    const loginUser = () => {
        setUser({id:1})
    }

    const logoutUser = () => {
        setUser(null)
    }

    return (
        //Nav here
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>

            <Outlet context={{user, setUser, loginUser, logoutUser}}/>

        </div>

    )
}