import styles from "./styles"
import React, { useState } from 'react'
import {
    FiMenu as MenuIcon
} from 'react-icons/fi'
import {
    FaGithub as GithubIcon,
    FaTwitter as TwitterIcon
} from 'react-icons/fa'

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
                    <a href="/">Home</a>
                    <styles.socialLinks>
                        <a href="https://github.com/hiagomu/nba-scoreboard" target="_blank">
                            <GithubIcon className='social-icon'/>
                        </a>
                        <a href="https://twitter.com/nbagamesbot" target="_blank">
                            <TwitterIcon className='social-icon twitter-icon'/>
                        </a>
                    </styles.socialLinks>
                </nav>
            }
        </styles.main>
    )
}

export default Dropdown