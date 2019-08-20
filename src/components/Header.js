import React from 'react';

function Header() {
    return(
      <header style={headerStyle}>
          <h1>Productivity App</h1>
      </header>  
    );
}

const headerStyle = {
    backgroundColor: "#E63946",
    color: "#F1FAEE",
    textAlign: "center",
    padding: "5px"
}

export default Header;