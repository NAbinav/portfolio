"use client";
import React from 'react';
import Typed from 'typed.js';
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Web Devoloper','Student','UI/UX Designer','Competitive Coder'],
      typeSpeed: 150,
      backSpeed:160,
      backDelay:1000,
      showCursor: false,
      loop:true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <main className='hidden ov'>
      <div style={{ height: '100dvh',display:"flex", justifyContent:"center", alignContent:"center",alignItems:"center"}} className='hidden'>
          <p id="name">
            <span id="a">A</span>binav <br />Nagarajan
          </p>
          <p id="details" ref={el}></p>
          <a id='link'href="/Abinav N Resume.pdf.pdf" download><button id='but'>Download CV</button></a>
        </div>
    </main>
  )
}

export default Home
