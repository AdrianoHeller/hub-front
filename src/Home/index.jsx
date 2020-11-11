import React,{ useEffect,useState,useRef } from 'react'
import { Redirect } from 'react-router-dom'
import app from '../Firebase'

import Badge from '../components/Badge'
import TopBar from '../components/TopBar'
import SideMenu from '../components/SideMenu'

import './styles.css'

export default props => {
const barGraphRef = useRef(null);

const [barData,setBarData] = useState({});    
const [logged,setLogged] = useState(true);

const updateBarData = () => {
    setBarData(barGraphRef.current)
};

const logUserOut = () => {
    app.auth().signOut()
        .then(() => {
            setLogged(false)            
        })
        .catch(err => {
            const code = err.code;
            const message = err.message;
            alert(message)
        })
};

if(!logged){
    return <Redirect to={'/'}/>
};
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