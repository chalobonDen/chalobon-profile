'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '@/lib/utils'
const ExperiencePage = () => {
  const { t } = useTranslation()

  const workExperience = [
    {
      name: 'Owl day house Co.',
      position: 'Front-end developer',
      detail: [
        `Developed and maintained e-commerce web applications using Next.js Next.ts and Nuxt.js.`,
        `Developed and maintained applications using React Native.`,
        `Collaborated with back-end developers to integrate APIs and resolve project issues.`,
      ],
    },
    {
      name: 'Aritisan Digital',
      position: 'Front-end developer (Intern)',
      detail: [`Developed an internal web application for organizational task management using Vue.js and Ant Design.`],
    },
    {
      name: 'Med CMU operation and data management center',
      position: 'Data Administrator (Intern)',
      detail: [
        `Processed raw data from Maharaj Nakorn Chiang Mai Hospital's patient record system by cleaning and preparing the data for analysis.`,
        `Created visualizations to present surgical KPIs using Qlik Sense, identifying key data connections and insights.`,
      ],
    },
  ]

  return (
    <div className={cn('introduce-section h-screen px-10')}>
      <div className={cn('container flex h-full flex-col justify-center')}>
        <h1 className={cn('mt-14 text-4xl font-bold text-white md:text-5xl')}>{t('experience')}</h1>

        <Swiper
          modules={[Pagination]}
          pagination={false}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="w-full max-w-5xl"
        >
          {workExperience.map((work, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className={cn('flex flex-col items-center p-5 md:flex-row md:space-x-8')}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'rounded-lg bg-white/20 p-8 shadow-lg backdrop-blur-lg',
                    'max-w-lg text-center md:text-left',
                  )}
                >
                  <h1 className={cn('text-2xl font-bold text-white md:text-3xl')}>{work.name}</h1>

                  <div className={cn('mt-4 text-lg text-black-950')}>
                    <p className={cn('text-xl font-semibold')}>{work.position}</p>
                    <ul className={cn('mt-4 list-outside list-disc text-left text-black-950/80')}>
                      {work.detail.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ExperiencePage
