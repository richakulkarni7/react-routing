import React from 'react';
import {Link, Route} from 'react-router-dom';

const Brooklyn99 = ({ match }) => {
    return(
        console.log(match.url),
        <div  id = "brooklyn99">
            <ul>
                <li><Link to={`${match.url}/jake`}>Jake</Link></li>
                <li><Link to={`${match.url}/amy`}>Amy</Link></li>
                <li><Link to={`${match.url}/holt`}>Holt</Link></li>
                <li><Link to={`${match.url}/rosa`}>Rosa</Link></li>
                <li><Link to={`${match.url}/gina`}>Gina</Link></li>
            </ul>
            <Route path={`${match.path}/:name`} 
            render={({match}) => (<div><h3>{match.params.name}</h3></div>)}/>
        </div>)
}

export default Brooklyn99;