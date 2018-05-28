import React from 'react';
import {Link, Route} from 'react-router-dom';
import PersonOfPR from './PersonOfPR';

const ParksAndRec = ({ match }) => {

    const ParksAndRecData = [
        {
            id: 1,
            name: 'Leslie Knope',
            actor: 'Amy Poehler'
        },

        {
            id: 2,
            name: 'Ann Perkins',
            actor: 'Rashida Jones'
        },

        {
            id: 3,
            name: 'Ben Wyatt',
            actor: 'Adam Scott'
        },

        {
            id: 4,
            name: 'Ron Swanson',
            actor: 'Nick Offerman'
        },
    ];

    var linkList = ParksAndRecData.map( (person) => {
        return (
            console.log(match.url),
            <li>
                <Link to={`${match.url}/${person.id}`}>
                    {person.name}
                </Link>
            </li>
        )
    } )


    return(
        console.log(match.url),
        <div id = "parksandrec">
           <h3> People of Parks and Recreation </h3> 
            <ul>
                {linkList}
            </ul>
            <Route path={`${match.url}/:personId`} 
            render={(props) => <PersonOfPR data={ParksAndRecData} {...props}/>}/>
            <Route exact path = {match.url} render = {()=>(
                <div>Please pick a person </div>
            )}
            />
            </div>
    );
};

export default ParksAndRec;