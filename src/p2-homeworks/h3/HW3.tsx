import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import classes from './Greeting.module.css'
import {v1} from "uuid";
import {Users} from "./Users";

// types
export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name}, ...users])
    }

    const showAllUsers = () => {
        return users.map((el) =>
            <div className={classes.us}><span>{el._id}</span> <span>{el.name}</span></div>
        )
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <div className={classes.users}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            <Users users={users}/>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
