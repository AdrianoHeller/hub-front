import React from 'react'

import { Link } from 'react-router-dom'

import LogoImage from '../../assets/logo.png'
import PhotoImage from '../../assets/jr.png'
import BackIcon from  '../../assets/back.png'
import HomeIcon from '../../assets/homeIcon.png'
import CareIcon from '../../assets/careIcon.png'
import CashIcon from '../../assets/cashIcon.png'
import CoupleIcon from '../../assets/coupleIcon.png'
import KpiIcon from '../../assets/kpIcon.png'

import './styles.css'

export default props => {

    return(
        <>
            <div id="main-sidemenu">
                <div id="logo-image">
                    <img src={LogoImage} alt="logo hms" className="logo"/>
                    <Link className="back-icon" to="/"><img src={BackIcon} alt="backtick icon" className="back-icon"/></Link>
                </div>
                <div id="main-badge">
                    <img src={PhotoImage} alt="imagemCeo" id="pic-image"/>
                    <div className="badge-text">
                        <span>{props.personName}</span>
                        <span>{props.personCompanyRole}</span>                                               
                    </div>
                </div>
                <div id="menu-list">
                    <ul>
                        <Link className="link" to="/home"><img src={HomeIcon} alt="home icon" className="home-icon"/>Visão Geral</Link>
                        <Link className="link" to="/populacao"><img src={CoupleIcon} alt="couple icon" className="home-icon"/>População</Link>
                        <Link className="link" to="/financeiro"><img src={CashIcon} alt="cash icon" className="home-icon"/>Financeiro</Link>
                        <Link className="link" to="/kpis"><img src={KpiIcon} alt="kpi icon" className="home-icon"/>Indicadores/KPIs</Link>
                        <Link className="link" to="/gestao"><img src={CareIcon} alt="care icon" className="home-icon"/>Gestão em Saúde</Link>                        
                    </ul>
                </div>
            </div>
        </>    
    )
}