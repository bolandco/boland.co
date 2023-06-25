import About from '@/components/about/about'
import Intro from '@/components/intro'
import Marquee from '@/components/marquee/marquee'
import Pricing from '@/components/pricing/pricing'

export const metadata = {
  title: 'Boland Co.',
  description: 'an indie web studio.',
}

export default function Home() {
  return (
    <main className="w-screen space-y-24">
      <Intro />
      <Marquee />
      <Pricing />
      <About />
    </main>
  )
}
