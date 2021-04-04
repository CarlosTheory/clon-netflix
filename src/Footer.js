import React from 'react';
import './Footer.css';

function Footer({author, project_url}){
    return(
        <div className="footer">
            <span className="footer__credits">{`movify (Netflix Clon) - `}<a href={`${project_url}`} target="_blank">{`${author}`}</a></span>
        </div>
    );
}

export default Footer;