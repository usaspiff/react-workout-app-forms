import React from 'react';

const Footer = () => {
    return (
      <div style={footerStyle}>
            <p style={{paddingTop: '50px'}}>Project by Nick Tchemitcheff<br /> 2019 <br />Check it out on <a href="https://github.com/usaspiff/workout-test-3"> Github</a >.</p>
      </div>
    );
}

const footerStyle = {
  margin: "110px 0px 50px 0px",
  borderTop: "1px solid #e9eaec",
  display: "flex",
  textAlign: 'center',
  justifyContent: "center",
};

export default Footer;