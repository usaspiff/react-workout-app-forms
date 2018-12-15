import React from 'react';

const Header = () => {
    return (
        <div
            className='container-fluid'
            style={headerStyle}
        >
        <h1>WORKOUT APP</h1>
        <hr></hr>
        </div>
    )
}

const headerStyle = {
    margin: '50px 10px 50px 10px'
}

export default Header;