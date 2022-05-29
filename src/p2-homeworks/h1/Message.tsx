import React from 'react'
import classes from './Message.module.css'


export type MessageDataType = {
    avatar: string,
    name: string
    message: string,
    time: string
}


function Message(props: MessageDataType) {
    return (
        <div className={classes.message}>
            <div className={classes.imgBlock}>
                <img className={classes.img} src={props.avatar} alt=""/>
            </div>

            <div className={classes.messageBlock}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
