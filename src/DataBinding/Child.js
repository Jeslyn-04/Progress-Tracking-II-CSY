import React from 'react';

export default function Child({gfgcolor,usercolor}){

    return(
        <div>
        <h1 style={{color:gfgcolor}}>Geek</h1>
        <h1 style={{color:usercolor}}>Geeks</h1>
        </div>
    );
}