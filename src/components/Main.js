import React from 'react'
import Typewritter from './Typewritter';
import { FaYoutube,FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


export default function Main() {
  return (
    <>
    
    <section className='sec' id='HOME'>
    
        <div className="left">
            Hi,My Name Is <span>Ronak</span>
            <div>and I am </div>
            <span><Typewritter/></span>
            </div>
        <div className="right">
            <img src= {`${process.env.PUBLIC_URL}/images/myi.png`}  alt="RONAK" />
            
        </div>pmp
    </section>
    
     <hr />
    <section className="sec1" >
      <h1>EDUCATION</h1>
            <div className="edsec">
                 <div className="ed1 ed">
                  <h2>ECE B.TECH</h2>
                  <h3>2019-2023</h3>
                  <p className='pppp'>Successfully completed Bachelor's in Electronics and Communication Engineering with a commendable 8 CGPA, gaining comprehensive knowledge and skills in the field.</p>
                 </div>
                 <div className="ed2 ed">
                  <h2>SENIOR SEC EDUCATION</h2>
                  <h3>2017-2019</h3>
                  <p className='pp'>Achieved 70% in Senior Secondary education with a focus on Science and Mathematics, demonstrating strong academic performance and foundational understanding.</p>
                 </div>
                 <div className="ed3 ed">
                  <h2>SECONDARY EDUCATION</h2>
                  <h3>2017</h3>
                  <p className='ppp'> Secured a 7.4 CGPA in Secondary education, showcasing consistent academic excellence and a solid academic foundation for further pursuits.</p>
                 </div>
            </div>
    </section>
    <hr />
    <section className="sec2">
    <h1>SKILLS</h1>
    <div className="skcontent">
      <div className="sk">
        <h2>LANGUAGES</h2> 
        <br />
        <ul>
          <li> JAVASCRIPT</li>
          <li>REACT.JS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C</li>
          <li>SQL</li>
        </ul>

      </div>
      <div className="skimg">
      <h2>SOFTWARE AND APPLICATION</h2> 
        <br />
        <ul>
          <li> VISUAL CODE STUDIO</li>
          <li>GIT</li>
          <li>CAPCUT</li>
          <li>CANVA</li>
        </ul>
      </div>
    </div>
    </section>
    <hr />
    <section className="sec3">
    <h1>PROJECTS</h1>
         <div className="pcontent">
          < div className="p p1"> 
          <h2> TIC TAC TOE</h2> <br />
          <p>Experience classic fun with my Tic Tac Toe project Built using CSS, HTML, and JavaScript, it offers engaging gameplay for two players. Enjoy strategic moves and competitive thrills in this timeless game.</p><br />
          <a href="https://ronaklamba143.github.io/TIC-TAC-TOE/" target='blank'>CLICK HERE</a>
          </div>
          <div className="p p2">
          <h2> PORTFOLIO</h2> <br />
          <p>Explore my portfolio project crafted with CSS, HTML, and React JS. This dynamic showcase elegantly presents my skills, projects, and education, offering a glimpse into my creative journey and professional expertise.</p><br />
          <a href="https://ronaklamba143.github.io/Portfolio/" target='blank'>CLICK HERE</a>
          </div>
          </div>
    </section>    
    <hr />
<section className="sec4">
    <h1>WORK EXPERIENCE</h1>
      <div className="wecontent">
        <div className="sc">
          <h2>
            PLC DESIGNER INTERN 
          </h2>
              SCHNEIDER ELECTRIC <br />
          <p>During my 3-month internship at Schneider Electric, I honed my skills as a PLC designer. Immersed in real-world projects, I learned to design PLC systems, gaining invaluable hands-on experience and insights into industrial automation.</p>

        </div>
        <div className="vm">
        <h2>
            CONTENT INTERN 
          </h2>
              VENUE MONK <br />
          <p>During my 3-month internship at Venue Monk, I thrived as a content intern, editing over 160 videos and photos for our website. Through creative refinement, I contributed to enhancing our online presence.</p>

        </div>
      </div>
    </section>
    <hr />
    <footer>
          <div className="contact">CONTACT</div>
          <div className="f2">
            <div className="fo"> <CgMail className='gicon icon'/> <br /><a href="mailto:lambaronak22@gmail.com" className='gmail' target='blank'>GMAIL</a></div>
            <div className="fo"><FaLinkedin className='licon icon'/> <br /><a href="https://www.linkedin.com/in/ronak-l-888238241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='blank'>LINKEDIN</a></div>
            <div className="fo"><FaYoutube className='yicon icon'/> <br /><a href="https://youtube.com/@RonakLamba22?si=QnU_JKq2d-SwmayH" target='blank'>YOUTUBE</a></div>
            
            
          </div>
        </footer>
    </> 
  )
}


