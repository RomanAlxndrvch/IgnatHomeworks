import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={classes.affair}>
            <span className={classes.affairPart}> {props.affair._id} </span>
            <span className={classes.affairPart}> {props.affair.name} </span>
            <span className={classes.affairPart}> {props.affair.priority} </span>
            <div className={classes.affairPart}>
                <button className={classes.btn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
