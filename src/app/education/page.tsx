'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

const EducationPage = () => {
  const { t } = useTranslation()

  return (
    <div className={cn('introduce-section h-screen')}>
      <div className={cn('flex h-full items-center justify-center')}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={cn('flex flex-col items-center px-10 md:flex-row md:space-x-8')}
        >
          {/* Card Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn('rounded-lg bg-white/75 p-8 shadow-lg backdrop-blur-lg', 'max-w-lg text-center md:text-left')}
          >
            {/* Title */}
            <h1 className={cn('text-4xl font-bold text-second md:text-5xl')}>{t('education')}</h1>

            {/* Education Details */}
            <div className={cn('mt-4 text-lg text-black-950')}>
              <p className={cn('text-xl font-semibold')}>{t('education-page.faculty')}</p>
              <p>{t('education-page.university')}</p>
              <p className={cn('text-black-950/75')}>{t('education-page.major')}</p>
              <p className={cn('mt-4 flex justify-end font-semibold text-second')}>GPA: 3.37</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default EducationPage
