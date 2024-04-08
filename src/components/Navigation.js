import React from 'react'
import {Link} from 'react-scroll'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';
export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  
  const visibility = () => {
    setIsVisible(!isVisible);
  };  

  const handleClick = () => {
    setIsVisible(false); 
  };
  
  return (
    <>
    <nav className='nav'>
        <div className="logo">Ronak Portfolio</div>
        <div className="np">
            <ul>
               <li> <Link to="HOME" spy={true} smooth={true} offset={-80} duration={1000}>HOME</Link></li>
                <li> <Link to="sec1" spy={true} smooth={true} offset={-100} duration={1000}>EDUCATION</Link></li>
                <li> <Link to="sec2" spy={true} smooth={true} offset={-100} duration={1000}>SKILL</Link></li>
                <li> <Link to="sec3" spy={true} smooth={true} offset={-80} duration={1000}>PROJECTS</Link></li>
                <li> <Link to="sec4" spy={true} smooth={true} offset={-80} duration={1000}>WORK EXPERIENCE</Link></li>
                <li> <Link to="contact" spy={true} smooth={true} offset={-80} duration={1000}>CONTACT</Link></li>
            </ul>
            <div className="menu"><button onClick={visibility}><TiThMenu className='menul' /></button></div>
        </div>
        
    </nav>
    {isVisible &&<div style={{ display:'block'}} className="menus">
      
      <ul>
               <li> <Link to="HOME" spy={true} smooth={true} offset={-80} duration={1000}onClick={handleClick} >HOME</Link></li>
                <li> <Link to="sec1" spy={true} smooth={true} offset={-100} duration={1000} onClick={handleClick}>EDUCATION</Link></li>
                <li> <Link to="sec2" spy={true} smooth={true} offset={-100} duration={1000} onClick={handleClick} >SKILL</Link></li>
                <li> <Link to="sec3" spy={true} smooth={true} offset={-80} duration={1000} onClick={handleClick}>PROJECTS</Link></li>
                <li> <Link to="sec4" spy={true} smooth={true} offset={-80} duration={1000} onClick={handleClick}>WORK EXPERIENCE</Link></li>
                <li> <Link to="contact" spy={true} smooth={true} offset={-80} duration={1000} onClick={handleClick}>CONTACT</Link></li>
            </ul>
      </div>}
    </>
  )
}


