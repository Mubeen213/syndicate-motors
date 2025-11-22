import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 90635 82078"],
      link: "tel:+919063582078",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Opp. HP Petrol Pump, Piller No 166",
        "Siva Nagar, Attapur, Upperpally",
        "Hyderabad, Telangana 500048",
      ],
      link: "https://maps.google.com/?q=Syndicate+Motors+Attapur+Hyderabad",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full filter blur-3xl"></div>

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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto">
            Visit our showroom in Attapur or reach out to us. We're here to help
            you find your perfect vehicle.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
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
                  <div
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-dark-300 text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.link && (
                    <a
                      href={info.link}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium mt-4 group/link"
                    >
                      {info.title == "Location"
                        ? "Get Directions"
                        : "Make a Call"}
                      <svg
                        className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
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
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Ready to Find Your Dream Car?
              </h3>
              <p className="text-primary-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Visit our Office or give us a call. Our expert team is ready to
                help you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919063582078"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=Syndicate+Motors+Attapur+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
