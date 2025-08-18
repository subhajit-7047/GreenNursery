import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, TreePine } from 'lucide-react';
import heroImage from '@/assets/hero-nursery.jpg';
import Plant3D from './Plant3D';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Plant Nursery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30"></div>
      </div>

      {/* Floating 3D Plant */}
      <div className="absolute top-1/4 right-10 z-10 w-40 h-40 hidden lg:block">
        <Plant3D />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-2 text-primary"
            >
              <Leaf className="h-6 w-6 animate-leaf-sway" />
              <span className="text-lg font-medium">Premium Plant Nursery</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Grow Your
              <span className="block text-transparent bg-gradient-forest bg-clip-text">
                Green Paradise
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Transform your space with our premium collection of indoor plants, outdoor trees, 
              and exotic species. Expert care tips and professional guidance included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button 
                size="lg" 
                className="group bg-gradient-forest hover:shadow-glow transition-all duration-500 px-8 py-4 text-lg"
              >
                Explore Plants
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg transition-all duration-300"
              >
                <TreePine className="mr-2 h-5 w-5" />
                Care Guide
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Plant Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-glow rounded-full opacity-30 hidden md:block"
      />
      
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -3, 0] 
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-glow rounded-full opacity-20 hidden md:block"
      />
    </section>
  );
};

export default Hero;