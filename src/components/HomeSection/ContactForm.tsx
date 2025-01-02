import { useState } from 'react'

import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

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
            className="mx-10 max-w-md space-y-6 rounded-md bg-white p-6 shadow-md"
          >
            <h1 className={cn('text-2xl font-bold text-primary md:text-3xl lg:text-4xl')}>Send me a message</h1>

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your Name" required />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your Email" type="email" required />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Your Message" rows={4} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="primary" type="submit" disabled={status === 'sending'} className="w-full">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && <p className="text-center text-green-600">Message sent successfully!</p>}
            {status === 'error' && <p className="text-center text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </Form>
      </div>
    </div>
  )
}
