"use client"

import { About } from './About'
import { Contact } from './Contact'
import { FirstPage } from '@/app/FirstPage'
import { Layout } from '@/layout/Layout'
import { PrismicProvider } from '@prismicio/react'
import { Project } from './Project'
import { Separator } from '@/components/ui/separator'
import { client } from "@/services/prismic"

export default function Home() {
  return (
    <PrismicProvider client={client}>
      <Layout>
        <main id="firstPage" className="xl:px-10 md:px-5 sm:px-4">
          <FirstPage />
          <Separator className='bg-white' />
          
          <About />
          <Separator className='bg-white' />
          
          <Project />
          <Separator className='bg-white' />

          <Contact />
        </main>
      </Layout>
    </PrismicProvider>
  )
}