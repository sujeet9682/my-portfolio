import React from 'react'
import { Link, Router, } from 'react-router-dom';
import { PagesContainer } from "../components/PagesContainer";
import { Heading } from "../components/Heading";
import { Highlight } from "../components/Highlight";
import { Paragraph } from '../components/Paragraph';
import { Products } from "../components/Products";
import { TechStack } from "../components/TechStack";

const Home = () => {
  return (
    <PagesContainer>
      <span className="text-4xl">👋</span>
      <Heading className="font-black text-white">Hello there! I&apos;m Sujeet</Heading>
      <Paragraph className="max-w-xl mt-4 text-white">
        I&apos;m a full-stack developer that loves
        <Highlight>building projects</Highlight> 
      </Paragraph>

      <Heading className="font-black text-lg md:text-lg lg:text-lg text-white mt-20 mb-4">
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </PagesContainer>
  )
}

export default Home
