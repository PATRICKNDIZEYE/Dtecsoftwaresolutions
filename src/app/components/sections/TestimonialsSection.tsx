'use client';

import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, User, Award } from 'lucide-react';
import { useState } from 'react';

type Category = 'development' | 'training' | 'marketing' | 'consulting';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  category: Category;
};

type ClientCard = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  category: Category;
  iconName: string;
};

const mainTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechNova',
    content: 'DTEC transformed our digital presence completely. Their team delivered beyond our expectations with their innovative solutions and attention to detail.',
    rating: 5,
    image: '/placeholder-avatar.jpg',
    category: 'development',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'InnoTech',
    content: 'The training program was exceptional. Our team is now more proficient in modern development practices thanks to DTEC\'s expert trainers.',
    rating: 5,
    image: '/placeholder-avatar.jpg',
    category: 'training',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    content: 'Their digital marketing strategies have significantly increased our online visibility and lead generation. Highly recommended!',
    rating: 5,
    image: '/placeholder-avatar.jpg',
    category: 'marketing',
  },
];

const clientCards: ClientCard[] = [
  {
    id: 1,
    name: 'David Kim',
    role: 'Product Manager',
    company: 'InnovateCorp',
    content: 'DTEC\'s development team delivered our mobile app ahead of schedule. The quality and performance exceeded all expectations.',
    rating: 5,
    category: 'development',
    iconName: 'Building2',
  },
  {
    id: 2,
    name: 'Lisa Wang',
    role: 'HR Director',
    company: 'FutureTech',
    content: 'The technical training program transformed our team\'s capabilities. We\'ve seen a 40% improvement in development efficiency.',
    rating: 5,
    category: 'training',
    iconName: 'User',
  },
  {
    id: 3,
    name: 'Alex Thompson',
    role: 'Founder',
    company: 'StartupHub',
    content: 'DTEC\'s digital marketing expertise helped us scale from 0 to 10,000 users in just 6 months. Incredible results!',
    rating: 5,
    category: 'marketing',
    iconName: 'Award',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    role: 'Operations Lead',
    company: 'ScaleUp Inc',
    content: 'Their strategic consulting helped us optimize our entire tech stack. ROI was evident within the first quarter.',
    rating: 5,
    category: 'consulting',
    iconName: 'Quote',
  },
];

const categoryColors: Record<Category, string> = {
  development: 'from-blue-500/20 to-cyan-500/20',
  training: 'from-green-500/20 to-emerald-500/20',
  marketing: 'from-purple-500/20 to-pink-500/20',
  consulting: 'from-orange-500/20 to-red-500/20',
};

const categoryBorders: Record<Category, string> = {
  development: 'border-blue-500/30',
  training: 'border-green-500/30',
  marketing: 'border-purple-500/30',
  consulting: 'border-orange-500/30',
};

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === mainTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mainTestimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = mainTestimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-950">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-mono mb-3 block">TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-heading">
            What Our <span className="text-primary-400">Clients Say</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-primary-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Main Featured Testimonial */}
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/5 relative overflow-hidden mb-16"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">
                  {currentTestimonial.name.charAt(0)}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < currentTestimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-700'
                  }`}
                />
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              &ldquo;{currentTestimonial.content}&rdquo;
            </blockquote>
            
            <div className="text-center">
              <p className="text-white font-medium">{currentTestimonial.name}</p>
              <p className="text-gray-400 text-sm">
                {currentTestimonial.role}, {currentTestimonial.company}
              </p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-1">
                {mainTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary-500 w-6' : 'bg-gray-700'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Client Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientCards.map((card, index) => {
            const getIconComponent = (iconName: string) => {
              switch (iconName) {
                case 'Building2':
                  return Building2;
                case 'User':
                  return User;
                case 'Award':
                  return Award;
                case 'Quote':
                  return Quote;
                default:
                  return Building2;
              }
            };
            const IconComponent = getIconComponent(card.iconName);
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border ${categoryBorders[card.category]} hover:bg-gray-900/50 transition-all duration-300 hover:scale-105`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[card.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < card.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-sm text-gray-300 mb-4 line-clamp-4">
                    &ldquo;{card.content}&rdquo;
                  </blockquote>
                  
                  {/* Author */}
                  <div className="border-t border-gray-800/50 pt-4">
                    <p className="text-white font-medium text-sm">{card.name}</p>
                    <p className="text-gray-400 text-xs">
                      {card.role}, {card.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
