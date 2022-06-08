import React from "react";
import classes from './Greeting.module.css'
import {UserType} from "./HW3";


type UsersPropsType = {
    users: Array<UserType>
}

export const Users: React.FC<UsersPropsType> = ({users}) => {
    let allUsers = users.map((el) => {
        return (
            <div className={classes.user}>
                <span>{el._id.slice(0, 4)}</span>
                <span>{el.name}</span>
            </div>
        )
    })
    return (
        <div>
            {allUsers}
        </div>
    )
}