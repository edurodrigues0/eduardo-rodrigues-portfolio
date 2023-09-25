import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaCloudDownloadAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import Image from 'next/image'
import { LiaNodeJs } from "react-icons/lia"
import { RiReactjsLine } from "react-icons/ri"
import { Slider } from "@/components/ui/slider";

export function About() {
  const skills = [
    {
      id: 1,
      title: "React JS",
      description: "JavaScript library for building user interfaces.",
      icon: <RiReactjsLine size={24} color="#4082cc" />,
      dominance: 7,
    },
    {
      id: 2,
      title: "React Native",
      description: "Build native mobile apps using JavaScript and React",
      icon: <RiReactjsLine size={24} color="#2bd5f3" />,
      dominance: 1.5,
    },
    {
      id: 3,
      title: "Node",
      description: "JavaScript runtime for building scalable and real-time server applications.",
      icon: <LiaNodeJs size={24} color="#6cc24a" />,
      dominance: 3,
    }
  ]

  const socialLinks = [
    {
      id: 1,
      title: "Download CV",
      icon: <FaCloudDownloadAlt size={24} />
    },
    {
      id: 2,
      title: "Linkedin",
      icon: <FaLinkedin size={24} />
    },
    {
      id: 3,
      title: "Github",
      icon: <FaGithub size={24} />
    },
    {
      id: 4,
      title: "Instagram",
      icon: <FaInstagram size={24} />
    }
  ]
  
  return (
    <div id="about" className="p-10 w-full flex flex-col items-center justify-start">
      
      <h1 className="text-4xl max-md:text-2xl max-sm:text-lg mb-20">ABOUT ME</h1>
      
      <Image
        width={300}
        height={300}
        className="max-md:w-48 max-sm:w-36 rounded-full border-2 border-primary grayscale transition-all ease duration-500 hover:grayscale-0"
        src="https://github.com/edurodrigues0.png"
        alt="Picture of the user"
      />
      <p className="w-96 max-md:w-72 max-sm:w-60 mt-8">
        <span>Hello, I{"'"}m a Patrick</span>, web-developer based on Paris. I
        have rich experience in web site design & building and customization.
        Also I am good at{" "}
        <span>html, css, wordpress, php, jquery, bootstrap.</span>
      </p>
      
      <div className="flex gap-6 items-center flex-wrap max-md:justify-evenly max-sm:grid max-sm:grid-cols-2 max-md:gap-2 max-sm:gap-1 mt-8">
        {
          socialLinks.map((socialLink) => {
            return (
              <Button
                key={socialLink.id}
                variant="link"
                className="flex items-center gap-2 max-md:text-sm max-sm:text-xs"
              >
                {socialLink.icon}
                {socialLink.title}
              </Button>
            )
          })
        }
      </div>

      <h1 className="mt-12 max-sm:text-sm">
        <span className="text-primary">My</span> Skills
      </h1>
      <div className="mt-4 flex gap-4 max-md:w-full max-md:flex-col">
        {
          skills.map(skill => {
            return (
              <Card 
                key={skill.id}
                className="max-md:w-full"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skill.icon}
                    {skill.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-20">
                  <CardDescription className="w-60 max-md:w-full">
                    {skill.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Dominance:</span>
                  <Slider
                    disabled
                    max={10}
                    defaultValue={[skill.dominance]}
                  />
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}