import React,{ useContext } from 'react'
import { BrowserRouter,Route,Redirect } from 'react-router-dom'
import { GlobalProvider,GlobalContext } from '../GlobalContext'

import Landing from '../Landing'
import Logged from '../Logged'
import Kpis from '../Kpis'
import Financeiro from '../Financeiro'
import Populacao from '../Populacao'
import Gestao from '../Gestao'
import Home from '../Home'
import Register from '../Register'
import ChangePass from '../ChangePass'

const PrivateRoute = ({component: RouteComponent, ...props}) => {
    const { user } = useContext(GlobalContext);
    return (
        <Route 
            {...props}
            render={ props => 
                !!user ?
                <RouteComponent {...props}/> :
                <Redirect to={'/'} />
            }
        />
    )
};

export default props => {
    return(
        <GlobalProvider>
            <BrowserRouter>
                <Route path="/" exact component={Landing}/>
                <PrivateRoute path="/logged" component={Logged}/>
                <Route path="/register" component={Register}/>
                <Route path="/change-pass" component={ChangePass}/>
                <Route path="/home" component={Home}/>
                <Route path="/kpis" component={Kpis}/>
                <Route path="/financeiro" component={Financeiro}/>
                <Route path="/populacao" component={Populacao}/>
                <Route path="/gestao" component={Gestao}/>
            </BrowserRouter>
        </GlobalProvider>
    )
};