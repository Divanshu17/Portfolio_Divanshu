import React from 'react';
import Lottie from "lottie-react";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Photography2 from '../images/Photography2.png';
import coding1 from '../LottieFiles/coding1.json'

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hiii There!</h1>
          <h1>I'M <b>Divanshu Kachhawa</b></h1>
          <Typed/>
        </div>

        <Lottie 
          className="illustration" 
          animationData={coding1} 
          loop={true} 
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am passionate about transforming raw ideas into fully functional websites and applications that make a difference. The process of creating something meaningful that can impact people's lives excites me, and I strive to work on projects that challenge me as a developer and make me proud.<br/><br/>
            I am fluent in <b>C++</b> and have a working knowledge of <b>Python</b>. Currently, I’m diving deeper into the <b>MERN stack</b> by working on various projects that enhance my full-stack development skills.<br/><br/>
            In the near future, I plan to learn <b>Next.js</b>, <b>Three.js</b>, and <b>TypeScript</b> to further expand my expertise and take on more complex projects.<br/><br/>
            Apart from coding, I have a deep interest in <b>photography</b>, and I love capturing the beauty of the world through my lens. You can check out some of my photography work on my Instagram.
          </p>
        </div>

        <Tilt>
          <img className='Photography2' src={Photography2} alt="" style={{ width: '300px', height: 'auto' }} /> {/* Adjusted size here */}
        </Tilt>
      </div>
    </div>
  )
}

export default Home;
