import type { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { LuExternalLink } from 'react-icons/lu'

import { Card } from '../Base/Card'
import type { IPortfolio } from '@/interfaces/modules/portfolio'
import { cn } from '@/lib/utils'

interface IPortfolioCardProps {
  data: IPortfolio
}
const PortfolioCard: FC<IPortfolioCardProps> = ({ data }) => {
  return (
    <Card className={cn('rounded-xl')}>
      <Image src={data.image} alt={data.name} width={400} height={300} className={cn('rounded-t-xl')} />
      <div className={cn('relative flex flex-col items-center justify-center p-2')}>
        {data.github && (
          <Link href={data.github as string} target="_blank" className={cn('absolute right-2 top-2')}>
            <LuExternalLink className={cn('text-black-950 square-5')} />
          </Link>
        )}
        <Link href={data.link as string} target="_blank" className={cn('capitalize text-black-950 hover:underline')}>
          {data.name}
        </Link>
        <div className={cn('capitalize text-black-700')}>({data.tools})</div>
      </div>
    </Card>
  )
}

export default PortfolioCard
