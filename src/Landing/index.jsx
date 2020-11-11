import React,{ useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import app from '../Firebase'

import LogoImageWhite from '../assets/logohmsbco.png'

import './styles.css'

export default props => {

const [email, setEmail] = useState('');
const [password,setPassword] = useState('');
const [logged,setLogged] = useState(false);

const createUserLogin = () => {
    app.auth().signInWithEmailAndPassword(email,password)
        .then(async userState => {
            const token = await userState.user.getIdToken();
            localStorage.setItem('token', token);
            setLogged(true);             
        })        
        .catch(err => {
            const code = err.code;
            const message = err.message;
            alert(message)
        })
}

const sendPasswordValue = event => {
    setPassword(event.target.value);
};

const sendEmailValue = event => {
    setEmail(event.target.value);
};

if(logged){
    return <Redirect to={'/logged'}/>
}


    return(
        <div id="main-form" className="container">            
            <div id="main-image">
                <img className="logo-HMS" src={LogoImageWhite} alt="logo hms"/>
            </div>            
                <>    
                    <div id="form-items">
                        <h1 style={{fontSize: '1.2rem', width: '30vw', justifySelf: 'flex-start'}}></h1>
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