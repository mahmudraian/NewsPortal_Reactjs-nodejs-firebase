import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftsidenav = () => {

    const [catagories,setCatagories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    })

    return (
        <div>
            {
                catagories.map(catagory=> <p key={catagory.id}>
                    <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Leftsidenav;