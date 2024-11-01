import React from 'react'
import { Heading } from '../components/Heading';
import Quotes from '../components/Quotes';
import { AnimatePresence, motion } from "framer-motion";
import { Paragraph } from '../components/Paragraph';
import { PagesContainer } from '../components/PagesContainer';


const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1602727656148-fbf77651fbd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWElMjBnYXRlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1544164560-c70dbbe073cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhcHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <PagesContainer>
      <span className="text-4xl">💬</span>
      <Heading className="text-white">About Me</Heading>
      <Quotes />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10 text-white">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0, y: -50, rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 3 : -3,
              }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <img
                src={image}
                width={200}
                height={400}
                alt="about"
                className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
              />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl text-white">
          <Paragraph className=" mt-4">
            Hey there, I&apos;m  Sujeet - a passionate developer from India. <br /> Welcome to my corner of the
            digital world!
          </Paragraph>
          <Paragraph className=" mt-4">
            As a developer,I thrive on turning lines of code into functional and elegant solutions.
            My goal is to create extensive and scalable backend systems along with smooth UI</Paragraph>

          <Paragraph className=" mt-4">
            I know<em>{" "}JavaScript </em> along with technologies like
            <em>{" "}ReactJS, Spring Boot and MySQL.</em>
            <span>I am also comfortable in Spring concepts</span>.
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering appreciation for design.
          I believe that aesthetics and usability go hand in hand.
          My eye for awesome design ensures that every project I undertake
          looks stunning on the surface for that I use <em>{" "}Tailwind css</em>
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my insights, experiences, and
          creations with you. Whether you&apos;re a fellow developer seeking
          solutions, a fellow writer in search of inspiration, or simply someone
          who appreciates the finer aspects of design, there&apos;s something
          here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          if you are looking for someone with passion of coding and creating smooth UI, Hit me up.
          Thanks for reading this and navigating through my creation.
        </Paragraph>
      </div>
    </div>
    </PagesContainer >
  );
}

export default About
