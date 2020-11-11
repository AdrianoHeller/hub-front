import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import LogoImage from '../assets/logohmsbco.png'
import LogoPlace from '../assets/avatar.png'

import './styles.css'

export default props => {

const [visible,setVisible] = useState(false);
const [email,setEmail] = useState('');
const [fullName, setFullName] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [gender, setGender] = useState('');
const [company, setCompany] = useState('');
const [role, setRole] = useState('');


const mapMailData = event => {
    setEmail(event.target.value)
}

const mapPasswordData = event => {
    setPassword(event.target.value)
}

const mapConfirmPasswordData = event => {
    setConfirmPassword(event.target.value)
}

const mapFullNameData = event => {
    setFullName(event.target.value)
}

const mapGenderData =event => {
    setGender(event.target.value)
}

const mapCompanyData = event => {
    setCompany(event.target.value)
}

const mapRoleData = event => {
    setRole(event.target.value)
}


const handleVisibility = event => {
    event.preventDefault();
    switch(visible){
        case true:
            let otherAction = event.target.classList.add('hide-data');
            setVisible(!visible);
            getProps(otherAction)
            break;
        default:
            let defaultAction = event.target.classList.remove('hide-data');
            setVisible(!visible);
            getProps(defaultAction)
            break;
    }    
}

const getProps = props => {
    return this.props = props
}

    return(
        <div id="main-register">
            <div id="main-menu">                
                <Link to='/'><img  className="logo-HMS-small" src={LogoImage} alt="logo hms"/></Link>
            </div>            
            <div id="user-pic">
                <Link to="/">
                    <img src={LogoPlace} alt="imagem placeholder" className="user-img"/>
                </Link>                
            </div>
            <div id="form-items">
                <input
                style={{
                    background:'none',
                    color:'var(--main-login-lines)',
                }} 
                type="text"
                name="fullname"
                id="fullname"
                placeholder=" Full Name"
                value={fullName}
                onChange={mapFullNameData}
                />
                <input
                style={{
                    background:'none',
                    color:'var(--main-login-lines)',
                }} 
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={mapMailData}
                />
                <select                
                style={{
                    background:'none',
                    color:'var(--main-login-lines)',
                }} 
                name="gender"
                id="gender"
                placeholder="Gender"
                value={gender}
                onChange={mapGenderData}
                >
                    <option value="Gender">Gender</option>
                    <option 
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="male">Male</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="female">Female</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="other">Other</option>
                </select>

                <select
                style={{
                    background:'none',
                    color:'var(--main-login-lines)'
                }}
                name="company"
                id="company"
                placeholder="Company"
                value={company}
                onChange={mapCompanyData}
                >
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="Label">Company</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="Madero">Madero</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="BBM">BBM</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="PKC">PKC</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="PV">PV</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="CAP">CAP</option>
                </select>

                <select
                style={{
                    background:'none',
                    color:'var(--main-login-lines)',
                }}
                name="role"
                id="role"
                placeholder="Role"
                value={role}
                onChange={mapRoleData}
                >
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="Board">Board</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="Manager">Manager</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="Doctor">Doctor</option>
                    <option
                    style={{
                        background:'none',
                        color:'var(--main-login-lines)',
                    }}
                    value="Employee">Employee</option>
                </select>

                <input 
                style={{
                    background:'none',
                    color:'var(--main-login-lines)',
                }}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={mapPasswordData}
                />

                <input
                style={{
                    background:'none',
                    color:'var(--main-login-lines)',
                }}
                type="password"
                name="password"
                id="confirm-password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={mapConfirmPasswordData}
                />
                
                <button type="submit" className="button-form"><Link className="btn" to='/'>Enviar</Link></button>
            </div>            
        </div>
    )
}