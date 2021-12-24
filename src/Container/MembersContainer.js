import React, { useState } from 'react';
import Members from '../Presenter/Members';

export default function MembersContainer() {

    const members = useState([{
        name: 'HANSEN',
        title: 'COFOUNDER'
    },
    {
        name: 'SUJI',
        title: 'COFOUNDER'
    },
    {
        name: 'PARAH',
        title: 'MANAGER'
    },
    {
        name: 'KATLIN',
        title: 'MANAGER'
    },
    {
        name: 'ABDUL',
        title: 'MANAGER'
    },
    ])
    
    return (
        <Members members={members}/>
    )
}