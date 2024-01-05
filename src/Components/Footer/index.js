import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

const Footer = () => (
    <div className="footer">      
            <p className="footer-text">
              © 2023 Library Management System
            </p>                  
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
         
    </div>
)

export default Footer;