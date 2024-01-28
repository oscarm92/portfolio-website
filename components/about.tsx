"use client";

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView('About'); 

  return <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175 }}
    id="about"
    >
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3 ">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Scinece & Software Enginnering </span>
        from UWB, I got my first job in tech as a {" "}
        <span className="font-medium">Operations Engineer</span>{" "}
        at Affirma Consulting. While I was there I used HTML, CSS, JavaScript and 
        C# to build ASP.NET web Apps. I also worked on internal tools written in C#. 
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am currently learning
        {" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Java, Python and SQL. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
    </p>
    <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing soccer, working out,
        playing video games, watching movies, and spending time with my son. I also enjoy{" "}
        <span className="font-medium">reading, drawing and learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Japansese</span>. 
    </p>
  </motion.section>        
}
