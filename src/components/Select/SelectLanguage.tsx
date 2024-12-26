// 'use client'

import i18n from 'i18next'
import { useRouter } from 'next/navigation'

import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../Base/Select'
import FlagEN from '@/assets/sprite/svg/language/en.svg?sprite'
import FlagTH from '@/assets/sprite/svg/language/th.svg?sprite'
import { Language } from '@/enums/language'
import { cn } from '@/lib/utils'

interface SelectLanguageProps {}

const SelectLanguage = ({}: SelectLanguageProps) => {
  const currentLanguage = i18n.resolvedLanguage
  const router = useRouter()

  const options = [
    { value: Language.EN, label: 'EN', flag: <FlagEN className={cn('square-6')} /> },
    { value: Language.TH, label: 'TH', flag: <FlagTH className={cn('square-6')} /> },
  ]

  const onChangeLanguage = (lang: Language) => {
    // eslint-disable-next-line import/no-named-as-default-member
    i18n.changeLanguage(lang)
    router.refresh()
  }

  return (
    <div>
      <div className={cn(`hidden space-x-1 md:flex`, 'hidden')}>
        <Select
          onValueChange={(value: Language) => onChangeLanguage(value as Language)}
          defaultValue={currentLanguage as Language}
        >
          <SelectTrigger className={cn('w-full rounded-md border px-3 py-2 text-sm', 'border-none shadow-none')}>
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem value={option.value} key={option.value}>
                <div className={cn('flex items-center space-x-2')}>
                  <div>{option.flag}</div>
                  <div>{option.label}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className={cn('block md:hidden')}>
        <div className={cn('flex items-center space-x-1', 'mb-4')} onClick={() => onChangeLanguage(Language.EN)}>
          <FlagEN className={cn('square-6')} /> <span className={cn('font-medium text-black-950')}>EN</span>
        </div>
        <div className={cn('flex items-center space-x-1')} onClick={() => onChangeLanguage(Language.TH)}>
          <FlagTH className={cn('square-6')} /> <span className={cn('font-medium text-black-950')}>TH</span>
        </div>
      </div>
    </div>
  )
}

export default SelectLanguage
