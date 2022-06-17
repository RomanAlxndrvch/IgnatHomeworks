import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (e: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        !e.currentTarget.value && setErrorMessage('Type Something!')
        e.currentTarget.value && setErrorMessage('')
        !e.currentTarget.value.includes(' ') && setName(e.currentTarget.value)
        name.length > 0 && setError('')
    }
    const addUser = () => {
        if (name.length > 0 && !name.includes(' ')) {
            alert(`Hello ${name}  !`)
            addUserCallback(name)
            setName('')
        }
        else {
            alert('Type Something!')
            setError('Type Something')
        }
    }

    const pressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownHandler={pressEnterHandler}
            errorMessage={errorMessage}
        />
    )
}

export default GreetingContainer
