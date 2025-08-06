'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Twitter, Linkedin, Github } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary-400" />,
    title: 'Email Us',
    description: 'info@dtecsolutions.com',
    link: 'mailto:info@dtecsolutions.com',
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary-400" />,
    title: 'Visit Us',
    description: '123 Tech Street, Silicon Valley, CA 94025',
    link: 'https://maps.google.com',
  },
  {
    icon: <Phone className="w-6 h-6 text-primary-400" />,
    title: 'Call Us',
    description: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-mono mb-3 block">CONTACT US</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-heading">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-primary-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Let&apos;s Talk About Your Project</h3>
            <p className="text-gray-400">
              Have a project in mind or want to learn more about our services? 
              Fill out the form and our team will get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 p-3 bg-gray-900/50 rounded-lg group-hover:bg-primary-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-gray-400 group-hover:text-primary-400 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/dtecsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/10 transition-colors"
                  aria-label="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/dtecsoftwaresolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/dtecsoftwaresolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/10 transition-colors"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 bg-gray-800 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-600 text-black font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
