import type { FC } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import PortfolioCard from '@/components/Shared/PortfolioCard'
import type { IPortfolio } from '@/interfaces/modules/portfolio'
import { cn } from '@/lib/utils'

import 'swiper/css'
import 'swiper/css/pagination'

interface IPortfolioProps {
  data: IPortfolio[]
}
const Portfolio: FC<IPortfolioProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className={cn('h-full bg-primary px-10 py-10 lg:h-screen')}>
      <div className={cn('container flex h-full flex-col justify-center')}>
        <h1 className={cn('mb-5 text-4xl font-bold text-white md:text-5xl')}>{t('portfolio')}</h1>

        <div className={cn('relative overflow-visible', 'container main-space-x', 'hidden md:block')}>
          <div>
            <div
              className={cn(
                `swiper-prev swiper-button-prev`,
                'z-50 !h-10 !w-10 rounded-full',
                '!text-sm !text-white md:!left-5',
                '!top-[50%] bg-second',
              )}
            >
              <ChevronLeftIcon className={cn('text-white !square-6')} />
            </div>
            <div
              className={cn(
                `swiper-next swiper-button-next`,
                'z-50 !h-10 !w-10 rounded-full',
                '!text-sm !text-white md:!right-5',
                '!top-[50%] bg-second',
              )}
            >
              <ChevronRightIcon className={cn('text-white !square-6')} />
            </div>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={16}
            navigation={{
              nextEl: `.swiper-next`,
              prevEl: `.swiper-prev`,
            }}
            modules={[Navigation]}
          >
            {data.map((item, index) => (
              <SwiperSlide key={`item-${index}`} className={cn('min-h-[250px] min-w-[300px]')}>
                <PortfolioCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={cn('block md:hidden', 'scrollbar-hide flex space-x-2 overflow-y-hidden pr-4')}>
          {data.map((item, index) => (
            <div key={index} className={cn('ml-4', 'min-h-[250px] min-w-[300px]')}>
              <PortfolioCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
