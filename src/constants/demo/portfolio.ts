import type { IPortfolio } from '@/interfaces/modules/portfolio'

export const portfoliosData = [
  {
    id: 1,
    name: 'TCG thailand',
    image: `/portfolio/tcg.png`,
    link: 'https://www.tcgthailand.com/',
    detail: '',
    github: null,
    tools: 'nuxt',
  },
  {
    id: 2,
    name: 'fan delivery',
    image: `/portfolio/fan.png`,
    link: 'https://fandelivery.net/',
    detail: '',
    github: null,
    tools: 'next',
  },
  {
    id: 3,
    name: 'jetlag',
    image: `/portfolio/jetlag.png`,
    link: 'https://www.jetlagapplication.com/',
    detail: '',
    github: null,
    tools: 'nuxt',
  },
  {
    id: 4,
    name: 'gameconnext',
    image: `/portfolio/gameconnext.png`,
    link: 'http://www.gameconnext.com/',
    detail: '',
    github: null,
    tools: 'nuxt',
  },
  {
    id: 5,
    name: 'calculator',
    image: `/portfolio/calculator.png`,
    link: 'https://calculator-app-main-flax-rho.vercel.app/',
    detail: '',
    github: 'https://github.com/chalobonDen/calculator-app-main',
    tools: 'next',
  },
] as IPortfolio[]
