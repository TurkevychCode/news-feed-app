import React from "react";

export default function Header({logOut}) {
    return (
        <div className='header'>
            <h1 className='header-title'>News feed</h1>
            <button className='btn-shine' onClick={logOut}><span>logOut</span></button>
        </div>
    );
}