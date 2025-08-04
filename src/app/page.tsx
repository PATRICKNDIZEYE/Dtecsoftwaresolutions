'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, GraduationCap, BarChart2 } from 'lucide-react';
import { ReactNode } from 'react';
import { AboutSection } from './components/sections/AboutSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';

// Types
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  [key: string]: any;
}

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Components
const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border border-white/20 bg-transparent text-white hover:bg-white/5',
  } as const;

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-primary-500/30 transition-all duration-300 h-full"
  >
    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary-400" />
    </div>
    <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function Home() {
  const services: ServiceCardProps[] = [
    {
      icon: Code,
      title: 'Software Consultancy',
      description: 'Expert guidance to architect, develop, and scale your digital products with cutting-edge technologies.'
    },
    {
      icon: GraduationCap,
      title: 'Tech Training',
      description: 'Comprehensive training programs to upskill your team in the latest technologies and methodologies.'
    },
    {
      icon: BarChart2,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence, generate leads, and maximize your digital ROI.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 mb-6">
              INNOVATION AT ITS FINEST
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Transforming Ideas
              </span>
              <br />
              <span className="text-primary-400">Into Digital Reality</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              We deliver cutting-edge software solutions, comprehensive tech training, and data-driven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-950">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-mono mb-3 block">OUR SERVICES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-heading">
              Comprehensive Technology Solutions
            </h2>
            <div className="h-0.5 w-20 bg-gradient-to-r from-primary-500 to-transparent mx-auto mt-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how DTEC Software Solutions can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button variant="outline">
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 font-heading">DTEC</h3>
              <p className="text-gray-400 mb-4">
                Delivering innovative technology solutions to help businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                {['Software Development', 'Tech Training', 'Digital Marketing', 'Consulting'].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} DTEC Software Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
