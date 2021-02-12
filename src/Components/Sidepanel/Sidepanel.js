import './Sidepanel.css';
import * as Icon from 'react-bootstrap-icons';

function Sidepanel() {
  return (
    <div className="Sidepanel">
      <h2>Hey there, I'm Patrice!</h2>
      <i>Let's start something together</i>
      <br/>
      <br/>

      <div style={{display: 'flex'}}>
        <Icon.FileEarmarkPersonFill/>
        <b>About me</b>
      </div>
      <p>
        I am a passionate full-time university student studying a Bachelors of Engineering in Software and a 
        Bachelors of Science in Applied Physics at the University of Technology in Sydney, Australia. I also work 
        full-time as a full stack Software Developer at an educational B2B (business to business) company. Working 
        as a full stack developer allows me to tackle technical and ethical issues regarding the creation of 
        user-facing software and changes to all aspects a given product.
      </p>

      <div style={{display: 'flex'}}>
        <Icon.TrophyFill/>
        <b>My hobbies</b>
      </div>
      <ul>
        <li>Rocketry</li>
        <li>Software development</li>
        <li>Football</li>
        <li>Aviation</li>
      </ul>

      <div style={{display: 'flex'}}>
        <Icon.BriefcaseFill/>
        <b>My experience</b>
      </div>
      <p>
        Haven't filled this in yet... visit my Linkedin :)
      </p>

      <div style={{display: 'flex'}}>
        <Icon.Globe/>
        <b>Location</b>
      </div>
      <p>Sydney, Australia</p>
    </div>
  );
}

export default Sidepanel;
