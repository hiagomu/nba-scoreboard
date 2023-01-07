import styles from "./styles"
import React, { useState } from 'react'
import { FiMenu as MenuIcon } from 'react-icons/fi'

const Dropdown: React.FC = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <styles.main isActive={isActive}>
            <span
                onClick={() => setIsActive(!isActive)}
            >
                <MenuIcon  className="icon"/>
            </span>
            {
                isActive &&
                <nav>
                    <a href="" target="_blank">Home</a>
                </nav>
            }
        </styles.main>
    )
}

export default Dropdown