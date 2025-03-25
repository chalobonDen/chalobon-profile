'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { BiLogoTypescript, BiLogoJavascript, BiPhone } from 'react-icons/bi'
import { FaGithub, FaGitlab, FaReact } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoVue } from 'react-icons/io5'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiNuxtdotjs } from 'react-icons/si'

import ContactForm from '@/components/HomeSection/ContactForm'
import Education from '@/components/HomeSection/Education'
import Experience from '@/components/HomeSection/Experience'
import Portfolio from '@/components/HomeSection/Portfolio'
import { portfoliosData } from '@/constants/demo/portfolio'
import type { IExperience } from '@/interfaces/modules/experience'
import type { IPortfolio } from '@/interfaces/modules/portfolio'
import workExperience from '@/jsons/experience.json'
import { cn } from '@/lib/utils'

export default function Home() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  const skills = [
    { Icon: FaReact, name: 'React' },
    { Icon: IoLogoVue, name: 'Vue' },
    { Icon: RiNextjsFill, name: 'Next.js' },
    { Icon: SiNuxtdotjs, name: 'Nuxt.js' },
    { Icon: BiLogoTypescript, name: 'TypeScript' },
    { Icon: BiLogoJavascript, name: 'JavaScript' },
    { Icon: RiTailwindCssFill, name: 'Tailwind CSS' },
  ]

  const contact = [
    { Icon: BiPhone, name: '0632529590', link: undefined },
    { Icon: HiOutlineMail, name: 'chalobon0815@gmail.com', link: undefined },
    { Icon: FaGithub, name: 'chalobonDen', link: 'https://github.com/chalobonDen' },
    { Icon: FaGitlab, name: 'chalobon129', link: 'https://gitlab.com/chalobon129' },
  ]

  return (
    <div>
      {/* section 1 */}
      <div
        id="home"
        className={cn('flex h-screen items-center justify-center', 'introduce-section')}
        // style={{
        //   filter: `blur(0px)`,
        //   transform: `translateY(${offset * 0.25}px)`,
        // }}
      >
        <div className={cn('flex flex-col items-center md:flex-row md:space-x-6', 'px-10')}>
          <div className="text-center md:text-left">
            <div className={cn('text-3xl font-medium text-second md:text-4xl')}>Frontend Developer</div>
            <div className={cn('mt-2 w-full text-sm font-light text-white md:w-[310px]')}>
              {`I'm a middle-level Frontend
              Developer skilled in React, Next.js, and
              TypeScript. I have experience building
              e-commerce and marketplace
              platforms, as well as leading PoC
              projects to evaluate and select
              libraries for scalable solutions.`}
            </div>
          </div>
          <div className={cn('relative')}>
            <div
              className={cn(
                'mt-6 rounded-full border border-white square-48 md:mt-0 md:square-64',
                'absolute -left-5 top-0',
              )}
            />
            <Image
              src="/images/my-profile-3.JPG"
              alt="profile"
              priority
              width={800}
              height={800}
              quality={100}
              className={cn('mt-6 rounded-full object-cover square-48 md:mt-0 md:square-64')}
            />
            <div
              className={cn(
                'mt-6 rounded-full border border-white square-48 md:mt-0 md:square-64',
                'absolute left-5 top-0',
              )}
            />
          </div>
        </div>
      </div>

      <div id="skill" className={cn('flex h-screen flex-col items-center justify-center bg-black-100 px-10')}>
        <div className={cn('text-3xl font-medium text-primary md:text-4xl')}>Frontend Skill</div>
        <div className={cn('flex flex-wrap')}>
          {skills.map(({ Icon, name }, index) => (
            <div key={index} className="group relative mt-10 px-4">
              <Icon className={cn('text-primary square-10')} />
              <span className="absolute left-1/2 top-full mt-2 w-max -translate-x-1/2 scale-0 rounded-md bg-second px-2 py-1 text-sm text-white transition-all duration-300 group-hover:scale-100">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="portfolio">
        <Portfolio data={portfoliosData as IPortfolio[]} />
      </div>

      <div id="experience">
        <Experience data={workExperience as IExperience[]} />
      </div>

      <div id="experience">
        <ContactForm />
      </div>

      <div className={cn('flex h-80 flex-col items-center justify-center space-y-4 bg-primary')}>
        <div className={cn('text-3xl font-medium text-second md:text-4xl')}>My Contact</div>
        <div className={cn('flex flex-col font-light text-white')}>
          {contact.map(({ Icon, name, link }, index) => (
            <div key={index} className={cn('mb-2 flex space-x-2')}>
              <Icon className={cn('square-5')} />
              {link ? (
                <Link target="_blank" href={link}>
                  {name}
                </Link>
              ) : (
                <div>{name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
