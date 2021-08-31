import './Sidepanel.css';
import * as Icon from 'react-bootstrap-icons';

function Sidepanel() {
  return (
    <div className="Sidepanel">
      <div className="HomepageIcons" style={{display: 'flex'}}>
        <a className="ProfileLink" target="_blank" rel="noreferrer" href="https://github.com/pharapeti"><Icon.Github/></a>
        <a className="ProfileLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrice-harapeti-653288152/"><Icon.Linkedin/></a>
        <a className="ProfileLink" target="_blank" rel="noreferrer" href="mailto:patrice.harapeti@gmail.com"><Icon.Mailbox/></a>
      </div>

      <h2>Hey there, I'm Patrice!</h2>
      <i>Let's start something together</i>
      <br/>
      <br/>

      <div className="d-flex">
        <Icon.FileEarmarkPersonFill/>
        <b>About me</b>
      </div>
      <p>
        I am a passionate Full Stack Software Engineer developing Ground Station communication capabilities
        for satellite systems. I also study a Bachelors of Engineering in Software and a 
        Bachelors of Science in Applied Physics at the University of Technology in Sydney, Australia.
      </p>

      <div className="d-flex">
        <Icon.BriefcaseFill/>
        <b>My experience</b>
      </div>
      <p>
        Currently I work at <a 
          target="_blank"
          rel="noreferrer"
          href="https://www.inovor.com.au/">
          Inovor Technologies
        </a> as a Full Stack Software Engineer, specialising in developing Ground Station capabilities 
        for satellite systems. In this role, I am responsible for creating highly scalable and performant
        systems to manage complex communications systems. In my work, I aim to simplify the
        complexities of satellite communications by offerring Ground Station operators elegant and "dead simple"
        interfaces, through which they are able to operate a constellation of satellites with ease.
      </p>
      <p>
        In my previous role as a software engineer at <a 
          target="_blank"
          rel="noreferrer"
          href="https://studiosity.com">
          Studiosity
        </a>
        , I supported the development and testing of systems which allow students in APAC and EMEA educational
        institutions to gain access to study support 24/7.
      </p>
      <p>
        Working as a developer has allowed me to tackle technical and ethical issues regarding the creation of 
        user-facing software and has allowed me to architect turn key solutions to highly complex issues.
      </p>

      <div className="d-flex">
        <Icon.TrophyFill/>
        <b>My hobbies</b>
      </div>
      <ul>
        <li>High Powered Rocketry at the <a 
            target="_blank"
            rel="noreferrer"
            href="https://utsrocketry.com/">
            UTS Rocketry Team
          </a>
        </li>
        <li>Football representing <a 
            target="_blank"
            rel="noreferrer"
            href="https://araratfc.com.au/">
            Ararat FC
          </a>
        </li>
        <li>General Aviation. Check out my <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=wzER4kAn05g">
            first solo!
          </a>
        </li>
      </ul>

      <div className="d-flex">
        <Icon.Globe/>
        <b>Location</b>
      </div>
      <p>Australia</p>
    </div>
  );
}

export default Sidepanel;
