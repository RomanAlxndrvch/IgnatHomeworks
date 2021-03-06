import React, {Dispatch, SetStateAction, useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = {
    data: Array<AffairType> | undefined
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    let mappedAffairs
    if (props.data) {
        mappedAffairs = props.data.map((a: AffairType) => (
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        ))
    }

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <button className={classes.buttons} onClick={setAll}>All</button>
            <button className={classes.buttons} onClick={setHigh}>High</button>
            <button className={classes.buttons} onClick={setMiddle}>Middle</button>
            <button className={classes.buttons} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
