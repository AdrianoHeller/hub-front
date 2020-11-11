import React from 'react'
import { Link } from 'react-router-dom'

import LogoImageWhite from '../assets/logohmsbco.png'
import PhotoImage from '../assets/jr.png'

import './styles.css'

export default props => {

    return(
        <div id="main-form" className="container">            
            <div id="main-image">
                <img className="logo-HMS" src={LogoImageWhite} alt="logo hms"/>
            </div>            
            <div id="logged-user-item">                
               <Link to="/home"><img src={PhotoImage} alt="ceo" className="image-badge"/></Link>
            </div>
            <div id="text-data">
                <p>Júnior Durski</p>
                <p>Madero</p>
            </div>
        </div>
    )
}