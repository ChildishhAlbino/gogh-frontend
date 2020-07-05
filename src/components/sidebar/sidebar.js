import React from 'react'
import Header from '../header/header'
import ColourPicker from '../colour-picker/colour-picker'

import './sidebar.scss'

const sidebar = ({ siteTitle }) => {

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar-container">
                <Header siteTitle={siteTitle}></Header>
                <ColourPicker></ColourPicker>
                <footer> ChildishhAlbino </footer>
            </div>
        </div>
    )
}


export default sidebar
