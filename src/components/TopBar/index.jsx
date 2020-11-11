import React from 'react'
import NotifyIcon from  '../../assets/notifications.png'
import ConfigIcon from  '../../assets/mech.png'

import './styles.css'

export default props => {
    const [dark,setDark] = React.useState(false);

    const turnDarkModeOn = event => {
        event.target.classList.toggle('buttonGreyOn');
        document.documentElement.querySelector('body').classList.toggle('dark-mode');
        setDark(true);
    }

    return(
            <>
                <div id="dashboard-header">
                    <p>{props.viewDescription}</p>
                    <img className="config-icon" src={ConfigIcon} alt=""/>
                    <img className="notify-icon" src={NotifyIcon} alt=""/>                    
                    <div className="button-box">
                        <p>Dark mode</p>
                        <span className="buttonDark"></span>
                        <span
                        onClick={turnDarkModeOn}                       
                        className="buttonGrey"></span>
                    </div>
                </div>
            </>    
    )
};