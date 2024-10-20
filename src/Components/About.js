import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Divanshu Kachhawa</b> and I am from India. 
            I'm a passionate <b>Full Stack Developer</b> and currently pursuing my <b>BTech in CSE</b> from <b>JK Lakshmipat University</b>. <br/><br/>
            I have a deep interest in building innovative and functional web applications. Whether it's working on the frontend or backend, I enjoy creating seamless, user-friendly experiences. You can check out some of my work in the projects section.<br/><br/>
            I'm <b>open</b> to new opportunities, collaborations, or projects where I can contribute and expand my skills. Feel free to reach out, my contact details are in the footer.<br/>
            Besides coding, photography is one of my favorite hobbies. You can explore some of my captures here on <a href="https://www.instagram.com/_divanshuuu_/profilecard/?igsh=d3cwZ3k1dXdhaG5t" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
   
    <ul>
        <li><b>Programming Languages:</b> C, C++, Java, Python, Solidity</li>
        <li><b>Web Technologies:</b> HTML, CSS, JavaScript, React, Vue.js, Bootstrap, Tailwind CSS, Express.js</li>
        <li><b>Databases:</b> MySQL, MongoDB</li>
        <li><b>Data Science:</b> Data analysis, statistics (Python libraries: Numpy, Pandas, Matplotlib)</li>
        <li><b>Tools & Frameworks:</b> Node.js, Git, Docker, Figma</li>
        <li><b>Content Creation:</b> Social Media Content Creation, Graphic Design, Video Editing</li>
        <li><b>Other Skills:</b>RESTful APIs, Microservices Architecture</li>
    </ul>
</div>

    </>
  );
};

export default About;
