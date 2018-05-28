import React from 'react';
import {Link, Route} from 'react-router-dom';

const PersonOfPR = ({match, data}) => {
    var person = data.find(p=>p.id==match.params.personId);
    var personData;

    if(person)
        personData = <div><h3>{person.name}</h3> is portrayed by {person.actor}.</div>
    else
        personData = <h3>Sorry, person doesn't exist.</h3>

        return (
            <div>
                <div>
                    {personData}
                </div>
            </div>
        )
}

export default PersonOfPR;