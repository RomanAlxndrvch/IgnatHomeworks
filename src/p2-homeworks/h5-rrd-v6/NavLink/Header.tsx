import React, {useState} from 'react'
import classes from './Header.module.css'


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


    return (
        <div className={classes.nav_container}>
            <div className={isHover()} onMouseOver={mouseOn}
                 onMouseLeave={mouseOff}>
                <span> Link1  </span>
                <span> Link2 </span>
                <span> Link3 </span>
                <span> Hover me! </span>

            </div>
        </div>
    )
}

export default Header
