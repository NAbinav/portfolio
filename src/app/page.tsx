"use client";
import React from 'react'
import Intro from './intro';
import About from './about';
import Home from './home';
import Skills from './skills';
import Contact from './contact';
import { useEffect } from 'react';
const Page = () => {
  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0
    });
  }, []);
  return (
    
    <section style={{ height: '100dvh',width:"100%", justifyContent:"center", alignContent:"center",alignItems:"center"}}>
      <Intro></Intro>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </section>

    
  )
}

export default Page
