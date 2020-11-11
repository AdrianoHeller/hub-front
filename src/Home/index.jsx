import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom'

import Badge from '../components/Badge'
import TopBar from '../components/TopBar'
import SideMenu from '../components/SideMenu'

import './styles.css'

export default props => {

    return(
        <div id="main-page">           
            <SideMenu
             personName="Junior Durski"
             personCompanyRole="CEO Madero"
            />
            <div id="main-dashboard">
                <TopBar viewDescription="Visão Geral"/>                
                <div id="dashboard-body">                       
                        <Badge index={0}/>
                        <Badge index={1}/>
                        <Badge index={2}/>
                        <Badge index={3}/>
                        <Badge index={4}/>
                        <Badge index={5}/>
                </div>
            </div>
        </div>
    )
};