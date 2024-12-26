'use client'

import type { FC } from 'react'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { IExperience } from '@/interfaces/modules/experience'
import { cn } from '@/lib/utils'

interface IExperienceProps {
  data: IExperience[]
}

const Experience: FC<IExperienceProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <div className={cn('h-full bg-black-100 px-10 py-10 lg:h-screen')}>
      <div className={cn('container flex h-full flex-col justify-center')}>
        <h1 className={cn('mb-5 text-4xl font-bold text-primary md:text-5xl')}>{t('experience')}</h1>

        <div className={cn('flex flex-col space-x-0 space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0')}>
          {data.map((work, index) => (
            <div key={index} className={cn('flex flex-col items-center md:flex-row md:space-x-8')}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'rounded-lg bg-primary/10 p-8 shadow-lg backdrop-blur-lg',
                  'max-w-lg text-center md:text-left',
                )}
              >
                <h1 className={cn('text-xl font-bold text-primary')}>{work.name}</h1>

                <div className={cn('mt-4 text-lg text-black-950')}>
                  <p className={cn('font-semibold')}>{work.position}</p>
                  <ul className={cn('mt-4 list-outside list-disc text-left text-sm text-black-950/80')}>
                    {work?.detail?.map((item: any, idx: string | number) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
