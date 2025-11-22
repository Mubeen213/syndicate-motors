import { motion } from 'framer-motion';
import { Award, Users, Car, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Car,
      value: '200+',
      label: 'Premium Vehicles',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      value: '5000+',
      label: 'Happy Customers',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      value: '20+',
      label: 'Years Experience',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction Rate',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>
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
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Hyderabad's <span className="gradient-text">Trusted</span> Car Dealer
          </h2>
          <p className="text-dark-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At Syndicate Motors, we've been serving Hyderabad's automotive needs for over 20 years. 
            Located in Attapur, we specialize in premium pre-owned vehicles from India's most trusted brands. 
            Our commitment to quality, transparency, and customer satisfaction has made us a preferred choice 
            for thousands of happy customers across Telangana.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="card text-center hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Why Choose Syndicate Motors?
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Quality Assured',
                  description: 'Every vehicle undergoes rigorous inspection to ensure top quality and reliability.',
                },
                {
                  title: 'Transparent Pricing',
                  description: 'No hidden costs. We believe in honest, upfront pricing for all our vehicles.',
                },
                {
                  title: 'Expert Guidance',
                  description: 'Our experienced team helps you find the perfect vehicle that matches your needs and budget.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-dark-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Our Mission
            </h3>
            <p className="text-dark-300 leading-relaxed">
              To provide Hyderabad with access to premium, reliable vehicles at fair prices, 
              backed by exceptional customer service and complete transparency. We're not just 
              selling cars – we're building lasting relationships with our customers.
            </p>
            <div className="card bg-primary-500/10 border-primary-500/30">
              <p className="text-primary-300 italic">
                "Your satisfaction is our success. Every customer who drives away happy is a 
                testament to our commitment to excellence."
              </p>
              <p className="text-primary-400 font-semibold mt-3">- Syndicate Motors Team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
