'use client'

import { motion, AnimatePresence } from "framer-motion"
import { IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rss, Check, AlertCircle } from 'lucide-react'
import { useState } from "react"

export function AnimatedHeader() {
  return (
    <motion.header 
      className="border-b backdrop-blur-md bg-white/30 sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-orange-400/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/litti-chokha.jpg"
              alt="Litti Chokha Icon"
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </motion.div>
          <span className="text-lg font-bold bg-gradient-to-r from-orange-700 via-orange-500 to-orange-800 bg-clip-text text-transparent">
            Litti Chokha Podcast
          </span>
        </Link>
        <div className="flex gap-4">
          {[
            {
              icon: <IconBrandYoutube size={24} />,
              href: "https://www.youtube.com/@LittiChokhaPodcast",
              label: "YouTube",
              color: "hover:text-red-600"
            },
            {
              icon: <IconBrandInstagram size={24} />,
              href: "https://www.instagram.com/littichokhapodcast/",
              label: "Instagram",
              color: "hover:text-pink-600"
            }
          ].map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-700 transition-all ${link.color}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  )
}

export function AnimatedHero() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // For now, we'll simulate a successful subscription
      // In a real app, you'd send this to your backend/email service
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      // Store in localStorage as a simple solution
      const subscribers = JSON.parse(localStorage.getItem('litti-chokha-subscribers') || '[]')
      if (!subscribers.includes(email)) {
        subscribers.push(email)
        localStorage.setItem('litti-chokha-subscribers', JSON.stringify(subscribers))
      }
      
      setStatus('success')
      setMessage('Thanks! We\'ll notify you when we launch!')
      setEmail("")
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage("")
      }, 5000)
      
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="flex-grow flex items-center justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div 
            className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
            initial={{ scale: 0.8, opacity: 0, rotateY: 45 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-amber-500/20 rounded-2xl transform -rotate-6 scale-105" />
            <Image
              alt="Traditional Bihari dish Litti Chokha with roasted wheat balls and mashed preparation"
              className="rounded-2xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm"
              src="/images/litti-chokha.jpg"
              fill
              priority
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-800 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              Launching in 2025
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Get ready to taste the culture and hear the stories of Bihar. Litti Chokha Podcast is cooking up something special for you!
            </p>
          </motion.div>
          <motion.div 
            className="w-full max-w-sm space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <form className="flex space-x-2" onSubmit={handleSubmit}>
              <Input
                className="max-w-lg flex-1 bg-white/80 backdrop-blur-sm border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-orange-700 to-orange-600 hover:from-orange-800 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : status === 'success' ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <Rss className="mr-2 h-4 w-4" />
                )}
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Notify Me'}
              </Button>
            </form>
            
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-sm text-center p-2 rounded-md ${
                    status === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {status === 'success' ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                    {message}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <p className="text-xs text-gray-500 text-center">
              Be the first to know when we launch. No spam, we promise!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function AnimatedFooter() {
  return (
    <motion.footer 
      className="border-t py-6 md:py-0 backdrop-blur-md bg-gradient-to-b from-white/50 to-orange-50/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
            © 2025 Litti Chokha Podcast. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <motion.p 
            className="text-sm text-gray-600"
            whileHover={{ scale: 1.02 }}
          >
            Started by{' '}
            <Link href="https://linktr.ee/mrbuddhu" className="text-orange-700 hover:text-orange-800 hover:underline transition-colors">
              mrbuddhu
            </Link>
            {' '}and{' '}
            <Link href="https://linktr.ee/msbuddhu" className="text-orange-700 hover:text-orange-800 hover:underline transition-colors">
              msbuddhu
            </Link>
          </motion.p>
          <motion.p 
            className="text-sm text-gray-600"
            whileHover={{ scale: 1.02 }}
          >
            Built with love at{' '}
            <Link href="https://www.sanganak.org" className="text-orange-700 hover:text-orange-800 hover:underline transition-colors">
              Sanganak
            </Link>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
} 