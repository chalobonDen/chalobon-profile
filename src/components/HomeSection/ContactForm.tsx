import { useState } from 'react'

import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/Base/Button'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/Base/Form'
import { Input } from '@/components/Base/Input'
import { Textarea } from '@/components/Base/Textarea'
import { cn } from '@/lib/utils'

type FormValues = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const { t } = useTranslation()

  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const onSubmit = (values: FormValues) => {
    setStatus('sending')

    // eslint-disable-next-line import/no-named-as-default-member
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      .then(() => {
        setStatus('success')
        form.reset()
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setStatus('error')
      })
  }

  return (
    <div className={cn('h-screen bg-second')}>
      <div className={cn('flex h-full w-screen items-center justify-center')}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn('mx-10 w-full max-w-xl space-y-6 rounded-md bg-white p-6 shadow-md')}
          >
            <h1 className={cn('text-2xl font-bold text-primary md:text-3xl lg:text-4xl')}>{t('contact.title')}</h1>

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.name')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('contact.yourName')} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.email')}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t('contact.yourEmail')} type="email" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('contact.message')}</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder={t('contact.yourMessage')} rows={4} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="primary" type="submit" disabled={status === 'sending'} className="w-full">
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </Button>

            {status === 'success' && <p className="text-center text-green-600">{t('contact.sent')}</p>}
            {status === 'error' && <p className="text-center text-red-600">{t('contact.error')}</p>}
          </form>
        </Form>
      </div>
    </div>
  )
}
