import React from 'react'

import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'

import './styles.css'

export default props => {
    return(
        <div id="main-page">           
        <SideMenu
         personName="Junior Durski"
         personCompanyRole="CEO Madero"
        />
        <div id="main-dashboard">
            <TopBar viewDescription="Financeiro"/>
            <div id="dashboard-body">

            </div>
        </div>
    </div>
    )
}