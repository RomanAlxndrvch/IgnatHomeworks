import React, {ChangeEvent, KeyboardEvent} from 'react'
import classes from './Greeting.module.css'
import SuperInputText from "./c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    errorMessage: string
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandler, errorMessage}
) => {
    const inputClass = name ? classes.nonError : classes.error

    return (
        <div>
            {/* <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onKeyDownHandler}/>*/}
            <SuperInputText value={name} onChange={setNameCallback} error={errorMessage}/>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
            <div>{error}</div>

        </div>
    )
}

export default Greeting
