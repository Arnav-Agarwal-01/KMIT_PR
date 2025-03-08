'use client';

import React from 'react';
import { motion, useScroll, useInView } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import VideoBackground from './components/VideoBackground';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { scrollY } = useScroll();
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: false, amount: 0.1 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setVisible(latest > 10);
    });
  }, [scrollY]);

  const navVariants = {
    hidden: { opacity: 0, x: 50 , y:50},
    visible: { opacity: 1, x: 20 , y:-120}
  };

  return (
    <>
      <VideoBackground />
      <motion.nav 
        className="navbar"
        variants={navVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="nav-content">
          <a href="#" className="nav-link">KMIT</a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#news" className="nav-link">News</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </motion.nav>

      <main className="min-h-screen relative z-10">
        <section className="hero-section min-h-screen">
          
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title bg-white text-black px-8 py-4 rounded-lg font-black text-5xl md:text-6xl shadow-lg">
              Public Relations KMIT
            </h1>
            <p className="hero-subtitle">
              Crafting Stories, Building Connections.
            </p>
            
            <motion.div 
              className="services-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div 
                className="service-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Media Relations</h3>
                <p>Strategically collaborating with media outlets to share KMIT&apos;s innovations, achievements, and impact on education and technology.</p>
              </motion.div>
              
              <motion.div 
                className="service-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Event Management</h3>
                <p>Creating memorable experiences through amazing events that showcase KMIT&apos;s vibrant community.</p>
              </motion.div>
              
              <motion.div 
                className="service-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>Digital Communications</h3>
                <p>Leveraging modern platforms to tell KMIT&apos;s story, engage with stakeholders, and build a strong online presence.</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary mr-4">Get in Touch</a>
              <a href="#about" className="btn btn-outline">Learn More</a>
            </motion.div>
          </motion.div>
        </section>

        <motion.section 
          id="about"
          className="section about-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-content">
            <h2 className="section-title">About Us</h2>
            <div className="about-grid">
              <div className="about-content">
                <p>Meet us, the Public Relations team of Keshav Memorial Institute Of Technology</p>
                <p>The bridge between the students and the college , and the thread which connects the college to the world</p>
                <button className="btn btn-primary" >Meet The Team</button>
              </div>
              <div className="about-image">
                <Image 
                  src="/image.png"
                  alt="About KMIT PR"
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="news"
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-content">
            <h2 className="section-title">Latest Events</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Codenovate-2024</h3>
                <p>KMIT Annual hackathon , attended by more than 500 people from across the region.</p>
              </div>
              <div className="service-card">
                <h3>Patang Utsav</h3>
                <p>The annual Sankranthi fest/celebration at KMIT celebrating the diverse and amazing cultute of this country</p>
              </div>
              <div className="service-card">
                <h3>Navras</h3>
                <p>The divine celebration of the great mother. Dandiya, Garba, Music, Devotion, anything you can ask for</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          id="events"
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="section-content">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>KMIT EVENING 2025</h3>
                <p>The most awaited and exciting event of KMIT. Workshops led by industry experts during the day and partying by night , we have it all</p>
              </div>
              <div className="service-card">
                <h3>Navras</h3>
                <p>Our Annual Dandiya night , where the fun is never ending</p>
              </div>
              <div className="service-card">
                <p>Don&apos;t miss out</p>
              </div>
            </div>
          </div>
        </motion.section>

        

        

        <motion.section className="section">
          <div className="section-content">
            <h2 className="section-title">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ...existing service items... */}
              {/* Add Learn More button at the bottom of each service item */}
              <div className="text-center mt-4">
                <Link href="/services" className="btn btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="section">
          <div className="section-content">
            <h2 className="section-title">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="sponsor-card">
                <Image 
                  src="/monster/image.png" // Update with actual image name from monster folder
                  alt="Monster Energy"
                  width={200}
                  height={100}
                  className="sponsor-image"
                  priority
                />
              </div>
              <div className="sponsor-card">
                <Image 
                  src="/vishal/image.png" // Update with actual image name from vishal folder
                  alt="Vishal"
                  width={200}
                  height={100}
                  className="sponsor-image"
                  priority
                />
              </div>
              <div className="sponsor-card">
                <Image 
                  src="/royal/image.png" // Update with actual image name from royal folder
                  alt="Royal"
                  width={200}
                  height={100}
                  className="sponsor-image"
                  priority
                />
              </div>
              <div className="sponsor-card">
                <Image 
                  src="/top/image.png" // Update with actual image name from top folder
                  alt="Top"
                  width={200}
                  height={100}
                  className="sponsor-image"
                  priority
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/sponsors" className="btn btn-primary">
                View All Sponsors
              </Link>
            </div>
          </div>
        </motion.section>

        <motion.section className="section">
          <div className="section-content">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-form">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea className="form-input" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button className="btn btn-primary">Send Message</button>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="btn btn-primary">
                View Full Contact Details
              </Link>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </>
  );
}