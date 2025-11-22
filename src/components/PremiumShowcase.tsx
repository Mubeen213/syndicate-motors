import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const PremiumShowcase = () => {
  const premiumCars = [
    {
      id: 1,
      name: 'Fortuner',
      brand: 'Toyota',
      tagline: 'The Ultimate SUV',
      features: ['4WD Capability', 'Premium Interior', '7-Seater Luxury'],
      image: '/toyota-fortuner.png',
    },
    {
      id: 2,
      name: 'XUV700',
      brand: 'Mahindra',
      tagline: 'Tech-Loaded Powerhouse',
      features: ['Advanced Safety', 'Premium Features', 'Powerful Engine'],
      image: '/mahindra-xuv.png',
    },
    {
      id: 3,
      name: 'Innova Crysta',
      brand: 'Toyota',
      tagline: 'Family Comfort Redefined',
      features: ['Spacious Cabin', 'Reliable Performance', 'Premium MPV'],
      image: '/innova-crysta.png',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span>Premium Collection</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Luxury <span className="gradient-text">Vehicles</span> Showcase
          </h2>
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles that combine luxury, performance, and reliability
          </p>
        </motion.div>

        {/* Premium Cars Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {premiumCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative">
                {/* Premium Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-dark-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1 shadow-xl">
                    <Star size={16} className="fill-current" />
                    Premium
                  </div>
                </div>

                {/* Card */}
                <div className="card overflow-hidden h-full bg-gradient-to-br from-dark-800/80 to-dark-700/80 border-2 border-dark-600 hover:border-primary-500/50 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/10]">
                    <img 
                      src={car.image} 
                      alt={`${car.brand} ${car.name}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-primary-400 font-semibold text-sm mb-1">
                        {car.brand}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-dark-400 italic text-sm mt-1">
                        {car.tagline}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {car.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-dark-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-dark-600">
                      <a
                        href="tel:+919063582078"
                        className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full block text-center"
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-dark-300 mb-6">
            Interested in our premium collection? Get in touch with our team today!
          </p>
          <a href="tel:+919063582078" className="btn-primary inline-flex items-center gap-2">
            <Phone size={20} />
            Call for Premium Vehicles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Import Phone icon
import { Phone } from 'lucide-react';

export default PremiumShowcase;
