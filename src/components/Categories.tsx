// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import indoorPlantsImg from '@/assets/indoor-plants.jpg';
// import outdoorPlantsImg from '@/assets/outdoor-plants.jpg';
// import succulentsImg from '@/assets/succulents.jpg';
// import floweringPlantsImg from '@/assets/flowering-plants.jpg';

// const Categories = () => {
//   const categories = [
//     {
//       id: 1,
//       name: 'Indoor Plants',
//       description: 'Perfect for homes and offices. Low-light friendly and air-purifying varieties.',
//       image: indoorPlantsImg,
//       count: '150+ varieties',
//       gradient: 'from-plant-green/20 to-plant-dark-green/20'
//     },
//     {
//       id: 2,
//       name: 'Outdoor Trees',
//       description: 'Majestic trees for landscaping and garden enhancement.',
//       image: outdoorPlantsImg,
//       count: '80+ varieties',
//       gradient: 'from-earth-brown/20 to-plant-green/20'
//     },
//     {
//       id: 3,
//       name: 'Succulents',
//       description: 'Low-maintenance beauties perfect for busy lifestyles.',
//       image: succulentsImg,
//       count: '120+ varieties',
//       gradient: 'from-accent/20 to-primary/20'
//     },
//     {
//       id: 4,
//       name: 'Flowering Plants',
//       description: 'Colorful blooms to brighten any space throughout the seasons.',
//       image: floweringPlantsImg,
//       count: '200+ varieties',
//       gradient: 'from-success/20 to-plant-light-green/20'
//     }
//   ];

//   return (
//     <section id="plants" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Plant <span className="text-transparent bg-gradient-forest bg-clip-text">Categories</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Discover our extensive collection of plants, carefully curated for every space and lifestyle
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <Card className="overflow-hidden bg-card border-border shadow-card-custom transition-all duration-500 hover:shadow-glow">
//                 <div className="relative h-48 overflow-hidden">
//                   <img 
//                     src={category.image} 
//                     alt={category.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
//                   <div className="absolute top-4 right-4">
//                     <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
//                       {category.count}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
//                     {category.name}
//                   </h3>
//                   <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
//                     {category.description}
//                   </p>
//                   <Button 
//                     variant="ghost" 
//                     className="group/btn p-0 h-auto text-primary hover:text-accent-foreground hover:bg-transparent"
//                   >
//                     Explore Collection
//                     <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
//                   </Button>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//           className="text-center mt-12"
//         >
//           <Button 
//             size="lg"
//             className="bg-gradient-forest hover:shadow-glow transition-all duration-500 px-8 py-4"
//           >
//             View All Plants
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Categories;

// -----------------------------------------


import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import indoorPlantsImg from '@/assets/indoor-plants.jpg';
import outdoorPlantsImg from '@/assets/outdoor-plants.jpg';
import succulentsImg from '@/assets/succulents.jpg';
import floweringPlantsImg from '@/assets/flowering-plants.jpg';


// Extra categories (for when "View All" is clicked)
import bonsaiImg from '@/assets/bonsai.jpg';
import herbsImg from '@/assets/herbs.jpg';
import cactusImg from '@/assets/cactus.jpg';
import climbersImg from '@/assets/climbers.jpg';

const Categories = () => {
  const allCategories = [
    {
      id: 1,
      name: 'Indoor Plants',
      description: 'Perfect for homes and offices. Low-light friendly and air-purifying varieties.',
      image: indoorPlantsImg,
      count: '150+ varieties',
      gradient: 'from-plant-green/20 to-plant-dark-green/20'
    },
    {
      id: 2,
      name: 'Outdoor Trees',
      description: 'Majestic trees for landscaping and garden enhancement.',
      image: outdoorPlantsImg,
      count: '80+ varieties',
      gradient: 'from-earth-brown/20 to-plant-green/20'
    },
    {
      id: 3,
      name: 'Succulents',
      description: 'Low-maintenance beauties perfect for busy lifestyles.',
      image: succulentsImg,
      count: '120+ varieties',
      gradient: 'from-accent/20 to-primary/20'
    },
    {
      id: 4,
      name: 'Flowering Plants',
      description: 'Colorful blooms to brighten any space throughout the seasons.',
      image: floweringPlantsImg,
      count: '200+ varieties',
      gradient: 'from-success/20 to-plant-light-green/20'
    },
    {
      id: 5,
      name: 'Bonsai',
      description: 'Miniature artistic trees to add elegance indoors.',
      image: bonsaiImg,
      count: '50+ varieties',
      gradient: 'from-indigo-500/20 to-green-500/20'
    },
    {
      id: 6,
      name: 'Herbs',
      description: 'Fresh herbs for your kitchen and medicinal uses.',
      image: herbsImg,
      count: '30+ varieties',
      gradient: 'from-green-400/20 to-lime-500/20'
    },
    {
      id: 7,
      name: 'Cactus',
      description: 'Hardy desert plants with unique shapes.',
      image: cactusImg,
      count: '70+ varieties',
      gradient: 'from-yellow-500/20 to-green-600/20'
    },
    {
      id: 8,
      name: 'Climbers',
      description: 'Perfect for vertical gardening and decoration.',
      image: climbersImg,
      count: '40+ varieties',
      gradient: 'from-purple-500/20 to-green-400/20'
    }
  ];

  // Show only first 4 initially
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll ? allCategories : allCategories.slice(0, 4);

  return (
    <section id="plants" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plant <span className="text-transparent bg-gradient-forest bg-clip-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of plants, carefully curated for every space and lifestyle
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card border-border shadow-card-custom transition-all duration-500 hover:shadow-glow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                      {category.count}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-accent-foreground hover:bg-transparent"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-forest hover:shadow-glow transition-all duration-500 px-8 py-4"
          >
            {showAll ? "Show Less" : "View All Plants"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
