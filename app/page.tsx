import { AnimatedHeader, AnimatedHero, AnimatedFooter } from "@/components/animated-sections"

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#FDF4E7] to-white">
      <AnimatedHeader />
      <AnimatedHero />
      <AnimatedFooter />
    </div>
  )
}

