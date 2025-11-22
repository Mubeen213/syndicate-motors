import { motion } from 'framer-motion';
import { Headphones, FileCheck, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock customer support to assist you whenever you need help with your vehicle needs.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FileCheck,
      title: 'Easy Documentation',
      description: 'Streamlined paperwork process with digital documentation for your convenience and faster processing.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Trade-In Program',
      description: 'Get the best value for your current vehicle with our competitive trade-in offers and instant evaluation.',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-700/5 rounded-full filter blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm md:text-base uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto">
            Experience excellence with our comprehensive range of automotive services designed for your convenience
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card h-full hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium group/link"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Ready to Find Your Perfect Car?
              </h3>
              <p className="text-primary-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Let our expert team help you discover the vehicle that matches your lifestyle and budget
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919063582078" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Call Now
                </a>
                {/* <a href="mailto:info@syndicatemotors.com" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  Email Us
                </a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
