import React from 'react'
import styles from './CirlceIcon.module.css'


export default function CirlceIcon(props) {
        return <div className={`mainBg ${styles.icon} ${props.size}   d-flex justify-content-center align-items-center rounded-circle`}>
                <i className={`${props.iconClass} text-white fa-xl`} ></i>
        </div>
        
}
