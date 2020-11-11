import React,{ useEffect } from 'react'
import axios from 'axios'

import CoupleIconWhite from '../../assets/coupleIconWhite.png'
import HomeIconGrey from '../../assets/homeIconGrey.png'
import CashIconGrey from '../../assets/cashIconGrey.png'
import MobIconGrey from '../../assets/mobIconGrey.png'
import KpIconGrey from '../../assets/kpIconGrey.png'
import HeartIconPurple from '../../assets/heartIconPurple.png'

import './styles.css'

export default (props) => {

const hmsUrl = 'https://sistemas-via-saude.uc.r.appspot.com/indicadores/txrl8b7oglGzMA82D1qD/populacao';

const userData = [{
    dashBackgroundColor: '#1AA8E9',
    dashValue: 297,
    dashLabelValue: 'Número de Vidas',
    dashTitle: 'População',
    dashIcon: CoupleIconWhite,
    dashButtonColor: '#FFFFFF',
    dashButtonTextColor: '#1AA8E9',
    dashMainTextColor: '#FFFFFF',
    linkTo: '',
},{
    dashBackgroundColor: '#2D60D3',
    dashValue: 322,
    dashLabelValue: 'Total de ocorrências',
    dashTitle: 'Sinistros',
    dashIcon: HomeIconGrey,
    dashButtonColor: '#FFFFFF',
    dashButtonTextColor: '#2D60D3',
    dashMainTextColor: '#FFFFFF',
    linkTo: '',
},{
    dashBackgroundColor: '#6B32D8',
    dashValue: 200,
    dashLabelValue: 'Exames',
    dashTitle: 'App VIC',
    dashIcon: MobIconGrey,
    dashButtonColor: '#FFFFFF',
    dashButtonTextColor: '#6B32D8',
    dashMainTextColor: '#FFFFFF',
    linkTo: '',
},{
    dashBackgroundColor: '#484848',
    dashValue: 200,
    dashLabelValue: 'Exames',
    dashTitle: 'Financeiro',
    dashIcon: CashIconGrey,
    dashButtonColor: '#FFFFFF',
    dashButtonTextColor: '#484848',
    dashMainTextColor: '#FFFFFF',
    linkTo: '',
},{
    dashBackgroundColor: '#FFFFFF',
    dashValue: 98,
    dashLabelValue: 'Número de Vidas',
    dashTitle: 'Indicadores',
    dashIcon: KpIconGrey,
    dashButtonColor: '#1AA8E9',
    dashButtonTextColor: '#FFFFFF',
    dashMainTextColor: '#1AA8E9',
    linkTo: '',
},{
    dashBackgroundColor: '#00048A',
    dashValue: 200,
    dashLabelValue: 'Número de vidas',
    dashTitle: 'Vidas App VIC',
    dashIcon: HeartIconPurple,
    dashButtonColor: '#FFFFFF',
    dashButtonTextColor: '#00048A',
    dashMainTextColor: '#FFFFFF',
    linkTo: '',
}]

useEffect(() => {
        axios.get(hmsUrl)
            .then(res => {
                console.log(res.data)
            })
},[]);
    
    return (            
            <div id="main-dash-item"
            className="component"
             style={{
                 backgroundColor: userData[props.index].dashBackgroundColor
                 }}>
                <div className="header-data">
                    <img src={userData[props.index].dashIcon} alt="icon" className="icon-button"/>
                    <p style={{
                        color: userData[props.index].dashMainTextColor
                    }}>{userData[props.index].dashTitle}</p>
                </div>
                <div className="footer-data">
                    <div className="number-data">
                        <p style={{
                        color: userData[props.index].dashMainTextColor
                        }}>{userData[props.index].dashValue}</p>
                        <p style={{
                        color: userData[props.index].dashMainTextColor
                        }}>{userData[props.index].dashLabelValue}</p>
                    </div>
                    <button 
                    className="button-data"
                    style={{
                        backgroundColor: userData[props.index].dashButtonColor,
                        color: userData[props.index].dashButtonTextColor
                    }}>Ver mais</button>
                </div>                        
            </div>
    )
}