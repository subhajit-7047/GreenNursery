// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { 
//   Droplets, 
//   Sun, 
//   Thermometer, 
//   Scissors, 
//   Heart, 
//   AlertCircle,
//   CheckCircle
// } from 'lucide-react';

// const PlantCareGuide = () => {
//   const careCategories = [
//     {
//       icon: Droplets,
//       title: 'Watering',
//       color: 'text-blue-500',
//       bgColor: 'bg-blue-500/10',
//       tips: [
//         'Check soil moisture before watering',
//         'Water thoroughly but allow drainage',
//         'Most plants need less water in winter',
//         'Use filtered or distilled water when possible'
//       ]
//     },
//     {
//       icon: Sun,
//       title: 'Lighting',
//       color: 'text-yellow-500',
//       bgColor: 'bg-yellow-500/10',
//       tips: [
//         'Rotate plants weekly for even growth',
//         'Most houseplants prefer bright, indirect light',
//         'Adjust distance from windows seasonally',
//         'Consider grow lights for low-light areas'
//       ]
//     },
//     {
//       icon: Thermometer,
//       title: 'Temperature',
//       color: 'text-orange-500',
//       bgColor: 'bg-orange-500/10',
//       tips: [
//         'Most plants prefer 65-75°F (18-24°C)',
//         'Avoid sudden temperature changes',
//         'Keep plants away from heating/cooling vents',
//         'Increase humidity in dry environments'
//       ]
//     },
//     {
//       icon: Scissors,
//       title: 'Pruning',
//       color: 'text-primary',
//       bgColor: 'bg-primary/10',
//       tips: [
//         'Remove dead or yellowing leaves promptly',
//         'Prune in spring for best growth',
//         'Use clean, sharp tools to prevent disease',
//         'Pinch growth tips to encourage bushiness'
//       ]
//     }
//   ];

//   const commonIssues = [
//     {
//       issue: 'Yellow Leaves',
//       causes: ['Overwatering', 'Poor drainage', 'Natural aging'],
//       solution: 'Check soil moisture and improve drainage',
//       severity: 'medium'
//     },
//     {
//       issue: 'Brown Tips',
//       causes: ['Low humidity', 'Fluoride in water', 'Overfertilization'],
//       solution: 'Increase humidity and use filtered water',
//       severity: 'low'
//     },
//     {
//       issue: 'Dropping Leaves',
//       causes: ['Stress from moving', 'Temperature changes', 'Overwatering'],
//       solution: 'Maintain consistent environment and care routine',
//       severity: 'high'
//     }
//   ];

//   return (
//     <section id="care" className="py-20 bg-muted/20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Plant <span className="text-transparent bg-gradient-forest bg-clip-text">Care Guide</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Master the art of plant care with our expert tips and troubleshooting guide
//           </p>
//         </motion.div>

