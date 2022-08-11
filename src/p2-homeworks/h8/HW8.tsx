import React, {useState} from 'react'
import {checkActionCreator, homeWorkReducer, sortDownActionCreator, sortUpActionCreator} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import classes from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={classes.person}>
            <span>{p.name}</span><span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(people, sortUpActionCreator()))
    const sortDown = () => {
        setPeople(homeWorkReducer(people, sortDownActionCreator()))
    }
    const checkAge = () => {
        setPeople(homeWorkReducer(people, checkActionCreator(18)))
    }

    return (
        <div className={classes.list}>
            <hr/>
            homeworks 8

            {finalPeople}
            <div className={classes.btn_container}>
                <div><SuperButton className={classes.btn} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton className={classes.btn} onClick={sortDown}>sort down</SuperButton></div>
                <SuperButton className={classes.btn} onClick={checkAge}>Check 18</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
