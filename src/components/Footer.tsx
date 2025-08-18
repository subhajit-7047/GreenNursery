import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Plants', href: '#plants' },
        { name: 'Trees', href: '#trees' },
        { name: 'Care Guide', href: '#care' },
        { name: 'About Us', href: '#about' }
      ]
    },
    {
      title: 'Categories',
      links: [
        { name: 'Indoor Plants', href: '#indoor' },
        { name: 'Outdoor Trees', href: '#outdoor' },
        { name: 'Succulents', href: '#succulents' },
        { name: 'Flowering Plants', href: '#flowers' },
        { name: 'Herbs & Vegetables', href: '#herbs' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Plant Care Tips', href: '#tips' },
        { name: 'Shipping Info', href: '#shipping' },
        { name: 'Return Policy', href: '#returns' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact Support', href: '#support' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with <span className="text-transparent bg-gradient-forest bg-clip-text">Green Tips</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive plant care tips, new arrivals, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="flex-1 bg-background border-border focus:ring-primary"
            />
            <Button className="bg-gradient-forest hover:shadow-glow transition-all duration-500">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-forest rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">GreenNursery</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner in creating beautiful, healthy green spaces. 
              From indoor plants to majestic outdoor trees, we provide quality plants 
              with expert care guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Garden Street, Green Valley, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-PLANT</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@greennursery.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 GreenNursery. All rights reserved. Made with 🌱 for plant lovers.
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full bg-muted text-muted-foreground transition-all duration-300 ${social.color}`}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;