//         {/* Care Categories */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//           {careCategories.map((category, index) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               whileHover={{ y: -5 }}
//             >
//               <Card className="p-6 bg-card border-border shadow-card-custom hover:shadow-glow transition-all duration-300">
//                 <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
//                   <category.icon className={`h-6 w-6 ${category.color}`} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-foreground">{category.title}</h3>
//                 <ul className="space-y-2">
//                   {category.tips.map((tip, tipIndex) => (
//                     <li key={tipIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
//                       <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
//                       <span>{tip}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Common Issues */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-3xl font-bold text-center mb-8">
//             Common <span className="text-transparent bg-gradient-forest bg-clip-text">Issues</span> & Solutions
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {commonIssues.map((item, index) => (
//               <motion.div
//                 key={item.issue}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//               >
//                 <Card className="p-6 bg-card border-border shadow-card-custom hover:shadow-glow transition-all duration-300">
//                   <div className="flex items-center justify-between mb-4">
//                     <h4 className="text-lg font-semibold text-foreground">{item.issue}</h4>
//                     <Badge 
//                       variant={item.severity === 'high' ? 'destructive' : item.severity === 'medium' ? 'default' : 'secondary'}
//                     >
//                       {item.severity}
//                     </Badge>
//                   </div>
                  
//                   <div className="mb-4">
//                     <p className="text-sm font-medium text-muted-foreground mb-2">Common Causes:</p>
//                     <ul className="space-y-1">
//                       {item.causes.map((cause, causeIndex) => (
//                         <li key={causeIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
//                           <AlertCircle className="h-3 w-3 text-warning" />
//                           <span>{cause}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="p-3 bg-success/10 rounded-lg border border-success/20">
//                     <p className="text-sm font-medium text-success mb-1">Solution:</p>
//                     <p className="text-sm text-foreground">{item.solution}</p>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Pro Tips */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <Card className="p-8 bg-gradient-forest/5 border-primary/20 max-w-4xl mx-auto">
//             <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-glow-pulse" />
//             <h3 className="text-2xl font-bold text-foreground mb-4">Pro Tip</h3>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               "The key to successful plant parenting is consistency and observation. 
//               Spend a few minutes each day checking on your plants - they'll tell you what they need!"
//             </p>
//             <div className="mt-4 text-sm text-primary font-medium">- Master Gardener, Sarah Chen</div>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PlantCareGuide;

// -------------------------------------------------------------



import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Sun,
  Thermometer,
  Scissors,
  Heart,
  AlertCircle,
  CheckCircle,
  Leaf,
} from "lucide-react";

const PlantCareGuide = () => {
  const [showPlants, setShowPlants] = useState(false);

  const careCategories = [
    {
      icon: Droplets,
      title: "Watering",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      tips: [
        "Check soil moisture before watering",
        "Water thoroughly but allow drainage",
        "Most plants need less water in winter",
        "Use filtered or distilled water when possible",
      ],
    },
    {
      icon: Sun,
      title: "Lighting",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      tips: [
        "Rotate plants weekly for even growth",
        "Most houseplants prefer bright, indirect light",
        "Adjust distance from windows seasonally",
        "Consider grow lights for low-light areas",
      ],
    },
    {
      icon: Thermometer,
      title: "Temperature",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      tips: [
        "Most plants prefer 65-75°F (18-24°C)",
        "Avoid sudden temperature changes",
        "Keep plants away from heating/cooling vents",
        "Increase humidity in dry environments",
      ],
    },
    {
      icon: Scissors,
      title: "Pruning",
      color: "text-primary",
      bgColor: "bg-primary/10",
      tips: [
        "Remove dead or yellowing leaves promptly",
        "Prune in spring for best growth",
        "Use clean, sharp tools to prevent disease",
        "Pinch growth tips to encourage bushiness",
      ],
    },
  ];

  const commonIssues = [
    {
      issue: "Yellow Leaves",
      causes: ["Overwatering", "Poor drainage", "Natural aging"],
      solution: "Check soil moisture and improve drainage",
      severity: "medium",
    },
    {
      issue: "Brown Tips",
      causes: ["Low humidity", "Fluoride in water", "Overfertilization"],
      solution: "Increase humidity and use filtered water",
      severity: "low",
    },
    {
      issue: "Dropping Leaves",
      causes: ["Stress from moving", "Temperature changes", "Overwatering"],
      solution: "Maintain consistent environment and care routine",
      severity: "high",
    },
  ];

  const demoPlants = [
    {
      name: "Snake Plant",
      description: "Low maintenance, tolerates low light.",
    },
    {
      name: "Monstera",
      description: "Loves bright, indirect light with weekly watering.",
    },
    {
      name: "Aloe Vera",
      description: "Prefers dry soil and occasional watering.",
    },
    {
      name: "Peace Lily",
      description: "Enjoys medium light and consistent moisture.",
    },
  ];

  return (
    <section id="care" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Plant{" "}
            <span className="text-transparent bg-gradient-forest bg-clip-text">
              Care Guide
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the art of plant care with our expert tips and troubleshooting guide
          </p>
        </motion.div>

        {/* Care Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {careCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 bg-card border-border shadow-card-custom hover:shadow-glow transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}
                >
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{category.title}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li
                      key={tipIndex}
                      className="flex items-start space-x-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Common Issues */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Common{" "}
            <span className="text-transparent bg-gradient-forest bg-clip-text">
              Issues
            </span>{" "}
            & Solutions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commonIssues.map((item, index) => (
              <motion.div
                key={item.issue}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="p-6 bg-card border-border shadow-card-custom hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">{item.issue}</h4>
                    <Badge
                      variant={
                        item.severity === "high"
                          ? "destructive"
                          : item.severity === "medium"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {item.severity}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Common Causes:</p>
                    <ul className="space-y-1">
                      {item.causes.map((cause, causeIndex) => (
                        <li
                          key={causeIndex}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <AlertCircle className="h-3 w-3 text-warning" />
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <p className="text-sm font-medium text-success mb-1">Solution:</p>
                    <p className="text-sm text-foreground">{item.solution}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-forest/5 border-primary/20 max-w-4xl mx-auto">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-glow-pulse" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Pro Tip</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "The key to successful plant parenting is consistency and observation. Spend a
              few minutes each day checking on your plants - they'll tell you what they
              need!"
            </p>
            <div className="mt-4 text-sm text-primary font-medium">
              - Master Gardener, Sarah Chen
            </div>
          </Card>
        </motion.div>

        {/* View All Plants Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setShowPlants(!showPlants)}
            className="px-6 py-3 text-lg rounded-2xl shadow-lg"
          >
            {showPlants ? "Hide Plants" : "View All Plants"}
          </Button>
        </div>

        {/* Demo Plants Section */}
        {showPlants && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {demoPlants.map((plant, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card border-border shadow-card-custom hover:shadow-glow"
              >
                <Leaf className="h-8 w-8 text-green-500 mb-4" />
                <h4 className="text-xl font-bold text-foreground">{plant.name}</h4>
                <p className="text-muted-foreground text-sm mt-2">{plant.description}</p>
              </Card>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PlantCareGuide;
