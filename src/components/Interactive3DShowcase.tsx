import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, ZoomIn, Move3D } from 'lucide-react';

function PlantScene({ selectedPlant }: { selectedPlant: number }) {
  const plants = [
    { color: '#22c55e', size: 1, leaves: 8 },
    { color: '#16a34a', size: 1.2, leaves: 12 },
    { color: '#15803d', size: 0.8, leaves: 6 }
  ];

  const plant = plants[selectedPlant];

  return (
    <group>
      {/* Pot */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.8, 1, 1, 16]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        
        {/* Soil */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.1, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        
        {/* Main stem */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 2 * plant.size, 8]} />
          <meshStandardMaterial color="#2d5a3d" />
        </mesh>
        
        {/* Leaves */}
        {Array.from({ length: plant.leaves }).map((_, i) => (
          <Float key={i} speed={2 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.1}>
            <mesh 
              position={[
                Math.cos((i * Math.PI * 2) / plant.leaves) * 0.7,
                (i * 0.3 - 0.5) * plant.size,
                Math.sin((i * Math.PI * 2) / plant.leaves) * 0.7
              ]} 
              rotation={[0, (i * Math.PI * 2) / plant.leaves, Math.PI / 6]}
            >
              <planeGeometry args={[0.8 * plant.size, 0.6 * plant.size]} />
              <meshStandardMaterial 
                color={plant.color}
                side={2}
                transparent
                opacity={0.9}
              />
            </mesh>
          </Float>
        ))}
      </Float>
      
      {/* Contact shadows for realism */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={3} 
        blur={2} 
        far={2} 
      />
    </group>
  );
}

const Interactive3DShowcase = () => {
  const [selectedPlant, setSelectedPlant] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const plantTypes = [
    { name: 'Monstera Deliciosa', type: 'Indoor Plant', price: '$45' },
    { name: 'Fiddle Leaf Fig', type: 'Statement Plant', price: '$65' },
    { name: 'Snake Plant', type: 'Low Light', price: '$35' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="text-transparent bg-gradient-forest bg-clip-text">3D Preview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our plants in stunning 3D detail. Rotate, zoom, and interact with your future green companions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plant Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Choose a Plant</h3>
            {plantTypes.map((plant, index) => (
              <Card 
                key={index}
                className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                  selectedPlant === index 
                    ? 'border-primary bg-primary/5 shadow-glow' 
                    : 'border-border hover:border-primary/50 hover:shadow-plant'
                }`}
                onClick={() => setSelectedPlant(index)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-foreground">{plant.name}</h4>
                  <Badge variant={selectedPlant === index ? 'default' : 'secondary'}>
                    {plant.price}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{plant.type}</p>
              </Card>
            ))}

            {/* Controls */}
            <div className="pt-6 space-y-3">
              <h4 className="font-semibold text-foreground">3D Controls</h4>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setAutoRotate(!autoRotate)}
                  className="flex-1"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  {autoRotate ? 'Stop' : 'Auto'} Rotate
                </Button>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <Move3D className="h-3 w-3" />
                  <span>Click & drag to rotate</span>
                </div>
                <div className="flex items-center gap-2">
                  <ZoomIn className="h-3 w-3" />
                  <span>Scroll to zoom in/out</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="aspect-video lg:aspect-square bg-gradient-to-br from-muted/20 to-muted/40 border-border overflow-hidden">
              <div className="w-full h-full">
                <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                  <pointLight position={[-10, -10, -5]} intensity={0.3} />
                  
                  <PlantScene selectedPlant={selectedPlant} />
                  
                  <Environment preset="city" />
                  <OrbitControls 
                    enableZoom={true} 
                    enablePan={false} 
                    autoRotate={autoRotate}
                    autoRotateSpeed={1}
                    minDistance={2}
                    maxDistance={8}
                  />
                </Canvas>
              </div>
            </Card>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-center"
            >
              <Button className="bg-gradient-forest hover:shadow-glow transition-all duration-500">
                Add {plantTypes[selectedPlant].name} to Cart - {plantTypes[selectedPlant].price}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "See Before You Buy",
              description: "Examine every detail in 3D before making your purchase decision."
            },
            {
              title: "True-to-Life Scale",
              description: "Get accurate size representation to plan your space perfectly."
            },
            {
              title: "Interactive Experience",
              description: "Engage with your future plants like never before with our 3D technology."
            }
          ].map((benefit, index) => (
            <Card key={index} className="p-6 text-center bg-card border-border">
              <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interactive3DShowcase;