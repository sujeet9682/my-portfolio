import React from 'react'
import { PagesContainer } from '../components/PagesContainer';
import { Heading } from '../components/Heading';
import { Products } from '../components/Products';


const Projects = () => {
  return (
    <PagesContainer>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        What I&apos;ve been working on
      </Heading>

      <Products />
    </PagesContainer>
  )
}

export default Projects
