import { About } from './About'
import { FirstPage } from '@/app/FirstPage'
import { Layout } from '@/layout/Layout'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <Layout>
      <main id="firstPage" className="xl:px-10 md:px-5 sm:px-4">
        <FirstPage />
        <Separator className='bg-white' />
        <About />
        <Separator className='bg-white' />
      </main>
    </Layout>
  )
}
