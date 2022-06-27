import React, {useState} from 'react'
import classes from './Header.module.css'
import './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../Pages";


function Header() {

    //State and functions for Nav hover effect.
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const mouseOn = () => {
        setIsHovering(true)
    }
    const mouseOff = () => {
        setIsHovering(false)
    }
    const isHover = () => {
        return isHovering ? classes.navLinkHover : classes.nav_link
    }

    const navLinkStyles = ({isActive}: { isActive: boolean; }) => {
        return {
            background: isActive ? '#9AC2C5' : '',
            borderRadius: '5px',
            transition: 'all 0.5s'
        }
    }


    return (
        <div className={classes.nav_container}>
            <div className={isHover()} onMouseOver={mouseOn}
                 onMouseLeave={mouseOff}>
                <NavLink style={navLinkStyles} className={classes.link} to={PATH.PRE_JUNIOR}> Pre Junior </NavLink>
                <NavLink style={navLinkStyles} className={classes.link} to={PATH.JUNIOR}> Pre Junior </NavLink>
                <NavLink style={navLinkStyles} className={classes.link} to={PATH.JUNIOR_PLUS}> Junior Plus </NavLink>
                <span className={classes.ch}> Hover me! </span>
            </div>
        </div>
    )
}

export default Header
