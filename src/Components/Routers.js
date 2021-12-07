import { Router,  Redirect } from "react-router-dom";
import {Route, Switch} from 'react-router';
import Main from '../Presenter/Main';

export default function Routers(){
    return(
        <Router>
            <Switch>
                <Route path='/' element={Main}/>
            </Switch>
        </Router>
    )
}