import React from 'react'

import SideMenu from '../components/SideMenu'
import TopBar from '../components/TopBar'
import Badge from '../components/Badge'
import HorizontalChartBuilder from '../Graphics/Builder'

import './styles.css'

export default props => {
    return(
        <div id="main-page">           
        <SideMenu
         personName="Junior Durski"
         personCompanyRole="CEO Madero"
        />
        <div id="main-dashboard">
            <TopBar viewDescription="População" />
            <div id="dashboard-body">                       
                    <Badge index={0}/>
                    <HorizontalChartBuilder />
            </div>
        </div>
    </div>
    )
}