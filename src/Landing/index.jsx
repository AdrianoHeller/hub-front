import React,{ useState,useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authContext } from '../Firebase'
import { GlobalContext } from '../GlobalContext'
import LogoImageWhite from '../assets/logohmsbco.png'

import './styles.css'

export default props => {

    const { user } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const createUserLogin = () => {
        authContext.auth().signInWithEmailAndPassword(email,password)
            .catch(err => {
                const message = err.message;
                alert(message)
            })
    };

    const sendPasswordValue = event => {
        setPassword(event.target.value);
    };

    const sendEmailValue = event => {
        setEmail(event.target.value);
    };



    return (
        <div id="main-form" className="container">            
            <div id="main-image">
                <img className="logo-HMS" src={LogoImageWhite} alt="logo hms"/>
            </div>            
                <>    
                    <div id="form-items">
                        <input type="text" name="email" id="email" value={email} onChange={sendEmailValue} placeholder='E-mail'/>
                        <input type="password" name="password" id="password" value={password} onChange={sendPasswordValue} placeholder="password"/>
                        <button className="button-form" onClick={createUserLogin}>Enter</button>
                    </div>
                    <div className="text-data">
                        <p><Link to="/change-pass">Forgot your password?</Link></p>
                        <p>Not a user? <Link to="/logged">Sign up!</Link></p>                        
                    </div>                    
                </>                
        </div>
        )
}