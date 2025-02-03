'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import PinScreen from '@/components/ui/PinScreen'
import LoadingScreen from '@/components/ui/LoadingScreen'
import Image from 'next/image'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAccess = () => {
    setIsLoading(true);
    // Show loading screen for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsAuthenticated(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <AnimatePresence>
        {!isAuthenticated && !isLoading && (
          <PinScreen onAccess={handleAccess} />
        )}
        {isLoading && <LoadingScreen />}
        {isAuthenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-8 sm:px-12 py-12 relative"
          >
            {/* LinkedIn Icon Button */}
            <motion.a
              href="https://www.linkedin.com/in/markczaj"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-4 right-8 sm:right-12 p-2 rounded-full 
                        bg-black/30 border border-white/20 backdrop-blur-lg hover:bg-black/50 
                        transition-all duration-200 group z-10"
            >
              <svg 
                className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            <div className="max-w-4xl mx-auto">
              {/* Profile Header */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 text-center relative"
              >
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-black/30 z-10"></div>
                  <Image
                    src="/images/profile.jpeg"
                    alt="Mark Czajkowski"
                    fill
                    className="object-cover filter hover:scale-110 transition-transform duration-500"
                    style={{
                      objectPosition: "center 30%"
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-light text-white mb-2">
                  Mark Czajkowski
                </h1>
                <div className="text-blue-400 font-light text-sm sm:text-base">
                  Full-time technology consultant, IT solution volunteer, living in DC metro, mastering my niche
                </div>
              </motion.div>

              {/* Resume Sections */}
              <div className="space-y-8">
                <motion.section 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <h2 className="text-2xl text-white mb-4 font-light">Professional Profile</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Seasoned IT professional with 15 years of experience building innovative and efficient solutions 
                    for critical Department of Defense (DoD) agencies. Based in the DC Metro area, specializing in 
                    SharePoint architecture, administration, and development for complex enterprise systems. 
                    Demonstrated expertise in delivering secure, compliant solutions that enhance operational 
                    efficiency. Passionate about leveraging technology to solve complex business challenges, while 
                    actively volunteering to help non-profits and small businesses establish their online presence.
                  </p>
                </motion.section>

                <motion.section 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <h2 className="text-2xl text-white mb-6 font-light">Experience</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="text-lg text-white">Technical Solutions Engineer / Senior Software Developer</h3>
                      <div className="text-blue-400 text-sm mb-2">U.S. Air Force Project • 2017-Present</div>
                      <p className="text-gray-300">
                        Leading SharePoint development and system integration for U.S. Air Force financial audits. 
                        Developing custom tools and automation solutions using SharePoint Framework (SPFx) and 
                        JavaScript/TypeScript. Managing multiple audit tools while ensuring DoD compliance and 
                        cybersecurity standards. Architecting scalable solutions for complex audit workflows.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="text-lg text-white">Owner</h3>
                      <div className="text-blue-400 text-sm mb-2">
                        <a 
                          href="http://markc.io" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-300 transition-colors"
                        >
                          MARKC.IO Technology Solutions
                        </a> • Present
                      </div>
                      <p className="text-gray-300">
                        Founded and operating a technology consultancy focused on empowering small and medium-sized 
                        businesses with strategic tech solutions. Providing comprehensive services including web 
                        application implementation, system integration, and ongoing technical support. Specializing 
                        in helping businesses leverage modern technology for improved efficiency, sales growth, and 
                        customer engagement through carefully selected, cost-effective solutions.
                      </p>
                    </div>

                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="text-lg text-white">Senior Consultant</h3>
                      <div className="text-blue-400 text-sm mb-2">Booz Allen Hamilton & SPP Tech, LLC • 2013-2017</div>
                      <p className="text-gray-300">
                        Spearheaded critical financial system audits across Navy to Office of Secretary of Defense (OSD) 
                        operations. Developed and implemented enterprise-wide audit tools that streamlined compliance 
                        processes across multiple defense agencies. Led cross-functional teams in creating integrated 
                        solutions that enhanced transparency and accountability in defense financial systems.
                      </p>
                    </div>

                    <div className="border-l-2 border-blue-500 pl-4">
                      <h3 className="text-lg text-white">Microsoft Support Engineer</h3>
                      <div className="text-blue-400 text-sm mb-2">Utopia Systems, Inc. • 2010-2013</div>
                      <p className="text-gray-300">
                        Providing expert-level support and backend administration for Microsoft 365 core systems 
                        through a certified service provider. Implementing and maintaining robust solutions for 
                        enterprise clients, ensuring optimal system performance and security. Specializing in 
                        SharePoint, Exchange, and Azure AD infrastructure management while delivering top-tier 
                        technical support and system optimization.
                      </p>
                    </div>
                  </div>
                </motion.section>

                <motion.section 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <h2 className="text-2xl text-white mb-6 font-light">Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "SharePoint Online",
                      "JavaScript/TypeScript",
                      "SPFx Development",
                      "Full Stack Development",
                      "Cloud Solutions",
                      "System Architecture",
                      "REST APIs",
                      "React/Next.js",
                      "Python",
                      "Microsoft PowerBI",
                      "Windows/macOS/Ubuntu",
                      "jQuery",
                      "Atlassian Suite",
                      "AWS",
                      "DigitalOcean",
                      "WordPress",
                      "Office 365",
                      "Google Apps",
                      "Project Management",
                      "Business Analysis",
                      "Process Automation",
                      "Team Leadership",
                      "Solution Architecture",
                      "Technical Documentation"
                    ].map((skill) => (
                      <div key={skill} className="bg-black/30 p-3 rounded-lg text-center">
                        <span className="text-blue-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>

                <motion.section 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <h2 className="text-2xl text-white mb-6 font-light">Education</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg 
                        className="w-6 h-6 text-blue-400" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L1 8l11 6 9-4.91V17h2V7.5L12 2zm0 15c-3.87 0-7-1.34-7-3v3c0 1.66 3.13 3 7 3s7-1.34 7-3v-3c0 1.66-3.13 3-7 3z"/>
                      </svg>
                      <div>
                        <h3 className="text-lg text-white">Bachelor of Science, Management Information Systems</h3>
                        <div className="text-blue-400 text-sm">University of Delaware</div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                <motion.section 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <h2 className="text-2xl text-white mb-6 font-light">Connect</h2>
                  <div className="text-center">
                    <a 
                      href="https://www.linkedin.com/in/markczaj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black/30 border border-white/20 
                                text-blue-400 px-6 py-3 rounded-lg hover:bg-black/50 
                                transition-all duration-200 backdrop-blur-lg shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </motion.section>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}