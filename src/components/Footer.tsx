import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
    ],
    services: [
      { name: 'Buy a Car', href: '#inventory' },
      { name: 'Sell Your Car', href: '#sell' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Privacy Policy', href: '#privacy' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SM</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold gradient-text">
                    Syndicate Motors
                  </h3>
                  <p className="text-xs text-dark-400">Premium Car Dealership</p>
                </div>
              </div>
              <p className="text-dark-300 mb-6 leading-relaxed">
                Your trusted partner in finding the perfect vehicle. Experience excellence in automotive retail with premium brands and exceptional service.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+919063582078" className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors group">
                  <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Phone size={18} className="group-hover:text-primary-400" />
                  </div>
                  <span>+91 90635 82078</span>
                </a>
                {/* <a href="mailto:info@syndicatemotors.com" className="flex items-center space-x-3 text-dark-300 hover:text-primary-400 transition-colors group">
                  <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Mail size={18} className="group-hover:text-primary-400" />
                  </div>
                  <span>info@syndicatemotors.com</span>
                </a> */}
                <div className="flex items-start space-x-3 text-dark-300">
                  <div className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span>Opp. HP Petrol Pump, Piller No 166, Siva Nagar, Attapur, Upperpally, Hyderabad, Telangana 500048</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Bottom Footer */}
        <div className="border-t border-dark-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-400 text-sm text-center md:text-left">
              © {currentYear} Syndicate Motors. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
