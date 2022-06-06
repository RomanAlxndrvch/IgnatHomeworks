import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <span>{props.affair._id} </span>
            <span>{props.affair.name} </span>
            <span>{props.affair.priority} </span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
