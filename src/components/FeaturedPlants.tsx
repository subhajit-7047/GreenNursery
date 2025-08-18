import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import oakTreeImg from '@/assets/oak-tree.jpg';
import indoorPlantsImg from '@/assets/indoor-plants.jpg';
import succulentsImg from '@/assets/succulents.jpg';

const FeaturedPlants = () => {
  const plants = [
    {
      id: 1,
      name: 'Majestic Oak Tree',
      scientificName: 'Quercus robur',
      price: 299,
      originalPrice: 349,
      rating: 4.8,
      reviews: 124,
      image: oakTreeImg,
      badge: 'Best Seller',
      category: 'Outdoor',
      description: 'A stunning oak tree perfect for large gardens and landscaping projects.',
      features: ['Drought resistant', 'Fast growing', 'Wildlife friendly']
    },
    {
      id: 2,
      name: 'Monstera Deliciosa',
      scientificName: 'Monstera deliciosa',
      price: 45,
      originalPrice: 55,
      rating: 4.9,
      reviews: 89,
      image: indoorPlantsImg,
      badge: 'Most Popular',
      category: 'Indoor',
      description: 'Beautiful split-leaf philodendron, perfect for indoor decoration.',
      features: ['Air purifying', 'Low maintenance', 'Pet friendly']
    },
    {
      id: 3,
      name: 'Succulent Garden Mix',
      scientificName: 'Various species',
      price: 32,
      originalPrice: 40,
      rating: 4.7,
      reviews: 156,
      image: succulentsImg,
      badge: 'New Arrival',
      category: 'Succulent',
      description: 'A curated collection of colorful succulents in decorative pots.',
      features: ['Minimal water', 'Bright colors', 'Easy care']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-gradient-forest bg-clip-text">Plants</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked selections from our premium collection, loved by plant enthusiasts worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-border shadow-card-custom transition-all duration-500 hover:shadow-glow">
                <div className="relative overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground animate-pulse">
                      {plant.badge}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {plant.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {plant.name}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">
                        {plant.scientificName}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${plant.price}</div>
                      {plant.originalPrice && (
                        <div className="text-sm text-muted-foreground line-through">
                          ${plant.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(plant.rating) ? 'text-warning fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {plant.rating} ({plant.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {plant.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {plant.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-gradient-forest hover:shadow-glow transition-all duration-500"
                  >
                    Add to Cart
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
          >
            View All Featured Plants
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPlants;