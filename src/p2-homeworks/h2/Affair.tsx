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
    }
    const priorityColor = props.affair.priority === 'high' ? classes.red : props.affair.priority === 'middle' ? classes.yellow : props.affair.priority === 'low' ? classes.green : ''

    return (
        <div className={classes.affair}>

            <div></div>
            <div></div>
            <div></div>

            <span className={classes.affairPart}> {props.affair._id} </span>
            <span className={classes.affairPart}> {props.affair.name} </span>
            <span className={priorityColor}> {props.affair.priority} </span>
            <div className={classes.affairPart}>
                <button className={classes.btn} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
