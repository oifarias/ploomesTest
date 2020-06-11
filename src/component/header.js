import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
render()
{return(
 
    <header className="App-header">
     <div className="header-text">
       <Link to="/home">
       <img className="logo" src="https://www.ploomes.com/images/white_logo.png"></img>
       </Link>
     </div>
     </header>
     
);
}
}

export default Header