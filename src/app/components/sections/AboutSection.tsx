'use client';

import { motion } from 'framer-motion';
import { Users, Target, BarChart4, Lightbulb } from 'lucide-react';

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-primary-500/30 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-3xl font-bold mb-2 font-heading">{value}</h3>
    <p className="text-gray-400">{label}</p>
  </motion.div>
);

export function AboutSection() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '50+',
      label: 'Satisfied Clients',
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: '100+',
      label: 'Projects Completed',
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      value: '90%',
      label: 'Success Rate',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      value: '24/7',
      label: 'Support Available',
    },
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <span className="text-primary-400 text-sm font-mono mb-3 inline-block">ABOUT US</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading">
                Pioneering The Future of <span className="text-primary-400">Digital Innovation</span>
              </h2>
              <div className="h-0.5 w-20 bg-gradient-to-r from-primary-500 to-transparent mb-8"></div>
              <p className="text-gray-400 mb-6">
                At DTEC Software Solutions, we&apos;re not just another tech company. We&apos;re a team of passionate innovators, 
                designers, and developers committed to delivering exceptional digital experiences that drive real business results.
              </p>
              <p className="text-gray-400 mb-8">
                With years of industry experience and a relentless focus on quality, we help businesses of all sizes 
                navigate the complex digital landscape and achieve their goals through cutting-edge technology solutions.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-white bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn More About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-w-16 aspect-h-9 bg-gray-900/50">
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-primary-400"
                      >
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-400">About DTEC Software Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
