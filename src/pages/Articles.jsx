import React, { useState } from 'react'
import { Link, } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { PagesContainer } from '../components/PagesContainer';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Highlight } from '../components/Highlight';


const Articles = () => {
    const [hovered, setHovered] = useState(null);

    const blogs = [
        {
            title: "How I learned git and github",
            slug: "HILGG",
            link: "https://ankur25.hashnode.dev/how-i-learned-git-and-github",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1670145491130/z-V8lDnI_.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            date: "Dec 4, 2022",
            description: "How I learned git and github, as they are one of the major tools any software engineer should learn"
        },
        {
            title: "Mastering the art of REST API's",
            slug: "MARA",
            link: "https://ankur25.hashnode.dev/mastering-the-art-of-rest-apis-a-complete-overview",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1689430852111/59df6c3c-66dd-47af-a8af-78081f552688.png?auto=compress,format&format=webp",
            date: "Aug 14, 2023",
            description: "In this we will be discussing all about the REST api's in depth. How they work behind the scenes etc"
        }
    ]

    return (
        <PagesContainer>
            <span className="text-4xl">📝</span>
            <Heading className="font-black pb-4">I write about technology</Heading>
            <Paragraph className="pb-10">
                Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
                fascinated by technology.
            </Paragraph>
            <div className="max-w-5xl mx-auto my-10">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={blog.slug}
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                        <Link
                            key={`blog-${blog.title}`}
                            href={blog.link}
                            target="_blank"
                            className="relative my-10 block"
                            onMouseEnter={() => setHovered(blog.slug)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <AnimatePresence mode="wait">
                                {hovered === blog.slug && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scaleX: 0.95,
                                            scaleY: 0.95,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scaleX: 1.05,
                                            scaleY: 1.2,
                                        }}
                                        exit={{
                                            opacity: 0,

                                            scaleX: 0.95,
                                            scaleY: 0.95,
                                        }}
                                        className="absolute z-0 pointer-events-none bg-gray-900 inset-0 h-full w-full   rounded-md "
                                    />
                                )}
                            </AnimatePresence>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
                                <img
                                    src={blog.image}
                                    alt="thumbnail"
                                    height="200"
                                    width="200"
                                    className="rounded-md object-cover h-40 w-60"
                                />
                                <div className="flex flex-col col-span-3">
                                    <Heading className="text-lg md:text-lg lg:text-lg">
                                        {blog.title}
                                    </Heading>
                                    <Paragraph className="text-sm md:text-sm lg:text-sm mt-2">
                                        {blog.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </PagesContainer>
    );

}

export default Articles
