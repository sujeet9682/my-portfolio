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
      <Heading className="font-black">Hello there! I&apos;m Sujeet</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have been building scalable web apps that are performance optimised and stunning design for
        <Highlight>more than 2 years now</Highlight>
      </Paragraph>

      
      <Heading className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </PagesContainer>
  )
}

export default Home
