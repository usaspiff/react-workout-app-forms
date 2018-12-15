import React from 'react';

const Footer = () => {
    return (
        <div
            className='container-fluid'
            style={footerStyle}
        >
        <hr></hr>
            <p>copyright (c) 2018</p>
        </div>
    )
}

const footerStyle = {
    margin: '50px 10px 50px 10px'
}

export default Footer;