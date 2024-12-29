import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Rss } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Mic className="h-6 w-6" />
            <span className="text-lg font-bold">Litti Chokha Podcast</span>
          </Link>
        </div>
      </header>

      {/* Coming Soon Section */}
      <section className="flex-grow flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#FDF4E7]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-[200px] h-[200px]">
              <Image
                alt="Traditional Bihari dish Litti Chokha with roasted wheat balls and mashed preparation"
                className="rounded-xl object-cover"
                src="/images/litti-chokha.jpg"
                fill
                priority
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Coming Soon
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Get ready to taste the culture and hear the stories of Bihar. Litti Chokha Podcast is cooking up something special for you!
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                  <Rss className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                Be the first to know when we launch. No spam, we promise!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
              © 2024 Litti Chokha Podcast. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              Started by{' '}
              <Link href="https://linktr.ee/mrbuddhu" className="text-orange-600 hover:underline">
                mrbuddhu
              </Link>
              {' '}and{' '}
              <Link href="https://linktr.ee/msbuddhu" className="text-orange-600 hover:underline">
                msbuddhu
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              Built with love at{' '}
              <Link href="https://www.sanganak.org" className="text-orange-600 hover:underline">
                Sanganak
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

